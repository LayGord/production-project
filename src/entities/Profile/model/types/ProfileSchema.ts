import { Country, Currency } from "shared/const/common";

export interface Profile {
    firstname?: string;
    lastname?: string;
    username?: string;
    avatar?: string;
    age?: number;
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
};