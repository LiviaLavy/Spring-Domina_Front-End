import { Piece } from './piece';

export interface Capteur {
    idCapteur: number;
    type: string;
    piece: Piece;
}

export class CapteurCO2 {
    capteur: Capteur;
    tauxCO2: number;
}

export class CapteurHumidite {
    capteur: Capteur;
    humidite: number;
}

export class CapteurLumen {
    capteur: Capteur;
    luminosite: number;
}

export class CapteurTemp {
    capteur: Capteur;
    temp: number;
}
