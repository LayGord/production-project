import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { Avatar, AvatarTheme } from 'shared/ui/Avatar/Avatar';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RouterPaths } from 'shared/config/router/routerVars';

interface CommentCardProps {
   className?: string;
   comment?: Comment;
   isLoading?: boolean;
}

export const CommentCard = (props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading = false,
    } = props;
    const { t } = useTranslation()

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
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

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink
                to={`${RouterPaths.profiles}${comment?.user.id}`}
                className={cls.header}
            >
                <Avatar
                    src={comment?.user.avatarUrl || '' }
                    size={30}
                    theme={AvatarTheme.ROUNDED}
                />
                <Text
                    title={comment?.user.username}
                />
            </AppLink>
            <Text
                className={cls.commentText}
                text={comment?.text}
            />
        </div>
    );
}
