import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ProfileService } from 'src/app/profile/services/profile.service';
import { usStates } from './usStates';

const validNameRegex = RegExp(/[a-zA-Z]+\s{1}[a-zA-Z]+/g);

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css'],
})
export class AddProfileComponent implements OnInit {
  states = usStates;

  socialProfileMap = {
    facebook: false,
    twitter: false,
    instagram: false,
    linkedin: false,
    google: false,
  };

  get socialProfiles() {
    return Object.keys(this.socialProfileMap);
  }

  isInvalid(field: string): boolean {
    const { dirty, touched, invalid } = this.addForm.get(field);
    return touched && dirty && invalid;
  }

  invalidFeedback(field: string, errorType = 'required'): boolean {
    const { dirty, touched, errors } = this.addForm.get(field);
    return touched && dirty && errors?.[errorType];
  }

  addForm = this.fb.group({
    picUrl: ['', Validators.required],
    name: ['', [Validators.required, Validators.pattern(validNameRegex)]],
    occupation: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    bio: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    public addModal: NgbActiveModal,
    private profileService: ProfileService
  ) {}

  addProfile() {
    const socialProfilesArray = this.socialProfiles.filter((socialProfile) => {
      return this.socialProfileMap[socialProfile];
    });
    this.addForm.value.socialProfiles = socialProfilesArray;

    this.profileService.addProfile(this.addForm.value);
    this.addModal.close();
  }

  getImagePath(socialProfile: string): string {
    const isOn = this.socialProfileMap[socialProfile];
    const imagePath = './assets/images/';
    const iconFileName =
      socialProfile.charAt(0).toUpperCase() + socialProfile.slice(1);
    const iconState = isOn ? 'Icon.png' : 'IconOff.png';
    return imagePath + iconFileName + iconState;
  }

  toggleIcon(socialProfile: string): void {
    this.socialProfileMap[socialProfile] = !this.socialProfileMap[
      socialProfile
    ];
  }

  ngOnInit(): void {}
}
