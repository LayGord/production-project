import { useParams } from 'react-router-dom';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useinitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicReducerLoader,
    ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import {
    articleDetailsCommentsReducer,
    getArticleDetailsComments,
} from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';
import cls from './ArticleDetailsPage.module.scss';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsPageProps {
   className?: string;
}

const reducers: ReducersList = {articleDetailsComments: articleDetailsCommentsReducer}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article_details');
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleDetailsComments.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    })

    if ( __PROJECT__ === 'storybook') {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={"1"}/>
            </div>
        );
    }

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('incorrectId')}
            </div>
        )
    }

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id}/>
                <Text
                    size={TextSize.L}
                    className={cls.comments}
                    title={t('commentsBlock')}
                />
                <CommentList
                    className={cls.comments}
                    comments={comments}
                    isLoading={commentsIsLoading}
                />
            </div>
        </DynamicReducerLoader>
    );
}

export default memo(ArticleDetailsPage);