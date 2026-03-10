export {
    ArticleDetails,
} from './ui/ArticleDetails/ArticleDetails';

export type {
    Article,
} from './model/types/Article';

export type {
    ArticleDetailsSchema,
} from './model/types/ArticleDetailsSchema';

export { getArticleDetailsData } from './model/selectors/getArticleDetailsData/getArticleDetailsData';
export { getArticleDetailsError } from './model/selectors/getArticleDetailsError/getArticleDetailsError';
export { getArticleDetailsIsLoading } from './model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading';

export {
    fetchArticleById,
} from './model/services/fetchArticleById/fetchArticleById';