export enum UserRole {
    "Administrator",
    "User"
}

export interface IUser {
    username:  string;
    firstName: string;
    lastName:  string;
    email:     string;
    password:  string;
    role:      UserRole;
    id:        number;
    createdBy: string;
    createdOn: string;
    updatedBy: string;
    updatedOn: null;
    deletedBy: string;
    deletedOn: null;
    isDeleted: boolean;
}