import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../../interfaces/profile.interface';
import { ProfileService } from '../../services/profile.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteProfileComponent } from '../../components/modals/delete/delete-profile/delete-profile.component';
import { EditProfileComponent } from '../../components/modals/edit/edit-profile.component';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
})
export class ProfileListComponent implements OnInit {
  profiles$: Observable<Profile[]>;

  constructor(
    private profileService: ProfileService,
    private _modalService: NgbModal
  ) {
    this.profiles$ = this.profileService.getProfiles$();
  }

  ngOnInit(): void {}

  async deleteProfile(profile: Profile): Promise<void> {
    const modalRef = this._modalService.open(DeleteProfileComponent, {
      centered: true,
      backdrop: 'static',
    });

    modalRef.componentInstance.profile = profile;
    const result = await modalRef.result;

    if (result) {
      this.profileService.deleteProfile(profile);
    }
  }

  async editProfile(profile: Profile): Promise<void> {
    const modalRef = this._modalService.open(EditProfileComponent, {
      centered: true,
      backdrop: 'static',
    });

    modalRef.componentInstance.profile = profile;
  }
}
