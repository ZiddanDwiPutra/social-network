import { Component, Input } from '@angular/core';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  @Input() headerLabel: string;
  @Input() viewAllLabel: string;
  @Input() items: Array<Object>;
  thumbnails: string[] = [
    'https://media.istockphoto.com/photos/prize-wheel-picture-id175482570?b=1&k=20&m=175482570&s=170667a&w=0&h=cHDwnCHXxRE5jMtwX-k1Xq4KSrOTJyGIvt91hrOkZqA=',
  ];
}
