import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profiles: Person[] = [];
  private profilesUrl = 'public/profiles';
 
  constructor(private http: HttpClient) { 
    
  }

  getProfiles$(): Observable<Person[]> {
    return this.http.get<Person[]>(this.profilesUrl)
  } 

}
