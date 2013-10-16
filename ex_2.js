var ourCat = function(name, tiredness, hunger, loneliness, happiness) {
    this.name = name,
    this.tiredness = tiredness,
    this.hunger = hunger,
    this.loneliness = loneliness,
    this.happiness = happiness,
    numMinutes = Math.floor(Math.random()*101),
    numKibbles = Math.floor(Math.random()*101),
    numStrokes = Math.floor(Math.random()*101),
    numSnuggles = Math.floor(Math.random()*101),
    this.sleep = function(numMinutes){
        if (numMinutes <= (numMinutes/2)) {
            for (var i = 0; i < numMinutes; i++){
                console.log('z');
                this.tiredness -= 1;
            }
        } else {
            console.log(this.name + " doesn't sleep. He watches YOU sleep.");
        }
        console.log(this.name+"'s tiredness level = " + this.tiredness);
    },
    this.feed = function(numKibbles) {
        if (numKibbles <= 10){
            console.log(this.name+" says, 'I have " + numKibbles + " kibbles to eat!'");
            for (var i = 0; i < numKibbles; i++){
                console.log("nom");
                this.hunger -= 1;
            }
        }else {
            console.log("I don't want your smelly food. Mew!");
        }
        console.log(this.name+"'s hunger level = " + this.hunger);
    },
    this.pet = function(numStrokes) {
        if (numStrokes <= 50){
            console.log(this.name+" wants to be pet!");
            for (var i = 0; i < numStrokes; i++){
                console.log("purr");
                this.loneliness -= 1;
            }
        } else{
            console.log(this.name + " doesn't want to be pet! Go away.");
        }
        console.log(this.name+"'s loneliness level = "+ this.loneliness);
    },
    this.snuggle = function(numSnuggles) {
        if (numSnuggles <= 16){
            console.log(this.name + " is in desperate need of snuggles!");
            for (var i = 0; i < numSnuggles; i++){
                console.log("[kneading your leg]");
                this.happiness += 1;
            }
        }else{
            console.log("Don't snuggle me, brotimes.");
        }
        console.log(this.name + "'s happiness level = " + this.happiness);
    },
    this.status = function() {
        console.log(this.name+"'s tiredness level = " + this.tiredness);
        console.log(this.name+"'s hunger level = " + this.hunger);
        console.log(this.name+"'s loneliness level = "+ this.loneliness);
        console.log(this.name + "'s happiness level = " + this.happiness);
    }
};

var meeko = new ourCat("Meeko", 100, 65, 93, 99);
// console.log(meeko.name);
meeko.sleep(numMinutes);
meeko.feed(numKibbles);
meeko.pet(numStrokes);
meeko.snuggle(numSnuggles);
