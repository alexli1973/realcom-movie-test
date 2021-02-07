import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertService } from '../../../shared/services/alert.service';

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
  valueChangeEvents: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  cancelEvents: EventEmitter<any> = new EventEmitter<any>();

  newValue: string;

  constructor(private alertService: AlertService) {}

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
    this.cancelEvents.emit(true);
    this.alertService.warning(`changes canceled`);
  }

  saveChanges(): void {
    this.valueChangeEvents.emit(this.newValue);
    this.alertService.success(`changes have been sent to the server`);
  }
}
