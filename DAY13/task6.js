function BMI(weight,height){
    let bm=weight/(height*height);
    if(bm<18.5){
        console.log("You are in Undergraduate");
    }
    else if((bm>=18.5) && (bm<=24.9)){
        console.log("You are normal");
    }
    else{
        console.log("YOU are Overweight");
    }
}
BMI(60,1.62)