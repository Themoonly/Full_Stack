class dog{
    constructor(name){
        this._name = name;
    }
    introduce() {
        console.log('this is '+ this._name + '!');
    }
    // a static method
    static bark(){
        console.log('woof!');
    }
}
const myDog = new dog('Buster');
myDog.introduce();

// calling the static method
dog.bark();