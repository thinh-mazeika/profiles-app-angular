import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';
import { Observable, BehaviorSubject, combineLatest, EMPTY } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profilesUrl = 'public/profiles';
  private profiles: Profile[] = [];
  private profilesSubject = new BehaviorSubject<Profile[]>([]);
  private searchTermSubject = new BehaviorSubject<string>('');

  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

  httpOptions = {
    headers: this.headers,
  };

  constructor(private http: HttpClient) {
    this.intializeProfiles();
  }

  getProfiles$(): Observable<Profile[]> {
    return combineLatest(
      this.profilesSubject.asObservable(),
      this.searchTermSubject.asObservable()
    ).pipe(
      map(([profiles, searchTerm]) =>
        this.filterProfiles(profiles, searchTerm)
      ),
      map((profiles: Profile[]) => profiles.sort(this.sortProfiles))
    );
  }

  updateSearchTerm(searchTerm: string): void {
    this.searchTermSubject.next(searchTerm);
  }

  addProfile(profile: Profile): void {
    this.http
      .post<Profile>(this.profilesUrl, profile, this.httpOptions)
      .pipe(
        tap((data) => console.log('addProfile: ' + JSON.stringify(data))),
        catchError(() => {
          this.handleError('add profile');
          return EMPTY;
        })
      )
      .subscribe((data) => {
        this.profiles.push(data);
        this.profilesSubject.next(this.profiles);
      });
  }

  deleteProfile(profile: Profile): void {
    const url = `${this.profilesUrl}/${profile.id}`;
    this.http
      .delete<Profile>(url, this.httpOptions)
      .pipe(
        catchError(() => {
          this.handleError(`delete profile "${profile.name}"`);
          return EMPTY;
        })
      )
      .subscribe(() => {
        this.profiles = this.profiles.filter((p) => p.id !== profile.id);
        this.profilesSubject.next(this.profiles);
      });
  }

  private intializeProfiles(): void {
    this.http
      .get<Profile[]>(this.profilesUrl)
      .pipe(
        catchError(() => {
          this.handleError('get profiles');
          return EMPTY;
        })
      )
      .subscribe((profiles) => {
        this.profiles = profiles;
        this.profilesSubject.next(this.profiles);
      });
  }

  private sortProfiles(a: Profile, b: Profile): number {
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

  private filterProfiles(profiles: Profile[], searchTerm: string) {
    searchTerm = searchTerm.toLocaleLowerCase();
    return profiles.filter(
      (profile: Profile) =>
        profile.name.toLocaleLowerCase().includes(searchTerm) ||
        profile.bio.toLocaleLowerCase().includes(searchTerm)
    );
  }

  private handleError(task: string) {
    console.error(`Failed to ${task}!`);
  }
}
