import { legacy_createStore as createStore } from "redux";
import { compose, applyMiddleware } from "redux";
import { loggerMiddleWare } from "./middleware/logger";
import { rootReducer } from "./rootReducer";

const middleware = [loggerMiddleWare]

const composedEnhancer = compose(applyMiddleware(...middleware))

export const store = createStore(rootReducer, undefined, composedEnhancer)
