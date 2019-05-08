import { Programme } from './programme';
import { Capteur } from './capteur';

import { Installation } from './installation';
import { Consommation } from './consommation';

export class Piece {
    idPiece: number;
    nomPiece: string;
    superficieM2: number;
    programmes: Programme[];
    installations: Installation[];
    capteurs: Capteur[];
    consommation: Consommation;

    constructor(id: number, n: string,
                s: number, p: Programme[], i: Installation[],
                ca: Capteur[], co: Consommation) {
        this.idPiece = id;
        this.nomPiece = n;
        this.superficieM2 = s;
        this.programmes = p;
        this.installations = i;
        this.capteurs = ca;
        this.consommation = co;
    }
    public static createBlank() {
        return new Piece(1, '', 1, [], [], [], null);
    }
    public static pieceFromJSON(obj: any): Piece {
        return new Piece(obj.idPiece, obj.nomPiece, obj.superficieM2,
            obj.programmes, obj.installations, obj.capteurs, obj.consommation);

    }
}
