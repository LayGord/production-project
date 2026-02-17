import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

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
};