import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.util";
import { createAction } from "../utils/reducer/reducer.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

export const UserReducer = (state, action) => {
    const {type, payload} = action;
    //console.log(action)
    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in user reducer`);
    }
}

export const INITIAL_STATE = {
    currentUser: null,
}

export const UserProvider = ({children}) => {
    // const [currentUser, setCurrentUser] = useState(null);
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
    const {currentUser} = state;
    //console.log(currentUser)

    const setCurrentUser = (user) => {
        dispatch(
            createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
        )
    }

    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unSubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        })

        return unSubscribe
    }, [])

    return <UserContext.Provider value = {value}>{children}</UserContext.Provider>
}