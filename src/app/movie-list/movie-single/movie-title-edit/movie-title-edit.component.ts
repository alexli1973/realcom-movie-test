import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-title-edit',
  templateUrl: './movie-title-edit.component.html',
  styleUrls: ['./movie-title-edit.component.scss']
})
export class MovieTitleEditComponent implements OnInit {

  @Input()
  movieTitle: string;
  @Input()
  movieId: string;

  @Output()
  valueChangeEvents: EventEmitter = new EventEmitter<string>();
  @Output()
  cancelEvents: EventEmitter = new EventEmitter<void>();

  newValue: string;

  constructor() {}

  ngOnInit(): void {
    this.newValue = this.movieTitle; // primitive, no mutable
  }

  blurEvent($event: FocusEvent) {
    if (!this.newValue.length || (this.newValue === this.movieTitle)) {
      // debugger
      this.cancelChanges();
    } else {
      this.saveChanges();
      // debugger
    }
  }

  cancelChanges(): void {
    this.cancelEvents.emit();
  }

  saveChanges(): void {
    this.valueChangeEvents.emit(this.newValue);
  }
}
