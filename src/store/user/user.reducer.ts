import { AnyAction } from "redux";
import { userSignInFailed, userSignInSuccess, userSignOutFailed, userSignOutSuccess, userSignUpFailed } from "./user.action"
import { UserData } from "../../utils/firebase/firebase.util";

export type UserState = {
    readonly currentUser: UserData | null;
    readonly isLoading: boolean;
    readonly error: Error | null
}

export const INITIAL_STATE: UserState = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const UserReducer = (state = INITIAL_STATE, action: AnyAction): UserState => {

    if (userSignInSuccess.match(action)) {
        return { ...state, currentUser: action.payload }
    }

    if (userSignOutSuccess.match(action)) {
        return { ...state, currentUser: null }
    }

    if (userSignInFailed.match(action) || userSignUpFailed.match(action) || userSignOutFailed.match(action)) {
        return { ...state, error: action.payload }
    }

    return state

    // switch(type) {
    //     case USER_ACTION_TYPES.USER_SIGN_IN_SUCCESS:
    //         return {
    //             ...state,
    //             currentUser: payload
    //         }
    //     case USER_ACTION_TYPES.USER_SIGN_OUT_SUCCESS:
    //         return {
    //             ...state,
    //             currentUser: null
    //         }
    //     case USER_ACTION_TYPES.USER_SIGN_IN_FAILED:
    //     case USER_ACTION_TYPES.USER_SIGN_UP_FAILED:
    //     case USER_ACTION_TYPES.USER_SIGN_OUT_FAILED:
    //         return {
    //             ...state,
    //             error: payload
    //         }
    //     default:
    //         return state
    // }
}

