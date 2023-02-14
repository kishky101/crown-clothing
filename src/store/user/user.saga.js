import { takeLatest, all, call, put } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "./user.types";

import { 
    userSignInSuccess, 
    userSignInFailed,
    userSignUpSuccess,
    userSignUpFailed,
    userSignOutFailed, 
    userSignOutSuccess
} from "./user.action";

import { 
    getCurrentUser, 
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInUserWithEmailAndPassword,
    createAuthUserFromEmailAndPassword,
    signOutUser 
} from "../../utils/firebase/firebase.util";

export function* getUserSnapshot(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails)
        yield put(userSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(userSignInFailed(error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getUserSnapshot, userAuth)
    } catch (error) {
        yield put(userSignInFailed(error))
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup);
        yield call(getUserSnapshot, user)
    } catch (error) {
        yield put(userSignInFailed(error))
    }
}

export function* signInWithEmail({payload: {email, password}}) {
    try {
        const { user } = yield call(signInUserWithEmailAndPassword, email, password)
        yield call(getUserSnapshot, user)
    } catch (error) {
        yield put(userSignInFailed(error))
    }
}

export function* signUpUser({payload: {email, password, displayName}}) {
    try {
        const { user } = yield call(createAuthUserFromEmailAndPassword, email, password)
        yield put(userSignUpSuccess(user, { displayName }))
    } catch (error) {
        yield put(userSignUpFailed(error))
    }
}

export function* signInAfterSignUp({payload: {user, additionalDetails}}) {
    yield call(getUserSnapshot, user, additionalDetails)
}

export function* userSignOut() {
    try {
        yield call(signOutUser)
        yield put(userSignOutSuccess())
    } catch (error) {
        yield put(userSignOutFailed)
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignUpUserStart() {
    yield takeLatest(USER_ACTION_TYPES.USER_SIGN_UP_START, signUpUser)
}

export function* onSignUpUserSuccess() {
    yield takeLatest(USER_ACTION_TYPES.USER_SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onUserSignOutStart() {
    yield takeLatest(USER_ACTION_TYPES.USER_SIGN_OUT_START, userSignOut)
}

export function* userSaga() {
    yield all([
        call(onCheckUserSession), 
        call(onGoogleSignInStart), 
        call(onEmailSignInStart),
        call(onSignUpUserStart),
        call(onSignUpUserSuccess),
        call(onUserSignOutStart)
    ])
}