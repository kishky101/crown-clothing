import { createAction } from "../../utils/reducer/reducer.utils"
import { USER_ACTION_TYPES } from "./user.types"

export const setCurrentUser = (user) => 
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)


/**
 *  CHECK_USER_SESSION: 'user/CHECK_USER_SESSION',
    GOOGLE_SIGN_IN_START: 'user/GOOGLE_SIGN_IN_START',
    EMAIL_SIGN_IN_START: 'user/EMAIL_SIGN_IN_STAR',
    USER_SIGN_IN_SUCCESS: 'user/USER_SIGN_IN_SUCCESS', 
    USER_SIGN_IN_FAILED: 'user/USER_SIGN_IN_FAILED' 
 */

export const checkUserSession = () => 
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () => 
    createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) => 
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email, password});

export const userSignInSuccess = (user) => 
    createAction(USER_ACTION_TYPES.USER_SIGN_IN_SUCCESS, user);

export const userSignInFailed = (error) => 
    createAction(USER_ACTION_TYPES.USER_SIGN_IN_FAILED, error);

export const userSignUpStart = (email, password, displayName) => 
    createAction(USER_ACTION_TYPES.USER_SIGN_UP_START, {email, password, displayName})

export const userSignUpSuccess = (user, additionalDetails) => 
     createAction(USER_ACTION_TYPES.USER_SIGN_UP_SUCCESS, {user, additionalDetails});

export const userSignUpFailed = (error) => 
    createAction(USER_ACTION_TYPES.USER_SIGN_UP_FAILED, error);

export const userSignOutStart = () => 
    createAction(USER_ACTION_TYPES.USER_SIGN_OUT_START)

export const userSignOutSuccess = () => 
    createAction(USER_ACTION_TYPES.USER_SIGN_OUT_SUCCESS)

export const userSignOutFailed = (error) => 
    createAction(USER_ACTION_TYPES.USER_SIGN_OUT_FAILED, error)
