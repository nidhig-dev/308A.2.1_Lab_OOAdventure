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
    constructor(name){
        this.name=name;
        this.health=100;
        this.inventory=[];

    }
    // Add the roll method to the Character class.
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
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
robin.roll();
robin.companion.roll();
robin.companion.companion.roll();
