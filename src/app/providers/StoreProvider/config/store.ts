import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "widgets/Counter/model/slice/counterSlice";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer
    };
    return configureStore({
        reducer: rootReducers,
        preloadedState: initialState,
        devTools: __IS_DEV__,
    });
};
