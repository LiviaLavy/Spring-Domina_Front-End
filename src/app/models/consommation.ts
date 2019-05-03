import { Installation } from './installation';
import { Piece } from './piece';
export interface Consommation {
    idConsommateur: number; 
    fournisseur: string; 
    type: string;
    instal: Installation;
    piece: Piece; 

}

export class ConsommationChauffage {
    consommation: Consommation; 
    ConsKWhJour: number; 
    ConsKWhMois: number; 
    ConsKWhAn: number; 
}

export class ConsommationEau {
    consommation: Consommation; 
    ConsM3Jour: number; 
    ConsM3Mois: number; 
    ConsM3An: number; 
}

export class ConsommationElec {
    consommation: Consommation; 
    ConsKWhJour: number; 
    ConsKWhMois: number; 
    ConsKWhAn: number; 
}
