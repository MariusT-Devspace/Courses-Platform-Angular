export interface IUserToken {
    id:           number;
    token:        string;
    username:     string;
    validity:     string;
    refreshToken: string;
    emailId:      string;
    guidId:       string;
    expiredTime:  string;
}
