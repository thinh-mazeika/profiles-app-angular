import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormArray,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ProfileService } from 'src/app/profile/services/profile.service';

import { usStates } from './usStates';

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

  addForm = this.fb.group({
    picUrl: ['', Validators.required],
    name: ['', Validators.required],
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
    const result = (this.addForm.value.socialProfiles = socialProfilesArray);
    console.log(result);
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
