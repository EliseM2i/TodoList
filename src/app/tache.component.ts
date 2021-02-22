import { Component, OnInit, Input, Inject, Injectable } from '@angular/core';
import { Taches } from './tache';

@Component({
  selector: 'tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./app.component.css']
})
export class TacheComponent implements OnInit {
  @Input() tache: Taches;
  @Input() listeAssociee: Taches[]
  constructor() { }

  ngOnInit() {
  }

  modifier(tache:Taches){
 
    let index = this.listeAssociee.indexOf(tache);
    let nouveau = prompt("Modifier la tâche", tache.description);
    if(nouveau != undefined && nouveau.length >= 5){
      this.listeAssociee[index].description = nouveau;
    } else {
      alert("La tâche doit faire plus de 5 caractères")
    } 
}

supprimer(tache:Taches){
  let index = this.listeAssociee.indexOf(tache);
  this.listeAssociee.splice(index,1)
}
  

}