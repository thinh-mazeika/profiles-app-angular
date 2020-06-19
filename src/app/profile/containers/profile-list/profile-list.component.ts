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

  constructor(private profileService: ProfileService) {
    this.profiles$ = this.profileService.getProfiles$();
   }

  ngOnInit(): void {

  }

}
