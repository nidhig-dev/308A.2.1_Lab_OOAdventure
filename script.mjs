//PART-1 HUMBLE BEGINNINGS--------------------------------------------------------|

// creating an adventurer object
const adventurer = {
name:"Robin",
health:10,
inventory:["sword","potion","artifact"],
//adding a furry friend Leo
companion:{
    name:"Leo", 
    type:"Cat",
    // Add a “companion” sub - object to “Leo” with the following properties:
    // The companion’s name is “Frank.”
    // The companion’s type is “Flea.”
    // The companion has its own belongings, which includes a small hat and sunglasses.
    companion:{
        name:"Frank",
        type:"Flea",
        inventory:["small hat","sunglasses"],
    }
},
    // Give Robin the following method:
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        //console.log(`${this.name} rolled a ${result}.`)
    }
}
// console.log(adventurer.inventory[0]);

// Test this method by calling adventurer.roll() a few times.
adventurer.roll();
// Logging each item in robin's inventory
for(let i=0;i<adventurer.inventory.length;i++){
   // console.log(adventurer.inventory[i]);
}


// PART 2 - CLASS FANTASY---------------------------------------------------|
// Start with a Character class, which will define generic character entities. 
// Robin and their companions all have a name, so the Character class should definitely 
// include name as one of its properties. At this stage, we will also make the decision 
// that every character should have health (which we will standardize to a maximum of 100, 
// and an inventory (even if the inventory is empty).
class Character{
    // Add a static MAX_HEALTH property to the Character class, equal to 100.
    static MAX_HEALTH = 100;
    constructor(name){
        this.name=name;
        this.health=100;
        this.inventory=[];

    }
    // Add the roll method to the Character class.
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        // console.log(`${this.name} rolled a ${result}.`)
        return(result);
    }
}
// Now, we can re - create Robin using the Character class!
const robin=new Character("Robin");
robin.inventory=['sword','potion','artifact'];
robin.companion= new Character("Leo");
robin.companion.type="Cat";
robin.companion.companion=new Character("Frank");
robin.companion.companion.type='Flea';
robin.companion.companion.inventory = ['small hat', 'sunglasses'];

//console.log(robin);

// Even the companions can roll now; give it a try!
// robin.roll();
// robin.companion.roll();
// robin.companion.companion.roll();

// PART 3 -CLASS FEATURES------------------------------------------|
class Adventurer extends Character{
    // Add a static ROLES array to the Adventurer class, with the values “Fighter,” “Healer,” and “Wizard.” 
    // Feel free to add other roles, if you desire!
    // PART 4 -CLASS UNIFORMS------------------------------------------------------------|
    static ROLES=["Fighter","Healer","Wizard","Archer"];
    constructor(name,role){
        super(name);
        
        // Adventurers have specialized roles.
        try {
            this.role=role;
        let noRole=false;
        // Add a check to the constructor of the Adventurer class that ensures the given role matches one of these values.
        for(let i=0;i<Adventurer.ROLES.length;i++){
            
            if(this.role!=Adventurer.ROLES[i]){
                noRole=false;
                
            }
            else{
                noRole=true;
                break;
            }
        }
        
        if(noRole==false)
        {
            throw new Error("Not a valid Role");
        }
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll","50 gold coins");
        }
        catch (error) {
            console.error(error.message);
            // End the game!
            process.exit(1);
        }

    }

    // Adventurers have the ability to scout ahead of them.
    scout(){
        console.log(`${this.name} is scouting ahead`);
        super.roll();
    }
    // What else should an adventurer be able to do? What other properties should they have?
//PART 7------------------------------------------------------------------------------|
    addInventory(item) {
        this.inventory.push(item);
    }
    removeInventory(item){
        this.inventory.pop(item);
    }
    loseHealth(){
        this.health-=1;
    }
    // PART 6-DEVELOPING SKILLS---------------------------------------------------------|
    
    
    // Create an additional method, duel(), for the Adventurer class with the following functionality:
    // Accept an Adventurer as a parameter.
    duel(name){
        // Use the roll() functionality to create opposing rolls for each adventurer.
        let rollCount =super.roll();        
        // console.log(name);
        return(rollCount);
    }

    
}
// Next, create a Companion class with properties and methods specific to the companions.

class Companions extends Character {
    constructor(name, type, inventory) {
        super(name);
        // companions have specialized types.
        this.type = type;
        // Every companion starts with a litterbox and 30 gold coins.
        this.inventory=inventory;
        // .push("litterbox", "30 gold coins");
    }
    // companions have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead`);
        super.roll();
    }
    addInventory(item) {
        this.inventory.push(item);
    }
    loseHealth() {
        this.health -= 1;
    }
}

const adRobin = new Adventurer("Robin", "Archer");
const adLila=new Adventurer("Lila","Healer");
const compLeo = new Companions("Leo", "Cat", ["litterbox", "30 gold coins"]);
const compFrank=new Companions("Frank","Flea",["small hat","sunglasses"]);
// PART 7-----------------------------------------------------------------|
adRobin.addInventory("Potion");
console.log(adRobin);
adRobin.removeInventory("Potion");
console.log(adRobin);
compLeo.scout();

// PART 6-------------------------------------------------------------------------|
// Repeat this process until one of the two adventurers reaches 50 health.
let rollCount1=0;
let rollCount2=0;
while(adRobin.health>50 && adLila.health>50){
rollCount1 =adRobin.duel("Robin");
rollCount2=adLila.duel("Lila")
//     Subtract 1 from the adventurer with the lower roll.

if(rollCount1<rollCount2){
    adRobin.loseHealth();
}
// if roll count is same , none loses health, that is why check else if statement also
else if (rollCount1 > rollCount2){
    adLila.loseHealth();
}
    // console.log(`Outcome ${adRobin.name}:dice roll :${rollCount1} and health: ${adRobin.health}`);
    // console.log(`Outcome ${adLila.name}:dice roll :${rollCount2} and health: ${adLila.health}`);

}
// Log the results of this “round” of the duel, including the rolls and current health values.

console.log(`Final Outcome: Here are the duel results: ${adRobin.name}:final dice roll :${rollCount1}, health: ${adRobin.health} and  ${adLila.name}: final dice roll :${rollCount2}, health: ${adLila.health}`);
// console.log(`Outcome ${adLila.name}:dice roll :${rollCount2} and health: ${adLila.health}`);
// Log the winner of the duel: the adventurer still above 50 health.

if (adRobin.health <= 50) {
    console.log(`${adLila.name} won!`)
}
else if (adLila.health <= 50) {
    console.log(`${adRobin.name} won!`)
}

// console.log(`adventure name is ${adRobin.name}`, adRobin);
// console.log(`companion name is ${compLeo.name}`, compLeo);
// console.log(`companion name is ${compFrank.name}`, compFrank);

// PART 5 -GATHER YOUR PARTY---------------------------------------------------------------|
class AdventurerFactory {
    constructor(role) {
        this.role = role;
        this.adventurers = [];
    }
    generate(name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
    }
    findByIndex(index) {
        return this.adventurers[index];
    }
    findByName(name) {
        return this.adventurers.find((a) => a.name === name);
    }
}

const healers = new AdventurerFactory("Healer");
const newLila = healers.generate("Lila");
const newNidhi=healers.generate("Nidhi");
// console.log("My inventroy is",healers.adventurers);
// console.log(healers);

