import { IEtudiant } from "./ietudiant";


export class Etudiant {
    constructor(
        private _nom: string,
        private _prenom: string,
        private _rue: string,
        private _cp: string,
        private _ville: string,
        private _courriel: string,
        private _genre: string,
        private _age: number,
        private _idCandi: number
    ) { }

    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }

    public get prenom(): string {
        return this._prenom;
    }
    public set prenom(value: string) {
        this._prenom = value;
    }

    public get rue(): string {
        return this._rue;
    }
    public set rue(value: string) {
        this._rue = value;
    }

    public get cp(): string {
        return this._cp;
    }
    public set cp(value: string) {
        this._cp = value;
    }

    public get ville(): string {
        return this._ville;
    }
    public set ville(value: string) {
        this._ville = value;
    }

    public get courriel(): string {
        return this._courriel;
    }
    public set courriel(value: string) {
        this._courriel = value;
    }

    public get genre(): string {
        return this._genre;
    }
    public set genre(value: string) {
        this._genre = value;
    }

    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }

    public get idCandi(): number {
        return this._idCandi;
    }
    public set idCandi(value: number) {
        this._idCandi = value;
    }
}
