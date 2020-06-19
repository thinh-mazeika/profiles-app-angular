import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileListComponent } from './containers/profile-list/profile-list.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

@NgModule({
  declarations: [ProfileListComponent, ProfileCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProfileListComponent,
    ProfileCardComponent
  ]
})
export class ProfileModule { }
