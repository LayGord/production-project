import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkAPIOptions } from "app/providers/StoreProvider";
import { Profile } from "../../types/ProfileSchema";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";


export const updateProfileData = 
createAsyncThunk<Profile, void, ThunkAPIOptions<string>>(
    'profile/updateProfileData',
    async (_, ThunkAPI) => {
        const { extra, rejectWithValue, getState} = ThunkAPI;
        const formData = getProfileForm(getState());

        try {
            const response = await extra.api?.put<Profile>('/profile', formData);
            if (!response?.data) {
                throw new Error()
            };
            return response.data;

        } catch (error) {
            return rejectWithValue('ProfileCard.errors.putRequestFailed');
        }
    }
)