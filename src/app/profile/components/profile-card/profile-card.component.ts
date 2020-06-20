import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  @Input() profile: Person;

  constructor() { }

  getImagePath(socialProfile: string): string {
    const imagePath = '/assets/images/'; 
    const socialProfileImage = socialProfile.charAt(0).toUpperCase() + socialProfile.slice(1) + 'Icon.png';
    return imagePath + socialProfileImage;
  }

  ngOnInit(): void {
  }

}
