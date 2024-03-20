
export enum UserTypes {
    user= 'user',
    admin= 'admin'
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