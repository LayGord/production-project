import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";


describe('articlesPageSlice.test', () => {

    //extra reducers
    test('should fetchCommentsByArticleId.pending change isLoading', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: false,
        };
        expect(
            articleDetailsCommentsReducer(state as ArticleDetailsCommentsSchema, fetchCommentsByArticleId.pending)
        ).toEqual({
            error: undefined,
            isLoading: true
        })
    });

});
