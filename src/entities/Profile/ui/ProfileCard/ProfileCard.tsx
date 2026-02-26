import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Country, CountrySelect } from "entities/Country";
import { Currency, CurrencySelect } from "entities/Currency";
import { Text } from "shared/ui/Text/Text";
import { Input, InputTheme } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar, AvatarTheme } from "shared/ui/Avatar/Avatar";
import { Profile } from "../../model/types/ProfileSchema";
import { AvatarModal } from "../AvatarModal/AvatarModal";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import { SelectTheme } from "shared/ui/Select/Select";


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
        onChangeUsername,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeAvatar,
        onChangeCity,
        onChangeCountry,
        onChangeCurrency,
    } = props;

    const { t } = useTranslation('profilePage');

    const [isAvatarModal, setIsAvatarModal] = useState(false);
    const onAvatarModal = () => {
        setIsAvatarModal(true)
    };
    const onCloseAvatarModal = () => {
        setIsAvatarModal(false)
    };

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
                    title={t('ProfileCard.errors.GET_REQUEST_FAILED')}
                />
            </div>
        )
    }


    // avatar >
    // InfoCols > main + regional
    // modal >

    return(
        <div className={ classNames(cls.ProfileCard, {}, [className]) }>
            <Avatar
                className={classNames(cls.input, {}, [cls.avatar])}
                src={formProfileData?.avatar}
                theme={AvatarTheme.ROUNDED}
                size={200}
                editable={!readonly}
                onEdit={onAvatarModal}
            />

            <div
                className={cls.infoColumns}
            >
                <div
                    className={cls.mainInfo}
                >
                    <Text text={t('ProfileCard.mainInfo')}/>
                    <Input
                        className={cls.input}
                        id="profileCard.userName"
                        placeholder={t('ProfileCard.userName')}
                        value={ formProfileData?.username }
                        readOnly={readonly}
                        onChange={onChangeUsername}
                        theme={InputTheme.UNDERLINE}
                    />
                    <Input
                        className={cls.input}
                        id="profileCard.firstName"
                        placeholder={t('ProfileCard.firstName')}
                        value={ formProfileData?.firstname }
                        readOnly={readonly}
                        onChange={onChangeFirstname}
                        theme={InputTheme.UNDERLINE}
                    />
                    <Input
                        className={cls.input}
                        id="profileCard.lastName"
                        placeholder={t('ProfileCard.lastName')}
                        value={ formProfileData?.lastname }
                        readOnly={readonly}
                        onChange={onChangeLastname}
                        theme={InputTheme.UNDERLINE}
                    />
                    <Input
                        className={cls.input}
                        id="profileCard.age"
                        placeholder={t('ProfileCard.age')}
                        value={ formProfileData?.age }
                        readOnly={readonly}
                        onChange={onChangeAge}
                        theme={InputTheme.UNDERLINE}
                    />
                </div>
                <div
                    className={cls.regionalInfo}
                >
                    <Text text={t('ProfileCard.regionalInfo')}/>
                    <CountrySelect
                        className={cls.input}
                        id="profileCard.country"
                        value={ formProfileData?.country }
                        readOnly={readonly}
                        onChange={onChangeCountry}
                        theme={SelectTheme.UNDERLINE}
                        
                    />
                    <Input
                        className={cls.input}
                        id="profileCard.city"
                        placeholder={t('ProfileCard.city')}
                        value={ formProfileData?.city }
                        readOnly={readonly}
                        onChange={onChangeCity}
                        theme={InputTheme.UNDERLINE}
                    />
                    <CurrencySelect
                        className={cls.input}
                        id="profileCard.currency"
                        value={ formProfileData?.currency }
                        readOnly={readonly}
                        onChange={onChangeCurrency}
                        theme={SelectTheme.UNDERLINE}
                    />
                </div>
            </div>
            {
                isAvatarModal && 
                <AvatarModal 
                    isOpen={isAvatarModal}
                    onClose={onCloseAvatarModal}
                    src={formProfileData?.avatar || ''}
                    onChangeAvatar={onChangeAvatar}
                />
            }
        </div>
    );
};
