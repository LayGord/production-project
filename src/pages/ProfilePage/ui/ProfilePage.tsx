import { useTranslation } from "react-i18next";

const ProfilePage = () => {
    const { t } = useTranslation('profilePage');
    return (
        <div>
            {t('title')}
        </div>
    )
};

export default ProfilePage;