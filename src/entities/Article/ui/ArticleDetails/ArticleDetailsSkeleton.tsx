import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import cls from './ArticleDetails.module.scss';


export const ArticleDetailsSkeleton = () => {
    return (
        <>
            <Skeleton className={cls.avatar} width={200} height={200} border={'50%'}/>
            <Skeleton className={cls.title} width={'50%'} height={24} />
            <Skeleton className={cls.subtitle} width={'40%'} height={24} />
            <Skeleton className={cls.subtitle} width={'10%'} height={40} />
            <Skeleton className={cls.block} width={'100%'} height={200} />
            <Skeleton className={cls.block} width={'100%'} height={200} />
            <Skeleton className={cls.block} width={'100%'} height={200} />
        </>
    );
}