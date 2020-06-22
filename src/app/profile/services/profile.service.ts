import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profilesUrl = 'public/profiles';
  private profiles: Person[] = [];
  private profilesSubject = new BehaviorSubject<Person[]>([]);
  private searchTermSubject = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {
    this.intializeProfiles();
  }

  getProfiles$(): Observable<Person[]> {
    return combineLatest(
      this.profilesSubject.asObservable(),
      this.searchTermSubject.asObservable()
    ).pipe(
      map(([profiles, searchTerm]) => this.filterProfiles(profiles, searchTerm))
    );
  }

  updateSearchTerm(searchTerm: string): void {
    this.searchTermSubject.next(searchTerm);
  }

  private intializeProfiles(): void {
    this.http
      .get<Person[]>(this.profilesUrl)
      .pipe(
        tap((data) => console.log('profiles', JSON.stringify(data))),
        map((profiles: Person[]) => profiles.sort(this.sortProfiles))
      )
      .subscribe((profiles) => {
        this.profiles = profiles;
        this.profilesSubject.next(this.profiles);
      });
  }

  private sortProfiles(a: Person, b: Person): number {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }

    if (nameB > nameA) {
      return 1;
    }

    return 0;
  }

  private filterProfiles(profiles: Person[], searchTerm: string) {
    searchTerm = searchTerm.toLocaleLowerCase();
    return profiles.filter(
      (profile: Person) =>
        profile.name.toLocaleLowerCase().includes(searchTerm) ||
        profile.bio.toLocaleLowerCase().includes(searchTerm)
    );
  }
}
