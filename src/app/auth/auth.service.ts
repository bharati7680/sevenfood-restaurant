import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiMethod } from '../core/services/consts';
import { HttpService } from '../core/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpService) { }

  signup(email: string, password: string) { 

    const body = {
      email: email,
      password: password

    }
    
    return this.httpService.requestCall("/api/users/signup", ApiMethod.POST, body)
      .pipe(map(data => {
        return data
      }))
    
  }
}

