import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

    currentDate!: string;
  currentTime!: string;
  timerId!: any;

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    this.updateDateTime();
    this.timerId = setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }

  updateDateTime() {
    const now = new Date();
    this.currentDate = this.datePipe.transform(now, 'EEE MMM dd yyyy')!;
    this.currentTime = this.datePipe.transform(now, 'HH:mm:ss')!;
  }
  sidenavWidth = '0px';

  openNav() {
    this.sidenavWidth = '200px';
  }


  
}
