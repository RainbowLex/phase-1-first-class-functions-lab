// Code your solution in this file!
// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
// function returnFirstTwoDrivers(){
//     const firstD = drivers[0];
//     const secondD = drivers[1];
//     return [firstD, secondD]
// }
// function returnLastTwoDrivers(){
//     const lastD = drivers[2];
//     const lastD2 = drivers[3];
//     return [lastD, lastD2]
// }
// function selectingDrivers(){
// }
//FUNC VS ARROW FUNC =
// function returnFirstTwoDrivers(array){
//     return array.slice(0,2)
// }
const returnFirstTwoDrivers = array => {
    return array.slice(0,2)
}

const returnLastTwoDrivers = array => {
    return array.slice(2)//(array.length-2,array.length)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
    return function innerFunc(fare){
        return multiplier * fare
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

// const selectDifferentDrivers = function(array, returnFirstTwoDrivers){
//     return function returnFirstTwoDrivers(array){}
// }    
    
function selectDifferentDrivers(array, func){
    if (func === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(array);
    }
    else if(func === returnLastTwoDrivers){
        return returnLastTwoDrivers(array);
    }
    else{
        return('Please enter something valid.')
    }
}

// function moreMultplying(num, funct){
//     if(funct === fareDoubler){
//         return fareDoubler(num)*2
//     }
//     else if(funct === fareTripler){
//         return num*3
//     }
//     else {
//         return ('You suck')
//     }
// }