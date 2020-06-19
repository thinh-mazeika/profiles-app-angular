import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  @Input() profile: Person;

  constructor() { }

  ngOnInit(): void {
  }

}
