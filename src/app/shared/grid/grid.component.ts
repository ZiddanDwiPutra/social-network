import { Component, Input, SimpleChanges } from '@angular/core';
import { faPlusCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { GridItem } from './gridItem';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  @Input() type: string = '3-cols';
  @Input() headerLabel: string;
  @Input() viewAllLabel: string;
  @Input() iconAction: any = faPlusCircle;
  @Input() action: string;
  @Input() actionDetail: string;
  @Input() items: GridItem[] = [];
  faTimes = faTimes;
  thumbnails: string[] = [];
  itemFiltered: GridItem[] = [];

  ngOnChanges(change: SimpleChanges) {
    if (change.items?.previousValue != change.items?.currentValue) {
      this.itemFiltered = [];
      if (this.type == '3-cols') {
        this._filterItems(5, this.items);
      } else if (this.type == '2-cols') {
        this._filterItems(8, this.items);
      }
    }
  }

  onMouseOver(gridItem: GridItem) {
    gridItem.hovered = true;
  }
  onMouseLeave(gridItem: GridItem) {
    gridItem.hovered = false;
  }
  remove(idx: number) {
    console.log(idx);
    this.itemFiltered.splice(idx, 1);
  }
  _filterItems(total: number, items: GridItem[]) {
    for (let item of items.slice(0, total)) {
      this.itemFiltered.push(item);
    }
  }
}
