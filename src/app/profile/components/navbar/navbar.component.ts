import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddProfileComponent } from '../modals/add/add-profile/add-profile.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private profileService: ProfileService,
    private _modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  onSearchChange(searchTerm: string): void {
    this.profileService.updateSearchTerm(searchTerm);
  }

  scrollToTop() {
    return window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  openAddProfileForm(): void {
    this._modalService.open(AddProfileComponent, {
      centered: true,
      backdrop: 'static',
    });
  }
}
