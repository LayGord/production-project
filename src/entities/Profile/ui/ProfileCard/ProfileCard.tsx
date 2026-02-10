import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "../../model/types/ProfileSchema";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import { Loader } from "shared/ui/Loader/Loader";


interface ProfileCardProps {
    className?: string;
    profileData?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) =>{
    const {
        className,
        profileData,
        error,
        isLoading = false,
        readonly = true,
    } = props;

    const { t } = useTranslation('profilePage');

    if (isLoading) {
        return(
            <div className={ classNames(cls.ProfileCard, {}, [className]) }>
                <Loader/>
            </div>
        )
    }

    if (error) {
        return(
            <div className={ classNames(cls.ProfileCard, {}, [className]) }>
                <Text 
                    title={t('ProfileCard.errors.requestFailed')}
                />
            </div>
        )
    }

    return(
        <div className={ classNames(cls.ProfileCard, {}, [className]) }>
            <div
                className={cls.header}
            >
                <Text title={t('ProfileCard.header')}/>
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('ProfileCard.editBtn')}
                </Button>
            </div>
            <div className={cls.info}>
                <Input
                    className={cls.input}
                    id="profileCard.firstName"
                    placeholder={t('ProfileCard.firstName')}
                    value={ profileData?.firstname }
                    readOnly={readonly}
                />
                <Input
                    className={cls.input}
                    id="profileCard.lastName"
                    placeholder={t('ProfileCard.lastName')}
                    value={ profileData?.lastname }
                    readOnly={readonly}
                />
                <Input
                    className={cls.input}
                    id="profileCard.age"
                    placeholder={t('ProfileCard.age')}
                    value={ profileData?.age }
                    readOnly={readonly}
                />
            </div>
        </div>
    );
};
