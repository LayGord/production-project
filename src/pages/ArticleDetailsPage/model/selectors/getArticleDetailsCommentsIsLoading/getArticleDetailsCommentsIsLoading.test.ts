import { StateSchema } from "app/providers/StoreProvider"
import { getArticleDetailsCommentsIsLoading } from "./getArticleDetailsCommentsIsLoading"


describe('getArticleDetailsCommentsIsLoading.test', () => {

    test('should return getArticleDetailsComments isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                isLoading: true
            }
        };
        expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toBe(true)
    });

    test('empty articleDetailsComments state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {}
        };
        expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toBe(undefined)
    })
});