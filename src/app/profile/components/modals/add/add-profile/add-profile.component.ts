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
    this.profileService.addProfile(this.addForm.value);
    this.addModal.close();
  }

  ngOnInit(): void {}
}
