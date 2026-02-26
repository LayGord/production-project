import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { 
    getProfileDataUsername,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    updateProfileData 
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import { classNames } from "shared/lib/classNames/classNames";
import EditIcon from 'shared/assets/icons/edit-line-icon.svg';
import SaveIcon from 'shared/assets/icons/save-icon.svg';
import CancelIcon from 'shared/assets/icons/cancel-icon.svg';
import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageheaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageheaderProps) =>{
    const {
        className,
    } = props;

    const { t } = useTranslation('profilePage');

    const readonly = useSelector(getProfileReadonly);
    const isLoading = useSelector(getProfileIsLoading);

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch]);

    const onUpdateProfile = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch]);


    return(
        <div className={ classNames(cls.ProfilePageHeader, {}, [className]) }>
            <Text
                title={t('ProfileCard.header')}
            />

            <div
                className={cls.editBtns}
            >
                {
                    readonly ?
                        (
                            <Button
                                className={cls.btn}
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                            >   
                                <EditIcon />
                                {t('ProfileCard.editBtn')}
                            </Button>
                        )
                        :
                        (
                            <>
                                <Button
                                    className={cls.btn}
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onUpdateProfile}
                                    disabled={isLoading}
                                >
                                    <SaveIcon />
                                    {t('ProfileCard.saveBtn')}
                                </Button>
                                <Button
                                    className={cls.btn}
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onCancelEdit}
                                    disabled={isLoading}
                                >
                                    <CancelIcon />
                                    {t('ProfileCard.cancelBtn')}
                                </Button>
                            </>
                        )
                }
            </div>
        </div>
    );
};
