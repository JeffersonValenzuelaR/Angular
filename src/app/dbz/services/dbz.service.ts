import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/personaje.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: "Goku",
            poder: 15000
        },
        {
            nombre: "Vegeta",
            poder: 11000
        }
    ];

    get personajes(): Personaje[] 
    {
        // Le quitamos el spread por la version del tslib y no se le pudo quitar la referencia por defecto
        return this._personajes;
    }

    constructor() {}

    agregarpersonaje (personaje: Personaje) {
        this._personajes.push(personaje);
    }
}