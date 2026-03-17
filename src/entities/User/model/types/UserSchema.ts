export interface User {
    id: string;
    username: string;
    avatarUrl?: string;
};

export interface UserSchema {
    authData?: User;
    _inited: boolean;
};
