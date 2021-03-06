
// Tous les fichiers TypeScript //

import { Component } from '@angular/core';
import { Statut, Taches } from './tache';


@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  listeTache:Array<Taches> = [];
  nouvelleTache: string;
  compt: number = 0;

  getNextId(){
    this.compt++;
    return this.compt;
  }

  constructor(){}

  ngOnInit(){
    let tache10 = new Taches(this.getNextId(),"Donner des croquettes à Chopin", Statut.TODO);
    let tache11 = new Taches(this.getNextId(),"Donner des croquettes à Chopin", Statut.TODO);
    let tache12 = new Taches(this.getNextId(),"Donner des croquettes à Chopin", Statut.TODO);
    let tache13 = new Taches(this.getNextId(),"Donner des croquettes à Chopin", Statut.TODO);
    let tache14 = new Taches(this.getNextId(),"Donner des croquettes à Chopin", Statut.TODO);

    let tache2 = new Taches(this.getNextId(),"Faire des caresses à Chopin", Statut.DOING);
    let tache3 = new Taches(this.getNextId(),"Brosser Chopin", Statut.DONE);

    this.listeTache.push(tache10); 
    this.listeTache.push(tache11); 
    this.listeTache.push(tache12); 
    this.listeTache.push(tache13); 
    this.listeTache.push(tache14); 
    this.listeTache.push(tache2); 
    this.listeTache.push(tache3); 
  }

  ajouter(){

    if(this.nouvelleTache != undefined && this.nouvelleTache.length >= 5){
      let tache = new Taches(this.getNextId(), this.nouvelleTache, Statut.TODO);
      this.listeTache.push(tache);
    } else {
      
      alert("La tâche doit faire plus de 5 caractères")
    }
  }

  

  onKeyUp(event) 
  {
    console.log(event)
    this.nouvelleTache = event.target.value;
  }

 



}