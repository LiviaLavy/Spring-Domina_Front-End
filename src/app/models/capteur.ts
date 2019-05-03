import { Piece } from './piece';

export class Capteur {
    idCapteur: number;
    type: string;
    piece: Piece;
}

export class CapteurCO2 extends Capteur {

    tauxCO2: number;
}

export class CapteurHumidite extends Capteur {

    humidite: number;
}

export class CapteurLumen extends Capteur {

    luminosite: number;
}

export class CapteurTemp extends Capteur {

    temp: number;
}
