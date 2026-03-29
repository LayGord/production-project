import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';


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

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentsList, {}, [className])}>
                <CommentCard key={'1'} isLoading />
                <CommentCard key={'2'} isLoading />
                <CommentCard key={'3'} isLoading />
            </div>
        )
    }

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
