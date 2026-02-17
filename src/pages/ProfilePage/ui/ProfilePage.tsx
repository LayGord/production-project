import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { 
    getProfileData, 
    getProfileError, 
    getProfileIsLoading, 
    getProfileReadonly, 
    ProfileCard, 
    profileReducer,
    fetchProfileData,
    profileActions,
} from "entities/Profile";

import { DynamicReducerLoader, ReducersList } from "shared/lib/components/DynamicReducerLoader/DynamicReducerLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileForm } from "entities/Profile";

const reducers: ReducersList = {
    profile: profileReducer
};

const ProfilePage = () => {
    const { t } = useTranslation('profilePage');
    const dispatch = useAppDispatch();

    const profileData = useSelector(getProfileForm);
    const profileIsLoading = useSelector(getProfileIsLoading);
    const profileError = useSelector(getProfileError);
    const profileReadonly = useSelector(getProfileReadonly);
    

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch])


    const onChangeFirstname = useCallback((firstname: string) => {
        dispatch(profileActions.updateFormData({firstname: firstname || ''}))
    }, [dispatch]);

    const onChangeLastname = useCallback((lastname: string) => {
        dispatch(profileActions.updateFormData({lastname: lastname || ''}))
    }, [dispatch]);

    const onChangeUsername = useCallback((username: string) => {
        dispatch(profileActions.updateFormData({username: username || ''}))
    }, [dispatch]);

    const onChangeAge = useCallback((age: string) => {
        dispatch(profileActions.updateFormData({age: Number(age || 0)}))
    }, [dispatch]);

    const onChangeAvatar = useCallback((url: string) => {
        dispatch(profileActions.updateFormData({avatar: url || ''}))
    }, [dispatch]);
    
    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateFormData({country: country || Country.Not_set}))
    }, [dispatch]);

    const onChangeCity = useCallback((city: string) => {
        dispatch(profileActions.updateFormData({city: city || ''}))
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateFormData({currency: currency || Currency.Not_set}))
    }, [dispatch]);


    return (
        <DynamicReducerLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div>
                <ProfilePageHeader />
                <ProfileCard
                    formProfileData={profileData}
                    isLoading={profileIsLoading}
                    error={profileError}
                    readonly={profileReadonly}
                    onChangeUsername={onChangeUsername}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCountry={onChangeCountry}
                    onChangeCity={onChangeCity}
                    onChangeCurrency={onChangeCurrency}
                />
            </div>
        </DynamicReducerLoader>
    )

};

export default ProfilePage;