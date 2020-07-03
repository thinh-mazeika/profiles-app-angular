import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileService } from 'src/app/profile/services/profile.service';
import { usStates } from '../add/add-profile/usStates';
import { Profile } from 'src/app/profile/interfaces/profile.interface';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  states = usStates;
  editForm: FormGroup;
  @Input() profile: Profile;

  socialProfileMap: {
    facebook: boolean;
    twitter: boolean;
    google: boolean;
    instagram: boolean;
    linkedin: boolean;
  };

  get socialProfiles() {
    return Object.keys(this.socialProfileMap);
  }

  constructor(
    private fb: FormBuilder,
    public editModal: NgbActiveModal,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      picUrl: [this.profile.picUrl, Validators.required],
      name: [this.profile.name, Validators.required],
      occupation: [this.profile.occupation, Validators.required],
      city: [this.profile.city, Validators.required],
      state: [this.profile.state, Validators.required],
      bio: [this.profile.bio, Validators.required],
    });

    this.socialProfileMap = {
      facebook: this.profile.socialProfiles.includes('facebook'),
      twitter: this.profile.socialProfiles.includes('twitter'),
      instagram: this.profile.socialProfiles.includes('instagram'),
      linkedin: this.profile.socialProfiles.includes('linkedin'),
      google: this.profile.socialProfiles.includes('google'),
    };
  }

  handleClickSave(): void {
    const socialProfiles = this.socialProfiles.filter((socialProfile) => {
      return this.socialProfileMap[socialProfile];
    });

    const editedProfile: Profile = {
      id: this.profile.id,
      ...this.editForm.value,
      socialProfiles,
    };

    this.profileService.editProfile(editedProfile);
    this.editModal.close();
  }

  handleClickNo(): void {
    this.editModal.close();
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
}
