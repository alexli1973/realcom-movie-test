import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  @Input() delay = 5000;
  public text: string;
  public type = 'success';
  alertSubsc: Subscription;

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertSubsc = this.alertService.alert$.subscribe(alert => {
      this.text = alert.text;
      this.type = alert.type;
      const timeOut = setTimeout(() => {
        clearTimeout(timeOut);
        this.text = '';
      }, this.delay);
    });
  }

  ngOnDestroy(): void {
    if (this.alertSubsc) {
      this.alertSubsc.unsubscribe();
    }
  }

}
