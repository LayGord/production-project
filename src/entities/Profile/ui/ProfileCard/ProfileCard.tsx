import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import { useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfiledata";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";


interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) =>{
    const { t } = useTranslation('profilePage');
    const profileData = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    console.log(profileData)
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
                />
                <Input
                    className={cls.input}
                    id="profileCard.lastName"
                    placeholder={t('ProfileCard.lastName')}
                    value={ profileData?.lastname }
                />
                <Input
                    className={cls.input}
                    id="profileCard.age"
                    placeholder={t('ProfileCard.age')}
                    value={ profileData?.age }
                />
            </div>
        </div>
    );
};
