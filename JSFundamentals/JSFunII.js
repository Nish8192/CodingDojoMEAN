function genInteger(x, y){
    var sum = 0;
    for(let i = x; i <= y; i++){
        sum += i;
    }
    return sum;
}

function findMin(arr){
    var min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

function findAvg(arr){
    var sum = 0;
    for(let i = 0; i < arr.lengh; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

var x = function xgenInteger(x, y){
    var sum = 0;
    for(let i = x; i <= y; i++){
        sum += i;
    }
    return sum;
}

var y = function yfindMin(arr){
    var min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

var z = function zfindAvg(arr){
    var sum = 0;
    for(let i = 0; i < arr.lengh; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

function JSFunII(){
    this.genInteger = function (x, y){
        var sum = 0;
        for(let i = x; i <= y; i++){
            sum += i;
        }
        return sum;
    }

    this.findMin = function (arr){
        var min = arr[0];
        for(let i = 0; i < arr.length; i++){
            if(arr[i] < min){
                min = arr[i];
            }
        }
        return min;
    }

    this.findAvg = function (arr){
        var sum = 0;
        for(let i = 0; i < arr.lengh; i++){
            sum += arr[i];
        }
        return sum / arr.length;
    }
}

function Person(){
    this.name = "Nishant";
    this.distance_traveled = 0;
    this.say_name = function(){
        console.log(this.name);
        return this;
    }
    this.say_something = function(say){
        console.log(this.name + " says " + say);
        return this;
    }
    this.walk = function(){
        console.log(this.name + " is walking!");
        this.distance_traveled += 3;
        return this;
    }
    this.run = function(){
        console.log(this.name + " is running!");
        this.distance_traveled += 10;
        return this;
    }
    this.crawl = function(){
        console.log(this.name + " is crawling!");
        this.distance_traveled += 1;
        return this;
    }
}

var me = new Person();
me.run().run();
