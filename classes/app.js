class Plant{

    constructor(naam){

        this.naam = naam;

    }

}

 

class Dino{

    constructor(naam, bool, nummer){

        this.naam = naam;

        this.vleeseter = bool;

        this.leeftijd = nummer;

 
    }

    eetDino(dino){

        console.log(this.naam + " eet " + dino.naam + " op ");

        dino.leeft = false

    }

    eetplant(plant){

        console.log(this.naam + " eet " + plant.naam + " op ");

 

    }

}

 

let trex = new Dino("trex",true,10);

console.log(trex);

 

let stego = new Dino("stego",true,25);

console.log(stego);

 

let roos = new Plant("roos");

console.log(roos);

 

trex.eetDino(stego);

stego.eetplant(roos)