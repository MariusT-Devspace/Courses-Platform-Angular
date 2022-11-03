export interface IDecodedTokenTransformed {
    Id:     string;
    claims: {
            name:           string,
            emailaddress:   string,
            nameidentifier: string,
            expiration:     string,
            role:           string
            }
    nbf:    number;
    exp:    number;
    iss:    string;
    aud:    string;
}