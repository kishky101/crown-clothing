import { takeLatest, all, call, put } from "typed-redux-saga/macro";

import { USER_ACTION_TYPES } from "./user.types";
import { User } from "firebase/auth";
import { 
    userSignInSuccess, 
    userSignInFailed,
    userSignUpSuccess,
    userSignUpFailed,
    userSignOutFailed, 
    userSignOutSuccess,
    EmailSignInStart,
    UserSignUpStart,
    UserSignUpSuccess
} from "./user.action";

import { 
    getCurrentUser, 
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInUserWithEmailAndPassword,
    createAuthUserFromEmailAndPassword,
    signOutUser,
    AdditionalInformation 
} from "../../utils/firebase/firebase.util";

export function* getUserSnapshot(userAuth: User, additionalDetails?: AdditionalInformation) {
    try {
        const userSnapshot = yield* call(createUserDocumentFromAuth, userAuth, additionalDetails);
        if (userSnapshot) {
            yield* put(userSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
        }
        
    } catch (error) {
        yield* put(userSignInFailed(error as Error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield* call(getCurrentUser);
        if (!userAuth) return;
        yield* call(getUserSnapshot, userAuth)
    } catch (error) {
        yield* put(userSignInFailed(error as Error))
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield* call(signInWithGooglePopup);
        yield* call(getUserSnapshot, user)
    } catch (error) {
        yield* put(userSignInFailed(error as Error))
    }
}

export function* signInWithEmail({payload: {email, password}}: EmailSignInStart) {
    try {
        const userCredentials = yield* call(signInUserWithEmailAndPassword, email, password)
        if (userCredentials) {
            const { user } = userCredentials
            yield* call(getUserSnapshot, user)
        }
        
    } catch (error) {
        yield* put(userSignInFailed(error as Error))
    }
}

export function* signUpUser({payload: {email, password, displayName}}: UserSignUpStart) {
    try {
        const userCredentials = yield* call(createAuthUserFromEmailAndPassword, email, password)
        if (userCredentials) {
            const {user} = userCredentials
            yield* put(userSignUpSuccess(user, { displayName }))
        }
        
    } catch (error) {
        yield* put(userSignUpFailed(error as Error))
    }
}

export function* signInAfterSignUp({payload: {user, additionalDetails}}: UserSignUpSuccess) {
    yield* call(getUserSnapshot, user, additionalDetails)
}

export function* userSignOut() {
    try {
        yield* call(signOutUser)
        yield* put(userSignOutSuccess())
    } catch (error) {
        yield* put(userSignOutFailed)
    }
}

export function* onEmailSignInStart() {
    yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onGoogleSignInStart() {
    yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession() {
    yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignUpUserStart() {
    yield* takeLatest(USER_ACTION_TYPES.USER_SIGN_UP_START, signUpUser)
}

export function* onSignUpUserSuccess() {
    yield* takeLatest(USER_ACTION_TYPES.USER_SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onUserSignOutStart() {
    yield* takeLatest(USER_ACTION_TYPES.USER_SIGN_OUT_START, userSignOut)
}

export function* userSaga() {
    yield* all([
        call(onCheckUserSession), 
        call(onGoogleSignInStart), 
        call(onEmailSignInStart),
        call(onSignUpUserStart),
        call(onSignUpUserSuccess),
        call(onUserSignOutStart)
    ])
}