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
    conso: Consommation;
}
