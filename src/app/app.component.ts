import { Component, OnInit } from '@angular/core';
import { APPRENANTS } from './mock apprenants list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  apprenantList = APPRENANTS;
  Valeur:number;

  ngOnInit(){
  }

  selectApprenant(index:string){
    const indexSelect = +index -1
    return this.Valeur = indexSelect
    console.table(this.apprenantList[indexSelect])
  }

}
