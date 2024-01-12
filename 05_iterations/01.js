// For Loop

for (let  i = 0;  i <= 10 ;  i++) {
    const element= i;
    if(element == 5){
     //   console.log("5 is best number");
    }
   // console.log (element);
    
}

for(let i=0 ; i<=10 ; i++ ){

    //console.log(`Outer Loop value ${i}`)
    for (let j = 0 ; j <=10 ; j++) {
        // console.log(`Inner Loop Value ${j} and inner Loop ${i}`);

        // console.log(i + "*" + j + "=" + i*j);

        //console.log(`${i}*${j}=${i*j}`);
        
    }
}

let myArray = ["flash", "batman" , "superman"]

console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}

// break and continue

// for (let i = 0; i <=20 ; i++) {
//     if(i == 5){
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${i}`);
    
// }

for (let i = 0; i <=20 ; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        continue      // skiped for just one iteration, rest all continued as it is  
    }

    console.log(`Value of i is ${i}`);

}