import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User/model/slice/userSlice";
import { loginReducer } from "features/AuthByUsername";


export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };
    return configureStore({
        reducer: rootReducers,
        preloadedState: initialState,
        devTools: __IS_DEV__,
    });
};
