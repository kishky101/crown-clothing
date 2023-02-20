
import { createAction, ActionWithPayload, Action, withMatch } from "../../utils/reducer/reducer.utils"
import { USER_ACTION_TYPES } from "./user.types"
import { UserData, AdditionalInformation } from "../../utils/firebase/firebase.util";

// export const setCurrentUser = (user) => 
//     createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)


/**
 *  CHECK_USER_SESSION: 'user/CHECK_USER_SESSION',
    GOOGLE_SIGN_IN_START: 'user/GOOGLE_SIGN_IN_START',
    EMAIL_SIGN_IN_START: 'user/EMAIL_SIGN_IN_STAR',
    USER_SIGN_IN_SUCCESS: 'user/USER_SIGN_IN_SUCCESS', 
    USER_SIGN_IN_FAILED: 'user/USER_SIGN_IN_FAILED' 
 */
// type UserData = {
//     email: string;
//     password: string;
//     displayName?: string;
// }

// type AdditionalDetails = {
//     //displayName: string;
// }

// export type UserType = {
//     createdAt: number;
//     displayName?: string;
//     email: string;
// }

// type SignUpSuccess = AdditionalDetails & UserType



export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email: string, password: string}>;

export type UserSignInSuccess = ActionWithPayload<USER_ACTION_TYPES.USER_SIGN_IN_SUCCESS, UserData>

export type UserSignInFailed = ActionWithPayload<USER_ACTION_TYPES.USER_SIGN_IN_FAILED, Error>;

export type UserSignUpStart = ActionWithPayload<USER_ACTION_TYPES.USER_SIGN_UP_START, {email: string, password: string, displayName: string}>;

export type UserSignUpSuccess = ActionWithPayload<USER_ACTION_TYPES.USER_SIGN_UP_SUCCESS, {user: UserData, additionalDetails: AdditionalInformation}>

export type UserSignUpFailed = ActionWithPayload<USER_ACTION_TYPES.USER_SIGN_UP_FAILED, Error>;

export type UserSignOutStart = Action<USER_ACTION_TYPES.USER_SIGN_OUT_START>;

export type UserSignOutSuccess = Action<USER_ACTION_TYPES.USER_SIGN_OUT_SUCCESS>;

export type UserSignOutFailed = ActionWithPayload<USER_ACTION_TYPES.USER_SIGN_OUT_FAILED, Error>

export const checkUserSession = withMatch((): CheckUserSession => 
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION));

export const googleSignInStart = withMatch((): GoogleSignInStart => 
    createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START));

export const emailSignInStart = withMatch((email: string, password: string): EmailSignInStart => 
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email, password}));

export const userSignInSuccess = withMatch((user: UserData): UserSignInSuccess => 
    createAction(USER_ACTION_TYPES.USER_SIGN_IN_SUCCESS, user));

export const userSignInFailed = withMatch((error: Error): UserSignInFailed => 
    createAction(USER_ACTION_TYPES.USER_SIGN_IN_FAILED, error));

export const userSignUpStart = withMatch((email: string, password: string, displayName: string): UserSignUpStart => 
    createAction(USER_ACTION_TYPES.USER_SIGN_UP_START, {email, password, displayName}))

export const userSignUpSuccess = (user: UserData, additionalDetails: AdditionalInformation): UserSignUpSuccess => 
     createAction(USER_ACTION_TYPES.USER_SIGN_UP_SUCCESS, {user, additionalDetails});

export const userSignUpFailed = withMatch((error: Error): UserSignUpFailed => 
    createAction(USER_ACTION_TYPES.USER_SIGN_UP_FAILED, error));

export const userSignOutStart = withMatch((): UserSignOutStart => 
    createAction(USER_ACTION_TYPES.USER_SIGN_OUT_START))

export const userSignOutSuccess = withMatch((): UserSignOutSuccess => 
    createAction(USER_ACTION_TYPES.USER_SIGN_OUT_SUCCESS))

export const userSignOutFailed = withMatch((error: Error): UserSignOutFailed => 
    createAction(USER_ACTION_TYPES.USER_SIGN_OUT_FAILED, error))
