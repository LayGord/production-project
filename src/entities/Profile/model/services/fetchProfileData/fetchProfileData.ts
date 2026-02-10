import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkAPIOptions } from "app/providers/StoreProvider";
import { Profile } from "../../types/ProfileSchema";

export interface FetchProfileDataProps {};

export const fetchProfileData = 
createAsyncThunk<Profile, void, ThunkAPIOptions<string>>(
    'profile/fetchProfileData',
    async (_, ThunkAPI) => {
        const { extra, rejectWithValue} = ThunkAPI;
        console.log(extra.api?.defaults.headers);
        try {
            const response = await extra.api?.get<Profile>('/profile');
            if (!response?.data) {
                throw new Error()
            };
            return response.data;

        } catch (error) {
            return rejectWithValue('ProfileCard.errors.requestFailed');
        }
    }
)