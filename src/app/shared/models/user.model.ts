import {Plant} from './plant.model';
export class User {
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    tvd: number;
    plant: Plant;

    AnimalHusbandryDetailResult: AnimalHusbandryDetailResult;

    constructor() {
        this.plant = new Plant();
    }
}


export class AnimalHusbandryDetailResult {
    PostData: PostData;

    constructor(PostData: PostData) {
        this.PostData = PostData;
    }

}

export class PostData {
    City: string;
    Name: string;
    PostCode: string;
    Street: string;
    TVDNumber: number;

    constructor(City: string,
                Name: string,
                PostCode: string,
                Street: string,
                TVDNumber: number) {
        this.City = City;
        this.Name = Name;
        this.PostCode = PostCode;
        this.Street = Street;
        this.TVDNumber = TVDNumber;
    }
}
