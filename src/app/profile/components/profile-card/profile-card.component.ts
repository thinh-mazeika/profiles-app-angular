import { Component, OnInit, Input, Type } from '@angular/core';
import { Person } from '../../models/person';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteProfileComponent } from '../../modals/delete/delete-profile/delete-profile.component';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent implements OnInit {
  @Input() profile: Person;

  constructor(private _modalService: NgbModal) {}

  open(name: string) {
    this._modalService.open(MODALS[name]);
  }

  getImagePath(socialProfile: string): string {
    const imagePath = '/assets/images/';
    const socialProfileImage =
      socialProfile.charAt(0).toUpperCase() +
      socialProfile.slice(1) +
      'Icon.png';
    return imagePath + socialProfileImage;
  }

  ngOnInit(): void {}
}

const MODALS: { [name: string]: Type<any> } = {
  deleteProfile: DeleteProfileComponent,
};
