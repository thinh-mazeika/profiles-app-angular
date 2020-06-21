import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profilesUrl = 'public/profiles';
 
  constructor(private http: HttpClient) { 
    
  }

  getProfiles$(): Observable<Person[]> {
    return this.http.get<Person[]>(this.profilesUrl)
      .pipe(
        map((response: any) => response.sort(function(a, b) {
          var nameA = a.name.toLowerCase();
          var nameB = b.name.toLowerCase();

          if (nameA < nameB) {
            return -1;
          }

          if (nameB > nameA) {
            return 1;
          }

          return 0;
        }))
      )
  } 

}
