function ninjaConstructor(name, cohort){
    this.name = name;
    this.cohort = cohort;
    this.belt_level = "Yellow";
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
    this.levelUp = function(){
        if(this.belt_level === "Yellow"){
            this.belt_level = "Blue";
        }
        else if(this.belt_level === "Blue"){
            this.belt_level = "Purple";
        }
        else if(this.belt_level === "Purple"){
            this.belt_level = "Red";
        }
        else if(this.belt_level === "Red"){
            this.belt_level = "Black";
        }
        console.log(this.belt_level);
        return this;
    }
}

var ninja = new ninjaConstructor("Nishant", "Databaes");
ninja.levelUp().levelUp().levelUp().levelUp();
