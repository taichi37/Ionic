import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html'
})
export class EditPage {
  public items: any = [];
  public form: FormGroup;
  public product: any = [];
  public isEdit: boolean = false;
  public isCreate: boolean = false;
  public pageTitle: string;
  myCategory: string;
  myName: string;
  myDescription: string;
  myLink: any = "http://192.168.88.254/cgi-bin/";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      "formName": ["", Validators.required],
      "formDescription": ["", Validators.required]
    });

  }

  ionViewDidLoad() {

    if( this.navParams.get("record") ) {
      this.edit();
    } else {
      this.create();
    }

  }



  edit(){
    this.isEdit = true;
    this.pageTitle = "Edit Page";
    let me = this.navParams.get("record").tag;
    console.log(me);
    this.loadProduct(me);
  }



  create(){
    this.isCreate = true;
    this.pageTitle = "Create Page";
    this.items = this.navParams.get("categoryParam");
    console.log( this.navParams.get("categoryParam") );

  }



  loadProduct(me) {
    let url = this.myLink + 'product.php?tag=' + me;
    this.http.get( url )
      .map( res => res.json() )
      .subscribe( data => {
        this.product = data;
        console.log( this.product );
        //console.log( this.product[1].category );
    });
  }



  createEntry(){
    let category = this.myCategory;
    let name: string = this.form.controls['formName'].value;
    let description: string = this.form.controls['formDescription'].value;

    let url: any = this.myLink + 'otto.php';
    let body: string = "key=create&category=" + category + "&name=" + name + "&description=" + description;

    let type: string = "application/x-www-form-urlencoded; charset=UTF-8";
    let headers: any = new Headers({ 'Content-Type': type });
    let options: any = new RequestOptions({ headers: headers });

    this.http
      .post( url, body, options )
      .subscribe( (data) => {
        if( data.status === 200 ) {
          
        }
      });

    console.log('test');
    console.log( category );
  }



  updateEntry(item){
    console.log('updateEntry');
    console.log( item );
    let keys: any = [];
    keys = Object.keys( item );
    console.log( keys.id );
  }



  deleteEntry(id){
    let url: any = this.myLink + 'otto.php';
    let body: string = "key=delete&id=" + id;

    let type: string = "application/x-www-form-urlencoded; charset=UTF-8";
    let headers: any = new Headers({ 'Content-Type': type });
    let options: any = new RequestOptions({ headers: headers });

    //this.http
    //  .post( url, body, options )
    //  .subscribe( (data) => {
    //    if( data.status === 200 ) {
          
    //    }
    //  });
  }


}

  
