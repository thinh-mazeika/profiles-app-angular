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
import { Profile } from 'src/app/profile/models/profile';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css'],
})
export class AddProfileComponent implements OnInit {
  profile = new Profile();
  addForm = this.fb.group({
    picUrl: ['', Validators.required],
    name: ['', Validators.required],
    occupation: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    bio: ['', Validators.required],
    socialProfiles: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    public addModal: NgbActiveModal,
    private profileService: ProfileService
  ) {}

  onSubmit() {
    console.warn(this.addForm.value);
  }

  save() {
    console.log(this.addForm);
    console.log('Saved: ' + JSON.stringify(this.addForm.value));
  }

  ngOnInit(): void {}
}
