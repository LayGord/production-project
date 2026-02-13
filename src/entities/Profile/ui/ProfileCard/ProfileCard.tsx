import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "../../model/types/ProfileSchema";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import { Loader } from "shared/ui/Loader/Loader";
import { Country, Currency } from "shared/const/common";
import { Avatar, AvatarTheme } from "shared/ui/Avatar/Avatar";


interface ProfileCardProps {
    className?: string;
    formProfileData?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;

    onChangeFirstname?: (firstname: string) => void;
    onChangeLastname?: (lastname: string) => void;
    onChangeAge?: (age: string) => void;
    onChangeUsername?: (username: string) => void;
    onChangeCountry?: (country: Country) => void;
    onChangeCity?: (city: string) => void;
    onChangeCurrency?: (curency: Currency) => void;
    onChangeAvatar?: (url: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) =>{
    const {
        className,
        formProfileData,
        error,
        isLoading = false,
        readonly = true,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
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
            <div className={cls.info}>
                <Avatar 
                    src={formProfileData?.avatar}
                    theme={AvatarTheme.ROUNDED}
                />
                <Input
                    className={cls.input}
                    id="profileCard.firstName"
                    placeholder={t('ProfileCard.firstName')}
                    value={ formProfileData?.firstname }
                    readOnly={readonly}
                    onChange={onChangeFirstname}
                />
                <Input
                    className={cls.input}
                    id="profileCard.lastName"
                    placeholder={t('ProfileCard.lastName')}
                    value={ formProfileData?.lastname }
                    readOnly={readonly}
                    onChange={onChangeLastname}
                />
                <Input
                    className={cls.input}
                    id="profileCard.age"
                    placeholder={t('ProfileCard.age')}
                    value={ formProfileData?.age }
                    readOnly={readonly}
                    onChange={onChangeAge}
                />
            </div>
        </div>
    );
};
