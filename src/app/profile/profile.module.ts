import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileListComponent } from './containers/profile-list/profile-list.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DeleteProfileComponent } from './components/modals/delete/delete-profile/delete-profile.component';
import { AddProfileComponent } from './components/modals/add/add-profile/add-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './components/modals/edit/edit.component';

@NgModule({
  declarations: [
    ProfileListComponent,
    ProfileCardComponent,
    NavbarComponent,
    DeleteProfileComponent,
    AddProfileComponent,
    EditComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [NavbarComponent, ProfileListComponent, ProfileCardComponent],
  entryComponents: [DeleteProfileComponent, AddProfileComponent],
})
export class ProfileModule {}
