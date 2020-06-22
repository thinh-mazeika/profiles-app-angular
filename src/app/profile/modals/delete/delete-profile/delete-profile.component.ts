import { Component, OnInit, Type } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.css'],
})
export class DeleteProfileComponent implements OnInit {
  constructor(public deleteModal: NgbActiveModal) {}

  ngOnInit(): void {}
}

const MODALS: { [name: string]: Type<any> } = {
  delete: DeleteProfileComponent,
};
