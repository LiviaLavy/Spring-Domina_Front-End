import { Piece } from './piece';
import { Programme } from './programme';
import { Consommation, ConsommationChauffage, ConsommationElec } from './consommation';

export class Installation {

    id: number;
    type: string;
    dateAjout: string;
    etat: boolean;
    piece: Piece;
    programmes: Programme[];
    conso: Consommation;
}

export class InstalChauffage extends Installation {

    puissance: number;
    consoChauffage: ConsommationChauffage;

}
export class InstalVMC extends Installation {

    puissance: number;
    consoElec: ConsommationElec;

}

export class InstalEclairage extends Installation {

    intensite: number;
    consoElec: ConsommationElec;

}

export class InstalVolet extends Installation {

    ouverture: number;


}

