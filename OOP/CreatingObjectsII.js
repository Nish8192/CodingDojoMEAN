function VehicleConstructor(name, numOfWheels, numOfPassengers, speed){

    //PRIVATE
    var self = this;
    var distance_traveled = 0;

    var updateDistanceTravelled = function(){
        distance_traveled += speed;
        return self;
    }


    //PUBLIC
    this._name = name;
    this.numOfWheels = numOfWheels;
    this.numOfPassengers = numOfPassengers;
    this.speed = speed;

    this.makeNoise = function(){
        return this;
    }
    this.move = function(){
        updateDistanceTravelled();
        this.makeNoise();
        return this;
    }
    this.checkMiles = function(){
        console.log(distance_traveled);
        return self;
    }

}

var Bike = new VehicleConstructor("Bike", 2, 1, 10);
Bike.makeNoise = function(){
    console.log("Ring, ring!!");
    return this;
}
Bike.makeNoise();
Bike.move().move().checkMiles().move().checkMiles();

var Sedan = new VehicleConstructor("Sedan", 4, 5, 80);
Sedan.makeNoise = function(){
    console.log("HONK HONK!!");
    return this;
}
Sedan.makeNoise();

var Bus = new VehicleConstructor("Bus", 10, 25, 55);
Bus.pickUp = function(num){
    this.numOfPassengers += num;
    return this;
}
