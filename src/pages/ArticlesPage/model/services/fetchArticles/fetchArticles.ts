import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkAPIOptions } from "app/providers/StoreProvider";
import { Article } from "entities/Article";


export const fetchArticles = 
createAsyncThunk<
    Article[],
    void,
    ThunkAPIOptions<string>
>(
    'articlesPage/fetchArticles',
    async (_, ThunkAPI) => {
        const { extra, rejectWithValue} = ThunkAPI;

        try {

            const response = await extra.api?.get<Article[]>('/articles', {
                params: {
                    _expand: 'user'
                }
            });

            if (!response?.data) {
                throw new Error();
            };

            return response.data;

        } catch (error) {
            return rejectWithValue('errors.FAILED_TO_FETCH_ARTICLES');
        }
    }
)