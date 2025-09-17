import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('aboutPage.message')}
        </div>
    );
};

export default AboutPage;
