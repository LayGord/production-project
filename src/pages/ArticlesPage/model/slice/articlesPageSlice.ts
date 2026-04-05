import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article, ArticleListView } from "entities/Article";
import { ArticlesPageSchema } from "../types/ArticlesPageSchema";
import { fetchArticles } from "../services/fetchArticles/fetchArticles";
import { ARTICLE_LIST_VIEW_LOCALSTORAGE_KEY } from "shared/const/localStorage";


const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
    name: 'articlesPage',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        ids: [],
        entities: {},
        error: undefined,
        isLoading: false,
        view: ArticleListView.LIST,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleListView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_LIST_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        initView: (state) => {
            state.view = localStorage.getItem(ARTICLE_LIST_VIEW_LOCALSTORAGE_KEY) as ArticleListView;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                state.error = undefined;
                articlesAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = true;
                state.error = action.payload;
            })
    },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;