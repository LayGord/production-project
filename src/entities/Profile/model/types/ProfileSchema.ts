import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

export enum ValidateProfileDataError {
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
    INCORRECT_USERNAME = 'INCORRECT_USERNAME',
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_REGIONAL_DATA = 'INCORRECT_REGIONAL_DATA',
}

export interface Profile {
    firstname?: string;
    lastname?: string;
    username?: string;
    avatar?: string;
    age?: number | string;
    country?: Country;
    city?: string;
    currency?: Currency;
};

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileDataError[];
};