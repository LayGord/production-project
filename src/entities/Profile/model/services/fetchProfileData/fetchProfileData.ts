import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkAPIOptions } from "app/providers/StoreProvider";
import { Profile, ValidateProfileDataError } from "../../types/ProfileSchema";

export interface FetchProfileDataProps {};

export const fetchProfileData = 
createAsyncThunk<Profile, void, ThunkAPIOptions<string>>(
    'profile/fetchProfileData',
    async (_, ThunkAPI) => {
        const { extra, rejectWithValue} = ThunkAPI;

        try {
            const response = await extra.api?.get<Profile>('/profile');
            if (!response?.data) {
                throw new Error();
            };
            return response.data;

        } catch (error) {
            return rejectWithValue(ValidateProfileDataError.SERVER_ERROR);
        }
    }
)