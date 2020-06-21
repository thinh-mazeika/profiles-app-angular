import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../models/person';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  profiles$: Observable<Person[]>;
  private profiles: Person[] = [];

  constructor(private profileService: ProfileService) {
    this.profiles$ = this.profileService.getProfiles$();
  }

  sortProfiles() {
    this.profiles.sort(function(a, b) {
      var nameA = a.name.toLowerCase();
      var nameB = b.name.toLowerCase();

      if (nameA < nameB ) {
        return -1;
      }

      if (nameB > nameA) {
        return 1;
      }

      return 0;
    })
  }

  ngOnInit(): void {
   
  }

}
