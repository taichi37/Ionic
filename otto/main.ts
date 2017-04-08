import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { EditPage } from '../edit/edit';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  public category: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {}

  ionViewDidLoad() {
    this.loadCategory();
  }


  loadCategory() {
    this.http.get( 'http://192.168.88.254/cgi-bin/category.php')
    .map( res => res.json() )
    .subscribe( data => {
      this.category = data;
      console.log( data );
    });

  }




  addEntry() {
    this.navCtrl.push( EditPage, {categoryParam: this.category} );
  }


  viewEntry( param ) {
    console.log ( 'record' + param );
    this.navCtrl.push( EditPage, param );
  }

}
