import { configureStore , applyMiddleware } from '@reduxjs/toolkit';
import rootReducer from "./rootReducer";
import thunk from 'redux-thunk';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// create a method to clear persisted data every time on start

const persistConfig = {
    key:'main-root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({reducer: persistedReducer},applyMiddleware([thunk]));

export const Persistor = persistStore(store);

export default store;