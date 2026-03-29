import { classNames } from "shared/lib/classNames/classNames"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import cls from './ProfileCard.module.scss';

export const ProfileCardSkeleton = () => {
    return (
        <>
            <Skeleton 
                className={classNames(cls.input, {}, [cls.avatar])}
                height={200}
                width={200}
                border={'50%'}
            />
            <div
                className={cls.infoColumns}
            >
                <div
                    className={cls.mainInfo}
                >
                    <Skeleton height={20} width={180} className={cls.colTitle}/>
                    <Skeleton
                        className={cls.input}
                        height={45} width={'100%'}
                    />
                    <Skeleton
                        className={cls.input}
                        height={45} width={'100%'}
                    />
                    <Skeleton
                        className={cls.input}
                        height={45} width={'100%'}
                    />
                    <Skeleton
                        className={cls.input}
                        height={45} width={'100%'}
                    />
                </div>
                <div
                    className={cls.regionalInfo}
                >
                    <Skeleton
                        className={cls.colTitle}
                        height={20} width={180}
                    />
                    <Skeleton
                        className={cls.input}
                        height={45} width={'100%'}
                    />
                    <Skeleton
                        className={cls.input}
                        height={45} width={'100%'}
                    />
                    <Skeleton
                        className={cls.input}
                        height={45} width={'100%'}
                    />
                </div>
            </div>
        </>
    )
}