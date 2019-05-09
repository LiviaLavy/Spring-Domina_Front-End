import { Installation } from './installation';
import { Piece } from './piece';
export class Consommation {
    idConsommateur: number;
    fournisseur: string;
    type: string;
    instal: Installation;
    piece: Piece;

    constructor(idConsommateur: number, fournisseur: string, type: string, instal: Installation, piece: Piece) {
        this.idConsommateur = idConsommateur;
        this.fournisseur = fournisseur;
        this.type = type;
        this.instal = instal;
        this.piece = piece;
    }
}

export class ConsommationChauffage extends Consommation {
    consKWhJour: number;
    consKWhMois: number;
    consKWhAn: number;

    constructor(idConsommateur: number, fournisseur: string, type: string, instal: Installation, piece: Piece,
                consKWhJour: number, consKWhMois: number, consKWhAn: number) {
        super(idConsommateur, fournisseur, type, instal, piece);
        this.consKWhJour = consKWhJour;
        this.consKWhMois = consKWhMois;
        this.consKWhAn = consKWhAn;
    }

    public static consoChauffageFromJSON(obj: any): ConsommationChauffage {
        return new ConsommationChauffage(obj.idConsommateur, obj.fournisseur, obj.type, obj.instal, obj.piece,
            obj.consKWhJour, obj.onsKWhMois, obj.consKWhAn);
    }
}

export class ConsommationEau extends Consommation {
    consommation: Consommation;
    consM3Jour: number;
    consM3Mois: number;
    consM3An: number;
}

export class ConsommationElec extends Consommation {
    consKWhJour: number;
    consKWhMois: number;
    consKWhAn: number;
}
