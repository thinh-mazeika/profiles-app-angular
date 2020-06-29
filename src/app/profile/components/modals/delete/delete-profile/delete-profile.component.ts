import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Profile } from 'src/app/profile/interfaces/profile.interface';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.css'],
})
export class DeleteProfileComponent implements OnInit {
  @Input() profile: Profile;

  constructor(public deleteModal: NgbActiveModal) {}

  ngOnInit(): void {}

  handleClickYes(): void {
    this.deleteModal.close(true);
  }

  handleClickNo(): void {
    this.deleteModal.close(false);
  }
}
