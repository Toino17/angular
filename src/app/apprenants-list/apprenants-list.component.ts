import { Component, OnInit } from '@angular/core';
import { APPRENANTS } from './mock apprenants list';

@Component({
  selector: 'app-apprenants-list',
  templateUrl: './apprenants-list.component.html',
  styleUrls: ['./apprenants-list.component.css']
})
export class ApprenantsListComponent implements OnInit {
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
