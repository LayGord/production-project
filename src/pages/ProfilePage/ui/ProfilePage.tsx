import { 
    getProfileData, 
    getProfileError, 
    getProfileIsLoading, 
    getProfileReadonly, 
    ProfileCard, 
    profileReducer, 
} from "entities/Profile";

import { fetchProfileData } from "entities/Profile/model/services/fetchProfileData/fetchProfileData";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";


const reducers: ReducersList = {
    profile: profileReducer
};

const ProfilePage = () => {
    const { t } = useTranslation('profilePage');
    const dispatch = useAppDispatch();

    const profileData = useSelector(getProfileData);
    const profileIsLoading = useSelector(getProfileIsLoading);
    const profileError = useSelector(getProfileError);
    const profileReadonly = useSelector(getProfileReadonly);
    
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch])

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div>
                <ProfileCard
                    profileData={profileData}
                    isLoading={profileIsLoading}
                    error={profileError}
                    readonly={profileReadonly}
                />
            </div>
        </DynamicModuleLoader>
    )

};

export default ProfilePage;