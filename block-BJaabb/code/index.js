/* 1. Do the following

1. Declare a variable `user` and take the name using `prompt`. Display the value stored in `user` using `alert`.

2. Now copy the value of `user` into a new variable named `userName`. Log the value of both `user` and `userName` using `console.log`.
3. Declare variable `age` and `isLearning` with value `22` and `true` in the same line. hint: declaring multiplemvariable in one line.
4. Now change the value of `user` to `John` and log the value of both `user` and `userName`.
*/
let user = prompt("Enter your name");
alert(user);
let userName = user;
console.log(user);
console.log(userName);

let age = 22; isLearning = "true";
user = "John";
console.log(user);
console.log(userName);

/* 2.
Use `prompt` to take two numbers from user and store it in variable `numA` and `numB`. Create a third variable called `sum`, using `+` operator add numA and numB , store it in varible `sum` and using alert display `sum` in browser.
*/

let numA = Number(prompt("Enter a number"));
let numB = Number(prompt("Enter a number"));
let sum = numA + numB;
alert(sum);

// Loops

// 3. Complete the following code to make the output be 0 2 4 6 8 10?

for (let j = 0; j <= 10; j= j+2) console.log(j);

// 4. Print the odd numbers from 9 to 1 (both inclusive) using a for loop.

 for (i=9;i>1;i=i-1){
     if(i % 2 != 0){
        console.log(i);
     }
    
 }

// 5. Concat all the numbers from 5 to 0 (both inclusive) in descending order using a while loop. (543210)

let concat = "";
let number = 5;
while(number >=0){
    concat += number;
   
    number = number -1;
}
console.log(concat);

// 6. Concat all the even numbers from 10 to 0 (both inclusive) in descending order using a while loop. (1086420)

let concatEvenNumbers = "";
let num = 10;
while(num >=0){
    if(num % 2 ==0){
    concatEvenNumbers += num;
    }
   num = num-1;
}
console.log(concatEvenNumbers);

// Comparisoin


/* 7. Take two value using prompt and store them in variables `num1` and `num2`. Check whether they are equal or not.

- `alert` true or false base on the entered value.
- if the input value is anything like `true`, `null` or `undefined` alert saying `Enter a valid value`.


Example:

21, 21; // true
"hello", -21; // false

*/


let numberA = prompt("Enter a number");
let numberB = prompt("Enter a number");
if(isNaN(numberA) || isNaN(numberB)){
    alert("Enter a valid number");
}else if(numberA === numberB){
    alert("True");
}else{
    alert("False");
}