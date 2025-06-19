let array=["apple","orange","banana","grapes","mango"];
console.log(array[2]);
let c=array.push("watermelon");
console.log(array);
let a=array.shift(1);
console.log(a);
console.log(array.length);
for(let i=0;i<array.length;i++){
    console.log(`array ${i} : ${array[i]}`);
}
console.log(array.reverse());

let d =[1,2,3,4,5,6];
let sum =0;
for(let i=0;i<d.length;i++){
    sum=sum+d[i];
}
console.log("SUM OF ELEMENTS:"+sum);