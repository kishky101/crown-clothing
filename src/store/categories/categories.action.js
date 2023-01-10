import { createAction } from "../../utils/reducer/reducer";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const setCategoriesMap = (categories) => 
    createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories)