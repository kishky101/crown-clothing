import { legacy_createStore as createStore } from "redux"
import { compose,  applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//import thunk from "redux-thunk";
//import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import { loggerMiddleWare } from "./middleware/logger";

import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [process.env.NODE_ENV !== 'production' && loggerMiddleWare, sagaMiddleware].filter(Boolean);

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store)
