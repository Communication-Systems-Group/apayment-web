import {Plant} from './plant.model';
export class User {
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;

    plant: Plant;

    constructor() {
        this.plant = new Plant();
    }
}

