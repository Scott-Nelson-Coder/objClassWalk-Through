// console.log("Hello")
let person = {
    firstName: "Scott",
    lastName: "Nelson"
}

let meal = {
    appetizer: "mozzarell sticks",
    entree: "prime rib",
    dessert: 'ice cream',
    drink: "water"
}

// // destructer
// let {appetizer: app} = meal
// console.log(app)
// let {entree, dessert} = meal
// console.log(entree)
// console.log(dessert)


// //saved to new let
// let bestDessertEver = meal.dessert
// console.log(bestDessertEver)



// Looping OBJ

//looping throught the values in an object
// for(key in person){
//     console.log(person[key])
// }

// looping through the keys in an object
// for(key in person){
//     console.log(key)
// }

//adding a prop to meal Obj then call the meal obj
// meal.togo = "chicken nuggets"


// delete meal.togo
// delete meal.togo

// console.log(meal)


// ... is the spread operator






//CLASSES

// setting up the class this.name can be whatever you want for naming

class Pet {
    constructor(name, breed, age) {
        this.name = name
        this.breed = breed
        this.age = age
    }

    greeting(){
        console.log(`${this.name} says hello, He wanted you to know he is a ${this.breed}`)
    }
}

// making an instance of pet class
let pet1 = new Pet("Ooboo", "Beagle", 5)
console.log(pet1.name)

let pet2 = new Pet("Mossberg", "Boxer", 9)

// calling another instance of pet class
console.log(pet2.breed)

// calling Pet Method
pet1.greeting()
pet2.greeting()


// extends Pet class
class Dog extends Pet {
    constructor(name, breed, age, barkCount){
        super(name, breed, age)
        this.barks = barkCount
        this.isGoodBoy = true
    }

    speak() {
        this.barks += 1
        console.log("Rabbit!")
    }
}

let dog1 = new Dog("Dallas", "German Shephard", 7 , 0)

dog1.greeting()

dog1.speak()
dog1.speak()
dog1.speak()

console.log(dog1.barks)
console.log(dog1.isGoodBoy)
