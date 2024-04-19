class Animal{
    constructor(name){
        this.name = name;
    }
    soundAnimal(){

    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }
    soundAnimal(){
        console.log(this.name + ": woof");
    }
}

class Cat extends Animal{
    constructor(name){
        super(name);
    }
    soundAnimal(){
        console.log(this.name + ": meow");
    }
}

const dog = new Dog("Fido");
dog.soundAnimal();
const cat = new Cat("Kitty");
cat.soundAnimal();
