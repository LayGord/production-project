import { classNames } from "shared/lib/classNames/classNames"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import cls from './CommentCard.module.scss';


export const CommentCardSkeleton = () => {
    return (
        <div className={classNames(cls.CommentCard, {}, [cls.loading])}>
            <div className={cls.header}>
                <Skeleton
                    border={'50%'}
                    width={30}
                    height={30}
                />
                <Skeleton width={'45%'} height={20}/>
            </div>
            <Skeleton
                className={cls.commentText}
                width={'95%'}
                height={50}
            />
        </div>
    )
}