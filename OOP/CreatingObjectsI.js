function VehicleConstructor(name, numOfWheels, numOfPassengers){

    this._name = name;
    this.numOfWheels = numOfWheels;
    this.numOfPassengers = numOfPassengers;

    this.makeNoise = function(){
        return this;
    }

}

var Bike = new VehicleConstructor("Bike", 2, 1);
Bike.makeNoise = function(){
    console.log("Ring, ring!!");
    return this;
}
Bike.makeNoise();

var Sedan = new VehicleConstructor("Sedan", 4, 5);
Sedan.makeNoise = function(){
    console.log("HONK HONK!!");
    return this;
}
Sedan.makeNoise();

var Bus = new VehicleConstructor("Bus", 10, 25);
Bus.pickUp = function(num){
    this.numOfPassengers += num;
    return this;
}
