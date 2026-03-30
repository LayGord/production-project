import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleListView } from '../../model/types/Article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';


interface ArticleListProps {
   className?: string;
   articles: Article[];
   isLoading?: boolean;
   view?: ArticleListView;
}

export const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleListView.LIST,
    } = props;
    const { t } = useTranslation()

    const renderArticleCard = useCallback((articleData: Article) => {
        return <ArticleListItem key={articleData.id} article={articleData} view={view}/>
    }, [view])

    return (
        <div className={classNames(cls.ArticleList, {}, [className])}>
            {
                articles.map((articleData) => renderArticleCard(articleData))
            }
        </div>
    );
}
