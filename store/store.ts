import notesReducer from "./notesSlice"
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";

const persistConfig = {
    key: "root",
    storage: localStorage,
    whitelist: ["notes"],
}

const rootReducer = combineReducers({ "notes": notesReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware({
            serializableCheck: false,
        })
    )
})

export type rootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
