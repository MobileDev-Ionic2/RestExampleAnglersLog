import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { SimpleCatch } from '../../models/catch';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public catches:Array<SimpleCatch> = new Array<SimpleCatch>();

  constructor(public navCtrl: NavController, public http:Http) {
    
    http.get("api/catches").subscribe(data => this.catches = data.json().catches);
  }
}
