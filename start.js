

//let largest = a;
// function getLargest(a, b, c) {
//     if (a > b && a > c) {
//         largest = a;
//     }
//     else if (b > a && b > c) {
//         largest = b;
//     }
//     else {
//         largest = c;
//     }
// }

const getLargest=(a, b, c)=> {
    return (a > b && a > c)?a :(b > a && b > c)?b:c;
        
    
}



//console.log(largest);


function arrayWayLargest(a,b,c){
    let highest=a;
    let numbers=[a,b,c];
    numbers.forEach((number)=>{
       if(number>highest){
        highest=number
       }
    });

return highest;
    }

const sum=(a,b)=>{
    return a+b
}

module.exports={ getLargest, sum }