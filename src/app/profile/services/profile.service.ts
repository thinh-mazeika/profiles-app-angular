import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profilesUrl = 'public/profiles';
  private profiles: Person[] = [];
  private profilesSubject = new BehaviorSubject<Person[]>([]);
  private searchSubject = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {
    this.http
      .get<Person[]>(this.profilesUrl)
      .pipe(
        tap((data) => console.log('profiles', JSON.stringify(data))),
        map((response: any) =>
          response.sort(function (a, b) {
            var nameA = a.name.toLowerCase();
            var nameB = b.name.toLowerCase();

            if (nameA < nameB) {
              return -1;
            }

            if (nameB > nameA) {
              return 1;
            }

            return 0;
          })
        )
      )
      .subscribe((profiles) => {
        this.profiles = profiles;
        this.profilesSubject.next(this.profiles);
      });
  }

  getProfiles$(): Observable<Person[]> {
    return combineLatest([
      this.profilesSubject.asObservable(),
      this.searchSubject.asObservable(),
    ]).pipe(map(([profiles, search]) => this.performSearch(profiles, search)));
  }

  updateSearchTerm(searchTerm: string): void {
    this.searchSubject.next(searchTerm);
  }

  private performSearch(profiles: Person[], searchTerm: string) {
    searchTerm = searchTerm.toLocaleLowerCase();
    return profiles.filter(
      (profile: Person) =>
        profile.name.toLocaleLowerCase().indexOf(searchTerm) !== -1 ||
        profile.bio.toLocaleLowerCase().indexOf(searchTerm) !== -1
    );
  }
}
