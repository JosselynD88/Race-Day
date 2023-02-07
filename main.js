// Josseyn D.
let raceNumber = Math.floor(Math.random() * 1000);

//Is runner registered?
let registered = true;

//Runner's age?
let age = 19;

if(age > 18 && registered === true){

raceNumber += 1000;
}

if(age > 18 && registered === true){
    console.log(`Number ${raceNumber}, will race at 9:30 am!`);
}
else if(age > 18 && registered === false){
    console.log(`Number ${raceNumber}, will race at 11:00 am!`);
}
else if(age < 18){
    console.log(`Number ${raceNumber}, will race at 12:30 pm!`);
}
else{
    console.log(`Number ${raceNumber}, please see the registration desk.`);
}
