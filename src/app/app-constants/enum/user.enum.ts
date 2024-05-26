
export enum UserTypes {
    admin= 'admin',
    standard= 'standard',
    premium = 'premium',
    public= 'public'
}

/**
 * Represents the status of a user.
 */
export enum UserStatus {
    pending= 'pending',
    active= 'active',
    inactive= 'inactive',
    restricted= 'restricted',
    deleted= 'deleted'
}

export enum UserLevel {
    standard= 'standard',
    premium= 'premium',
}