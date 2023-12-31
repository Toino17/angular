import { Component, OnInit } from '@angular/core';
import { APPRENANTS } from './apprenants-list/mock apprenants list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  apprenantList = APPRENANTS;
  Valeur:number;
  statut:any;

  ngOnInit(){
    this.statut = 0;
  }

  selectApprenant(index:string){
    const indexSelect = +index -1
    this.statut = 1;
    this.Valeur = indexSelect
    console.table(this.apprenantList[indexSelect])
  }
}