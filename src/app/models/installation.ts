import { Piece } from './piece';
import { Programme } from './programme';
import { Consommation, ConsommationChauffage, ConsommationElec, ConsommationEau } from './consommation';

export class Installation {

    id: number;
    type: string;
    dateAjout: string;
    etat: boolean;
    piece: Piece;
    programmes: Programme[];

    constructor(id: number, t: string, dAj: string, etat: boolean, piece: Piece,
                progs: Programme[]) {
        this.id = id;
        this.type = t;
        this.dateAjout = dAj;
        this.etat = etat;
        this.piece = piece;
        this.programmes = progs;
    }
}

export class InstalChauffage extends Installation {

    puissance: number;
    consoChauffage: ConsommationChauffage;

    constructor(id: number, t: string, dAj: string, etat: boolean, piece: Piece,
                progs: Programme[], p: number, conso: ConsommationChauffage) {
        super(id, t, dAj, etat, piece, progs);
        this.puissance = p;
        this.consoChauffage = conso;
    }

    public static createBlank(): InstalChauffage {
        return new InstalChauffage(-1, '', '', null, null, [], null, null);
    }

    public static instalFromJSON(obj: any): InstalChauffage {
        return new InstalChauffage(obj.id, obj.type, obj.dateAjout, obj.etat, obj.piece,
            obj.programmes, obj.puissance, obj.consoChauffage);
    }

}

export class InstalVMC extends Installation {

    puissance: number;
    consoElec: ConsommationElec;

    constructor(id: number, t: string, dAj: string, etat: boolean, piece: Piece,
                progs: Programme[], p: number, conso: ConsommationElec) {
        super(id, t, dAj, etat, piece, progs);
        this.puissance = p;
        this.consoElec = conso;
    }

    public static createBlank(): InstalVMC {
        return new InstalVMC(-1, '', '', null, null, [], null, null);
    }

    public static instalFromJSON(obj: any): InstalVMC {
        return new InstalVMC(obj.id, obj.type, obj.dateAjout, obj.etat, obj.piece,
            obj.programmes, obj.puissance, obj.consoElec);
    }

}

export class InstalEclairage extends Installation {

    intensite: number;
    consoElec: ConsommationElec;

    constructor(id: number, t: string, dAj: string, etat: boolean, piece: Piece,
                progs: Programme[], i: number, conso: ConsommationElec) {
        super(id, t, dAj, etat, piece, progs);
        this.intensite = i;
        this.consoElec = conso;
    }

    public static createBlank(): InstalEclairage {
        return new InstalEclairage(-1, '', '', null, null, [], null, null);
    }

    public static instalFromJSON(obj: any): InstalEclairage {
        return new InstalEclairage(obj.id, obj.type, obj.dateAjout, obj.etat, obj.piece,
            obj.programmes, obj.intensite, obj.consoElec);
    }

}

export class InstalVolet extends Installation {

    ouverture: number;

    constructor(id: number, t: string, dAj: string, etat: boolean, piece: Piece,
                progs: Programme[], o: number) {
        super(id, t, dAj, etat, piece, progs);
        this.ouverture = o;
    }

    public static createBlank(): InstalVolet {
        return new InstalVolet(-1, '', '', null, null, [], null);
    }

    public static instalFromJSON(obj: any): InstalVolet {
        return new InstalVolet(obj.id, obj.type, obj.dateAjout, obj.etat, obj.piece,
            obj.programmes, obj.ouverture);
    }

}

export class InstalChauffeEau extends Installation {

    puissance: number;
    consoElec: ConsommationElec;
    consoEau: ConsommationEau;

    constructor(id: number, t: string, dAj: string, etat: boolean, piece: Piece,
                progs: Programme[], p: number, consoElec: ConsommationElec, consoEau: ConsommationEau) {
        super(id, t, dAj, etat, piece, progs);
        this.puissance = p;
        this.consoElec = consoElec;
        this.consoEau = consoEau;
    }

    public static createBlank(): InstalChauffeEau {
        return new InstalChauffeEau(-1, '', '', null, null, [], null, null, null);
    }

    public static instalFromJSON(obj: any): InstalChauffeEau {
        return new InstalChauffeEau(obj.id, obj.type, obj.dateAjout, obj.etat, obj.piece,
            obj.programmes, obj.puissance, obj.consoElec, obj.consoEau);
    }


}
