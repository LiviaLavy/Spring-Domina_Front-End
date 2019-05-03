import { Piece } from './piece';
import { Programme } from './programme';
import { Consommation, ConsommationChauffage, ConsommationElec } from './consommation';
export interface Installation {
    id: number;
    type: string;
    dateAjout: string;
    etat: boolean;
    piece: Piece;
    programmes: Programme[];
    conso: Consommation;
}

export class InstalChauffage {
    installation: Installation;
    puissance: number;
    consoChauffage: ConsommationChauffage;

}
export class InstalVMC {
    installation: Installation;
    puissance: number;
    consoElec: ConsommationElec;

}

export class InstalEclairage {
    installation: Installation;
    intensite: number;
    consoElec: ConsommationElec;

}

export class InstalVolet {
    installation: Installation;
    ouverture: number;


}
