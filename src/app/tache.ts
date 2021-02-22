
export enum Statut{
    TODO = "A faire",
    DOING = "En cours",
    DONE = "Terminé"
}

export class Taches{

    id: number;
    description: string;
    statut: Statut;

    constructor(id:number, description:string, statut:Statut){
        this.id = id;
        this.description = description;
        this.statut = statut;           
    }


}