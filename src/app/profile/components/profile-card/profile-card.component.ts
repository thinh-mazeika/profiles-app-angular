import { Component, OnInit, Input, Output } from '@angular/core';
import { Profile } from '../../interfaces/profile.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent implements OnInit {
  @Input() profile: Profile;
  @Output() onDeleteEvent = new EventEmitter<Profile>();
  @Output() onEditEvent = new EventEmitter<Profile>();

  constructor() {}

  getImagePath(socialProfile: string): string {
    const imagePath = '/assets/images/';
    const socialProfileImage =
      socialProfile.charAt(0).toUpperCase() +
      socialProfile.slice(1) +
      'Icon.png';
    return imagePath + socialProfileImage;
  }

  handleClickedDeleteButton() {
    this.onDeleteEvent.emit(this.profile);
  }

  handleClickedEditButton() {
    this.onEditEvent.emit(this.profile);
  }

  ngOnInit(): void {}
}
