import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface CommentsListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = (props: CommentsListProps) => {
    const {
        className,
        comments,
        isLoading=false, 
    } = props;

    const { t } = useTranslation('article_details');

    return (
        <div className={classNames(cls.CommentsList, {}, [className])}>
            {comments?.length 
                ? comments.map(comment => (
                    <CommentCard key={comment.id} comment={comment} isLoading={isLoading} />
                ))
                : t('emptyCommentList')
            }
        </div>
    );
}
