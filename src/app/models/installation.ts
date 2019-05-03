import { Piece } from './piece';
import { Programme } from './programme';
import { Consommation, ConsommationChauffage, ConsommationElec } from './consommation';
<<<<<<< HEAD
export interface Installation {
=======
export class Installation {
>>>>>>> 7a9f01a81b72e0c10c4f32359734af2f59b91eaf
    id: number;
    type: string;
    dateAjout: string;
    etat: boolean;
    piece: Piece;
    programmes: Programme[];
    conso: Consommation;
}

<<<<<<< HEAD
export class InstalChauffage {
    installation: Installation;
=======
export class InstalChauffage extends Installation {

>>>>>>> 7a9f01a81b72e0c10c4f32359734af2f59b91eaf
    puissance: number;
    consoChauffage: ConsommationChauffage;

}
<<<<<<< HEAD
export class InstalVMC {
    installation: Installation;
=======
export class InstalVMC extends Installation {

>>>>>>> 7a9f01a81b72e0c10c4f32359734af2f59b91eaf
    puissance: number;
    consoElec: ConsommationElec;

}

<<<<<<< HEAD
export class InstalEclairage {
    installation: Installation;
=======
export class InstalEclairage extends Installation {

>>>>>>> 7a9f01a81b72e0c10c4f32359734af2f59b91eaf
    intensite: number;
    consoElec: ConsommationElec;

}

<<<<<<< HEAD
export class InstalVolet {
    installation: Installation;
=======
export class InstalVolet extends Installation {

>>>>>>> 7a9f01a81b72e0c10c4f32359734af2f59b91eaf
    ouverture: number;


}

