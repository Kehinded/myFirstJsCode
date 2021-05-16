// 1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.
function convertFahrToCelsius(f){
    var c;
    var f;
    if (isNaN(f)==true){
        if(Array.isArray(f)==true){
            console.log(JSON.stringify(f)+ " is not a valid number but a/an array");
        } else if(typeof(f)=="object"){
            console.log(JSON.stringify(f)+ " is not a valid number but a/an object");
        } else {
            console.log(f + " is not a valid number but a/an " + typeof(f));
        }
    } else {
        c=((f-32)/1.8);
        console.log(c.toFixed(4));
    }
}

/*2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, 
creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", 
logs the resulting array to the console then returns the resulting array.
*/
function checkYuGiOh(n){
    var n;
     if (isNaN(n)==true){
        if (Array.isArray(n)==true){
            console.log("invalid paramters: " + JSON.stringify(n));
         } else if (typeof(n)=="object"){
            console.log("invalid paramters: " + JSON.stringify(n));
         } 
     }
     else {
         var ans;

         //assigning the check function to a variable and passing the parameter in the checkYuGiOh function to it
         ans = check(n);

         //a function that replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh"
         function check(num){
            var num;
            var arr = [];
            for (i=1; i<=num; i++){
                if (i%2==0 && i%3==0 && i%5==0){
                   arr.push("yu-gi-oh");
                   console.log(arr);
                }else  if (i%2==0 && i%3==0){
                   arr.push("yu-gi");
                   console.log(arr);
                }else  if (i%2==0 && i%5==0){
                   arr.push("yu-oh");
                   console.log(arr);
                } else  if (i%3==0 && i%5==0){
                   arr.push("gi-oh");
                   console.log(arr);
                } else  if (i%5==0){
                   arr.push("oh");
                   console.log(arr);
                } else  if (i%5==0){
                   arr.push("oh");
                   console.log(arr);
                } else  if (i%3==0){
                   arr.push("gi");
                   console.log(arr);
                } else  if (i%2==0){
                   arr.push("yu");
                   console.log(arr);
                }
                else{
                   arr.push(i);
                   console.log(arr);
                }
            }
           }
     }
}
