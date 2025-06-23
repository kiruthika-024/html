//mapping

const myMap = new Map();
myMap.set('name','alice');
myMap.set('age',30);
myMap.set('city','newyork');
for(const[key,value] of myMap.entries()){
    console.log(`${key}: ${value}`);

    //size of the map
    
    console.log(myMap.size);
    
    //get method:
    let numb=myMap.get('name');
    console.log(numb);
}

//classes

class car{
    constructor(name,year){
        this.name= name;
        this.year=year;
}
}
const mycar1=new car("ford",2014);
const mycar2=new car("audi",2019);
console.log(mycar1.name +" " +mycar1.year);
console.log(mycar2.name +" " +mycar2.year);


//array map methods

let numbers = [1,2,3,4,5];
let doublenumber=numbers.map(function(num){
    return num*2;
});
console.log(doublenumber);

