import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkAPIOptions } from "app/providers/StoreProvider";
import { User } from "entities/User";
import { userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

export interface LoginByUsernameProps {
    username: string;
    password: string;
};

export const loginByUsername = 
createAsyncThunk<User, LoginByUsernameProps, ThunkAPIOptions<string>>(
    'login/loginByUsername',
    async (authData, ThunkAPI) => {
        const { extra, dispatch, rejectWithValue} = ThunkAPI;

        try {
            const response = await extra.api?.post<User>('/login', authData);
            if (!response?.data) {
                throw new Error()
            };
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data)); // token imitation
            dispatch(userActions.setAuthData(response.data)); // pass sucessfully recieved data to User slice
            extra.navigate?.('/profile')
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('LoginForm.errors.invalidCreds');
        }
    }
)