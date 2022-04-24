import { Component } from '@angular/core';
import {
  faFacebookSquare,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  faLinkedin = faLinkedin;
  faTwitter = faTwitterSquare;
  faFacebook = faFacebookSquare;
}
