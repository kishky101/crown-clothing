import { newCategoryItem } from "./categories.types";
import { AnyAction } from "redux";
import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } from "./categories.action";

export type CategoriesState = {
    readonly categories: newCategoryItem[];
    readonly isLoading: boolean;
    readonly error: Error | null; 
} 

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
    categories: [],
    isLoading: false,
    error: null
};

export const CategoriesReducer = (state = CATEGORIES_INITIAL_STATE, action: AnyAction): CategoriesState => {

    if (fetchCategoriesStart.match(action)) {
        return { ...state, isLoading: true}
    }

    if (fetchCategoriesSuccess.match(action)) {
        return { ...state, categories: action.payload, isLoading: false}
    }

    if (fetchCategoriesFailed.match(action)) {
        return { ...state, error: action.payload, isLoading: false}
    }

    return state


    // switch(action.type) {
    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
    //         return {
    //             ...state,
    //             isLoading: true
    //         };
    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
    //         return {
    //             ...state,
    //             categories: action.payload,
    //             isLoading: false
    //         };
    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
    //         return {
    //             ...state,
    //             error: action.payload,
    //             isLoading: false
    //         };
       
    //     default:
    //         return state
    // }
};
