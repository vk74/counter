import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'counter';
  currentDate = new Date();

//stats for clinics
/* ПККБ: 13.02.2023, 11559 patients *//* НМХЦ Пирогова 13.02.2023, 102870 *//* НМИЦ Мясникова 14.02.2023, 1384 *//* Yakutsk 15.02.2023, 193 */     

  PKKBpatientsPerDay = 7.52;
  PKKBstartDate = new Date("12/01/2018");

  PirogovPatientsPerDay: number = 146.35;
  PirogovStartDate = new Date("12/31/2019");

  NMITSpatientsPerDay = 3.37;
  NMITSstartDate = new Date("01/01/2022");

  YakutskPatientsPerDay: number = 2.92;
  YakutskStartDate = new Date("12/12/2022");
  
  FCSSHpatientsPerDay: number = 10;
  FCSSHstartDate = new Date("01/01/2017");

  VKB2patientsPerDay: number = 6;
  VKB2startDate = new Date("08/01/2020");

//count for clinics
  PKKBpatientsTotal = this.countTotalNumberOfPatientsToDate(this.PKKBpatientsPerDay, this.PKKBstartDate);
  PirogovPatientsTotal = this.countTotalNumberOfPatientsToDate(this.PirogovPatientsPerDay, this.PirogovStartDate);
  NMITSpatientsTotal = this.countTotalNumberOfPatientsToDate(this.NMITSpatientsPerDay, this.NMITSstartDate);
  YakutskPatientsTotal = this.countTotalNumberOfPatientsToDate(this.YakutskPatientsPerDay, this.YakutskStartDate);
  FCSSHpatientsTotal = this.countTotalNumberOfPatientsToDate(this.FCSSHpatientsPerDay, this.FCSSHstartDate);
  VKB2patientsTotal = this.countTotalNumberOfPatientsToDate(this.VKB2patientsPerDay, this.VKB2startDate);

  mainCounter = Math.ceil(this.PKKBpatientsTotal + this.PirogovPatientsTotal + this.NMITSpatientsTotal + this.YakutskPatientsTotal + this.FCSSHpatientsTotal + this.VKB2patientsTotal)

//stats for employees
  TatyanaStartDate = new Date("03/10/2020");
  LevStartDate = new Date("01/01/2019");
  KirillStartDate = new Date("10/01/2019");
  RomanStartDate = new Date("11/01/2019");
  NastyaStartDate = new Date("04/01/2020");
  OlgaStartDate = new Date("09/20/2021");

/* count for CAS */
  TatyanaDiff = Math.abs(this.TatyanaStartDate.getTime() - this.currentDate.getTime());
  TatyanaDiffDays = Math.ceil(this.TatyanaDiff / (1000 * 3600 * 24));
  TatyanaPatientsPerDay: number = (this.NMITSpatientsPerDay + this.YakutskPatientsPerDay);
  TatyanaPatientsTotal = Math.ceil(this.TatyanaDiffDays * this.TatyanaPatientsPerDay);
  
  LevPatientsTotal = 0;

  countTotalNumberOfPatientsToDate(patientsPerDay: number, startDate: Date) {
    let Diff: number;
    let DiffDays: number;
    let PatientsTotal: number;
    Diff = Math.abs(startDate.getTime() - this.currentDate.getTime());
    DiffDays = Math.ceil(Diff / (1000 * 3600 * 24));
    PatientsTotal = Math.ceil(DiffDays * patientsPerDay);
    return PatientsTotal;
  }

  countPatientsPerEmployee() {
    
  }

}
