import { Component } from '@angular/core';
import {
  faSearch,
  faArrowUp,
  faUser,
  faSignOut,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  faSearch = faSearch;
  faArrowUp = faArrowUp;
  faUser = faUser;
  faLogout = faSignOutAlt;
  searchValue = '';
  firstName = 'Waseem';
  lastName = 'Arshad';
}
