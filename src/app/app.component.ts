import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter';
  /* mainCounter: number = 0; */
  currentDate = new Date();

  /* count numbers for ПККБ */
  PKKBstartDate = new Date("01/31/2023");
  PKKBdiff = Math.abs(this.PKKBstartDate.getTime() - this.currentDate.getTime());
  PKKBdiffDays = Math.ceil(this.PKKBdiff / (1000 * 3600 * 24));
  PKKBpatientsPerDay: number = 5;
  PKKBpatientsTotal = Math.ceil(this.PKKBdiffDays * this.PKKBpatientsPerDay);

  /* count numbers for НМХЦ Пирогова */
  PirogovStartDate = new Date("12/31/2019");
  PirogovDiff = Math.abs(this.PirogovStartDate.getTime() - this.currentDate.getTime());
  PirogovDiffDays = Math.ceil(this.PirogovDiff / (1000 * 3600 * 24));
  PirogovPatientsPerDay: number = 50;
  PirogovPatientsTotal = Math.ceil(this.PirogovDiffDays * this.PirogovPatientsPerDay);

  mainCounter = Math.ceil(this.PKKBpatientsTotal + this.PirogovPatientsTotal)

  increment() {
    this.mainCounter++;
    return this.mainCounter;
  }

}
