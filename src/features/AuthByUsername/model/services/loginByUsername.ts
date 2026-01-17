import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "entities/User";
import { userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
};

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);
            if (!response.data) {
                throw new Error()
            };
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data)); // token imitation
            thunkAPI.dispatch(userActions.setAuthData(response.data)); // pass sucessfully recieved data to User slice
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue('LoginForm.errors.invalidCreds');
        }
    }
)