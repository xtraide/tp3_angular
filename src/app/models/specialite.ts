import { ISpecialite } from "./ispecialite";

export class Specialite {
    constructor(
        private _libelle: string,
        private _idSpec: number
    ) { }

    public get libelle(): string {
        return this._libelle;
    }
    public set libelle(value: string) {
        this._libelle = value;
    }

    public get idSpec(): number {
        return this._idSpec;
    }
    public set idSpec(value: number) {
        this._idSpec = value;
    }
}
