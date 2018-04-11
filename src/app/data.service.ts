import { Injectable } from '@angular/core';
import { Data } from './data.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ChartComponent } from "./chart/chart.component";


@Injectable()
export class DataService {
  data: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.data = database.list("data");
   }

  getData(){
    return this.data;
 }
}
