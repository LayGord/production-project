import { Profile, ValidateProfileDataError } from "../../types/ProfileSchema";

export const validateProfileData = (profileData?: Profile) => {

    if (!profileData) {
        return [ValidateProfileDataError.NO_DATA];
    }

    const errors: ValidateProfileDataError[] = [];

    const {
        username, 
        firstname, 
        lastname, 
        age,
        country, 
        city, 
        currency
    } = profileData;

    if (!username) {
        errors.push(ValidateProfileDataError.INCORRECT_USERNAME)
    }
    console.log(errors)

    if (!firstname || !lastname) {
        errors.push(ValidateProfileDataError.INCORRECT_USER_DATA)
    }
    console.log(errors)

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileDataError.INCORRECT_AGE)
    }
    console.log(errors)

    if (!country || !city || !currency) {
        errors.push(ValidateProfileDataError.INCORRECT_REGIONAL_DATA)
    }
    console.log(errors)

    return errors;
}