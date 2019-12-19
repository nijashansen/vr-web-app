/* tslint:disable:object-literal-key-quotes */
import {HttpHeaders} from '@angular/common/http';



export function GenerateAuthenticationHeader(token: string) {
  let httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': 'my-auth-token'
    })
  }

  httpOptions.headers = httpOptions.headers.set('authorization', 'Bearer ' + token);

  return httpOptions;
}
