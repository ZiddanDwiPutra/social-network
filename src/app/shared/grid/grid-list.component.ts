import { Component, Input, SimpleChanges } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { GridItem } from './gridItem';

@Component({
  selector: 'grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css'],
})
export class GridListComponent {
  @Input() headerLabel: string;
  @Input() viewAllLabel: string;
  @Input() items: GridItem[];
  itemFiltered: GridItem[] = [];
  faTimes = faTimes;

  constructor() {}

  ngOnChanges(change: SimpleChanges) {
    if (change.items.previousValue != change.items.currentValue) {
      this._filterItems();
    }
  }

  onMouseOver(gridItem: GridItem) {
    gridItem.hovered = true;
  }
  onMouseLeave(gridItem: GridItem) {
    gridItem.hovered = false;
  }
  remove(idx: number) {
    this.itemFiltered.splice(idx, 1);
  }

  _filterItems() {
    for (let item of this.items.slice(0, 6)) {
      this.itemFiltered.push(item);
    }
    console.log(this.itemFiltered);
  }
}
