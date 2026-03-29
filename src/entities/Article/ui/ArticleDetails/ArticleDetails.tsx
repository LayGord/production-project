import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar, AvatarTheme } from 'shared/ui/Avatar/Avatar';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import EyeIcon from 'shared/assets/icons/eye-icon.svg';
import CalendarIcon from 'shared/assets/icons/calendar-icon.svg';
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData';
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError';
import {
    getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleBlock, ArticleBlockType } from '../../model/types/Article';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSkeleton } from './ArticleDetailsSkeleton';
import cls from './ArticleDetails.module.scss';


interface ArticleDetailsProps {
   className?: string;
   id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article_details')
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const data = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock, index) => {
        switch (block.type) {
        case ArticleBlockType.TEXT: 
            return <ArticleTextBlockComponent key={index} className={cls.block} blockData={block}/>
        
        case ArticleBlockType.CODE: 
            return <ArticleCodeBlockComponent key={index} className={cls.block} blockData={block}/>
        
        case ArticleBlockType.IMAGE: 
            return <ArticleImageBlockComponent key={index} className={cls.block} blockData={block}/>
        }
    }, []);

    useInitialEffect( () => {
        dispatch(fetchArticleById(id));
    })

    // useEffect(() => {
    //     if (__PROJECT__ != 'storybook') {
    //         dispatch(fetchArticleById(id)); 
    //     }
    // }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = ( <ArticleDetailsSkeleton />)
    } else if (error) {
        content = (
            <div>{t('failedToFetchArticle')}</div>
        )
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        theme={AvatarTheme.ROUNDED}
                        src={data?.img}
                    />
                </div>
                <Text
                    className={cls.title}
                    title={data?.title}
                    text={data?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.info}>
                    <EyeIcon className={cls.icon}/>
                    <Text text={String(data?.views)}/>
                </div>
                <div className={cls.info}>
                    <CalendarIcon className={cls.icon}/>
                    <Text text={String(data?.createdAt)}/>
                </div>
                {
                    data?.blocks.map(renderBlock)
                }
            </>
        )
    }

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicReducerLoader>
    );
});
