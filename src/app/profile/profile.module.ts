import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileListComponent } from './containers/profile-list/profile-list.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DeleteProfileComponent } from './modals/delete/delete-profile/delete-profile.component';

@NgModule({
  declarations: [ProfileListComponent, ProfileCardComponent, NavbarComponent, DeleteProfileComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    ProfileListComponent,
    ProfileCardComponent
  ]
})
export class ProfileModule { }
