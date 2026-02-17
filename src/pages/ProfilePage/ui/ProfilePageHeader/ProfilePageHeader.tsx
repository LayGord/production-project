import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getProfileIsLoading, getProfileReadonly, profileActions, updateProfileData } from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import { classNames } from "shared/lib/classNames/classNames";
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

            {
                readonly ?
                    (
                        <Button
                            className={cls.editBtns}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                        >
                            {t('ProfileCard.editBtn')}
                        </Button>
                    )
                    :
                    (
                        <>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onUpdateProfile}
                            >
                                {t('ProfileCard.saveBtn')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onCancelEdit}
                            >
                                {t('ProfileCard.cancelBtn')}
                            </Button>
                        </>
                    )
            }
        </div>
    );
};
