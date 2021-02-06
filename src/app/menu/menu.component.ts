import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { Tab } from '../shared/interfaces/movie';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()
  tabs: Tab = {};
  @Output()
  tabChanged = new EventEmitter<string>();
  @Output()
  viewChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  sendTab(key: string) {
    this.tabChanged.emit(key);
  }

  changeView() {
    this.viewChanged.emit(true);
  }
}
