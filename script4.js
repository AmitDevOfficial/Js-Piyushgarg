//--Functions--

function myNmae() {
    console.log("Hey my Nmae  is Amit");
}

// myNmae()

/*-----Adding Two-----*/



function add(a, b){
    a + b;
    console.log(a + b)  //--This is wrong way to console in function
}

// add(2, 4)


// --------- argument------
function add1(a, b) {
   let ans = a + b;
   return ans;
}
let a = add1(2, 3) //----parameters
// console.log( a )


/*
//----Add Unlimited Numbers----

function unlimited(){
    console.log(arguments) // Arguments is the js inbuilt feature
    let num = 0;
    for(i = 0; i < arguments.length; i++){
        num = num + arguments[i]
    }
    return num;
}

let num = unlimited(1, 2, 3, 4, 100);
console.log(num)
*/


// Spread Operator --

function unlimited(...number){
    console.log(number) // Arguments is the js inbuilt feature
    let num = 0;
    for(i = 0; i < number.length; i++){
        num = num + number[i]
    }
    return num;
}

let num = unlimited(1, 2, 3, 4, 100);
console.log(num)