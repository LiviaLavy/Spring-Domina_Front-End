import { Piece } from './piece';
import { Installation } from './installation';
export class Programme {

idProg: number;
nomProg: string;
piece: Piece;
installations: Installation[];

constructor(id: number, nom: string, p: Piece, instals: Installation[]) {
    this.idProg = id;
    this.nomProg = nom;
    this.piece = p;
    this.installations = instals;
}

public static progFromJSON(obj: any): Programme {
    return new Programme(obj.idProg, obj.nomProg, obj.piece, obj.installations);
}

}
