import { Pipe, PipeTransform } from '@angular/core';
import { IDecodedTokenTransformed } from '../models/decoded-token-transformed.interface';
import { IDecodedToken } from '../models/decoded-token.interface';

@Pipe({
  name: 'decodedToken'
})
export class DecodedTokenPipe implements PipeTransform {

  transform(value: IDecodedToken): IDecodedTokenTransformed {
    const decodedTokenTransformed: IDecodedTokenTransformed = {
      Id: value.Id,
      claims: {
        name: value['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
        emailaddress: value['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
        nameidentifier: value['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
        expiration: value['http://schemas.microsoft.com/ws/2008/06/identity/claims/expiration'],
        role: value['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
      },
      nbf: value.nbf,
      exp: value.exp,
      iss: value.iss,
      aud: value.aud
    }
    return decodedTokenTransformed;
  }

}
