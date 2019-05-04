export class Personne {
    idUser: number;
    nom: string;
    prenom: string;
    username: string;
    password: string;
    actived: boolean;
    role: Role [];
}

export class Role {
    id_role: number;
    roleName: string;
    personne: Personne;

}
