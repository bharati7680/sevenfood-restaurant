import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiMethod } from '../core/services/consts';
import { HttpService } from '../core/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  constructor(private httpService: HttpService) { }

  getTourist(page: number) {
    const query = {
      page: page
    } 

    return this.httpService.requestCall("/api/Tourist", ApiMethod.GET, null, query)
      .pipe(map(data => {
        return data
      }))
    
  }
}
