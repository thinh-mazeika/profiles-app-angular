import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private profileService: ProfileService) {}

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
}
