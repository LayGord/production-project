import { memo } from "react";
import { Card } from "shared/ui/Card/Card";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { ArticleListView } from "../../model/types/Article";
import cls from './ArticleListItem.module.scss';


interface ArticleListItemSkeletonProps {
    view?: ArticleListView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const {
        view = ArticleListView.TILE,
    } = props;

    if ( view === ArticleListView.LIST ) {
        return(
            <>
                <Card>
                    <div className={cls.header}>
                        <div className={cls.user}>
                            <Skeleton width={80} height={24}/>
                        </div>
                        <Skeleton className={cls.created} width={60} height={24}/>
                    </div>
                    <Skeleton className={cls.title} width={'50%'} height={32}/>
                    <Skeleton className={cls.type} width={100} height={24}/>
                    <Skeleton className={cls.title} width={'100%'} height={200}/>
                    <Skeleton width={'100%'} height={150}/>
                    <div className={cls.footer}>
                        <Skeleton width={70} height={24}/>
                        <Skeleton className={cls.views} width={50} height={24}/>
                    </div>
                </Card>
            </>
        );
    };

    return(
        <>
            <div>
                <Card>
                    <Skeleton className={cls.imageWrapper} width={200} height={200}/>
                    <div className={cls.info}>
                        <Skeleton className={cls.type} width={80} height={24}/>
                        <Skeleton className={cls.views} width={50} height={24}/>
                    </div>
                    <Skeleton width={'100%'} height={24}/>
                </Card>
            </div>
        </>
    );
});

