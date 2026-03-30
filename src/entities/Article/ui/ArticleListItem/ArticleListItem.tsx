import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import { Avatar, AvatarTheme } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye-icon.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleBlockType, ArticleListView, ArticleTextBlock } from '../../model/types/Article';
import cls from './ArticleListItem.module.scss';
import { RouterPaths } from 'shared/config/router/routerVars';
import { AppLink } from 'shared/ui/AppLink/AppLink';


interface ArticleListItemProps {
   className?: string;
   article: Article;
   view?: ArticleListView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view = ArticleListView.LIST,
    } = props;
    const { t } = useTranslation('article');

    // reusable blocks
    const viewsBlock = (
        <div className={cls.views}>
            {article.views}
            <EyeIcon />
        </div>
    )

    const typeBlock = (
        <Text
            className={cls.type}
            text={article.type.join(', ')}
        />
    )

    let content;

    if (view == ArticleListView.TILE) {
        content = (
            <>
                <AppLink to={`${RouterPaths.article_details}${article.id}`} >
                    <Card>
                        <div className={cls.imageWrapper}>
                            <Avatar size={200} src={article.img} border={false}/>
                            <Text className={cls.created} text={article.createdAt}/>
                        </div>
                        <div className={cls.info}>
                            {typeBlock}
                            {viewsBlock}
                        </div>
                        <Text
                            className={cls.title}
                            text={article.title}
                        />
                    </Card>
                </AppLink>
            </>
        )
    } else if (view == ArticleListView.LIST) {
        const articleText = article.blocks.find((block) => block.type === ArticleBlockType.TEXT);
        console.log(articleText)
        content = (
            <>  
                <Card>
                    <div className={cls.header}>
                        <div className={cls.userInfo}>
                            {   article.user.avatarUrl &&
                                <Avatar
                                    theme={AvatarTheme.ROUNDED}
                                    size={24}
                                    src={article.user.avatarUrl}
                                    border={false}
                                />
                            }
                            <Text text={article.user.username}/>
                        </div>
                        <div className={cls.created}>{article.createdAt}</div>
                    </div>
                    <Text title={article.title}/>
                    {typeBlock}
                    <img
                        className={cls.articleImage}
                        src={article.img}
                    />
                    <Text
                        className={cls.articleText}
                        text={(articleText as ArticleTextBlock).paragraphs[0]}
                    />
                    <div
                        className={cls.footer}
                    >
                        <AppLink 
                            to={`${RouterPaths.article_details}${article.id}`}
                        >
                            {t('read')}
                        </AppLink>
                        {viewsBlock}
                    </div>
                </Card>
            </>
        )
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            {content}
        </div>
    );
})
