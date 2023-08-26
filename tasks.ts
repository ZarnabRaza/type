   // Develop a program that calculates and print the sum of first n even numbers using a for loop 

var evenNumbers:any[] = [1,2,3,4,5,6,6,7,8,9,10,11,12,13,14,15,16,
    17,8,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,
52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,
89,90,91,92,93,94,95,96,97,98,99,100];
var sum:number = 0;
for(let i = 0; i<=evenNumbers.length; i++){
    if(evenNumbers[i]%2 == 0){
      sum += i;
    }
    
}
console.log(sum)

let evenNum: number = 100;
function sumOfEvenNumber(n:number){
    sum = 0;

    for(let i = 0; i <= n; i++){
        if(i%2 == 0){
        sum +=i 
        }
   
    }
    return sum;
}
const result = sumOfEvenNumber(evenNum);
console.log(`the sum of first ${evenNum} even number is ${result}`);

var n:number = 100;
var sum:number = 0;
for(let i = 0; i<=n; i++){
    if(i%2 == 0){
        sum += i;
    }
}

console.log("sum of first" + n + "even numbers is " +sum)


// Implement a program that uses a for loop to iterate through an array of numbers and 
// print only the even numbers.

var eNumbers:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
for(let i = 0; i<=eNumbers.length; i++){
    if(eNumbers[i]%2 == 0){
        console.log(eNumbers[i]);
    }
}

//implement a program that uses a loop to iterate through an 
// array of numbers and remove all the even numbers from them and just leave the odd ones

var oArray:any[] = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i <=oArray.length; i++){
    if(oArray[i]%2 != 0){
        console.log(oArray[i]);
    }
};

// write a program that defines a function to calculate the area of the circle. the function should
// take the radius as input and return calculated area

function areaOfCircle(radius:number){
    return radius **2 * 3.14;
}
const Area:number = areaOfCircle(7);
console.log(Area);

// Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50)
// from array.

const listOfGrades:number[] = [45,36,78,98,55,34,36,80,90,100];
function removeFallingGrades(num:number[], index:number, deleteValues:number){
    if(num[index] < 50){

    
    num.splice(index, deleteValues);
    }

    return num;
};

let myIndex:number = 0;
let deletedV : number = 1;
let results  = removeFallingGrades(listOfGrades, myIndex, deletedV);
console.log(results);

for(let i = 0; i<=listOfGrades.length; i++){
    if(listOfGrades[i] < 50){
        listOfGrades.splice(i, 1);
    }
}
console.log(listOfGrades);

// Write a program that uses a function to find the largest element in an array of numbers 

var numberArray:number[] = [100, 200, 300, 400, 500, 600, 700, 100, 900, 1000];
function findLargestNumber(num:number[]){
    let max = Math.max(...num);
    console.log(max);
}

const largestNumber = findLargestNumber(numberArray);
console.log(largestNumber);   

function findLargestElement (num1:number[]){
    if (num1.length == 0){
        throw new Error("Array is empty");
    }

    var largestN = num1[0];

    for(let i = 1; i < num1.length; i++){
        if (num1[i] > largestN){
            largestN = num1[i]
        }  
    } 
    return largestN;

};

const number1991:number[] = [45,67,89,76,90,45,100,1000000, 2000000000];
const largestElement = findLargestElement(number1991);
console.log(largestElement);

// Create a function that takes an array, an index, and a value as  parameters. inside the function, use the
// splice method to insert the value at the specified index in the array. return the modified array 

function modifiedArray(arr:number[], index:number, value:number){
         arr.splice(index, 0, value);
         return arr;
}

let array901:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let myindex:number = 2;
let myValue:number = 94;
let modifiedArrayResult = modifiedArray(array901, myindex, myValue);
console.log(modifiedArrayResult);

// Implement a simple shopping cart program using an array. Create functions to add, remove items 
// and update quantities using splice method. Print the cart's content after each operation.

let cart1:string[] = ["Apple", "Orange", "Rasberry", "Blueberry", "Mango"];
function addItems(item:string[], index:number, value:string[]):any[]{
    item.splice(index,0,...value);
    return item;
};

const index902:number = 2;
const value902:string[] = ["Grapes", "Peaches"];
const addItems902 = addItems(cart1, index902, value902);
console.log(addItems902);


function removeItems(item:string[], index:number, deleteItems:number){
    item.splice(index, deleteItems);
    return item;
}

const index903:number = 3;
const deleteItems903:number = 2;
const removedItems903 = removeItems(cart1, index903, deleteItems903);
console.log(removedItems903);

const cart2:string[] = ["Apple $3/kg", "Orange $5/kg", "Cucumber $0.2/kg", "Guava $6/kg", "Grapes $7/kg"]
function updateCart(item:string[], index:number, upadatedValue:string){
    item.splice(index,1,upadatedValue);
    return item;
};

const index904:number = 0;
const upadatedValue904:string = "Apple $4/kg";
const upadatedValue9045 = updateCart(cart2, index904, upadatedValue904);
console.log(upadatedValue9045);

// write a program that uses a while loop to print the first 25 integers.

let index905:number = 1;
while(index905<=25){
    console.log(index905);
    index905++;
};

// write a program that uses a while loop to print the first 10 even numbers.

let index906:number = 1;
while(index906<=10){
    if(index906%2 == 0){
        console.log(index906);
    }
    index906++;
};

// create a function that takes a positive integer as paramters and and uses a while loop to calculate 
// and return the factorail of that number

function calculateFactorial(num:number){
    if(num < 0){
        console.log("integer is negative");
        return -1;
    }
    

    let factoriallNum = 1;
    let currentValue = 1;
    while(currentValue<=num){
        factoriallNum *= currentValue;
        currentValue++;
    }
    return factoriallNum;
}
let positiveIntegerNum:number = 5;
let factorailNum1:number = calculateFactorial(positiveIntegerNum);
console.log(factorailNum1); 

// write a program having an array of numbers if the number is negative it should remove number from array

const nArray:number[] = [1,2,3,-4,-5,-6,-7,-8,-9,-10,11,12,13,14,15,16];
function removeNegativeNumbers(arr:number[]){
    const positiveNumber = arr.filter((num) => num>0);
    return positiveNumber;
};

const positiveIntegers:any[] = removeNegativeNumbers(nArray);
console.log(positiveIntegers);

// create a function that takes an array of number as parameter. use a while loop to calculate and return 
// the sum of all the numbers in the array

function sumOfAllNumbers(arr:number[]): number{
    let sum = 0;
    let index = 0;

    while(index <= arr.length){
        sum += index;
        index++;
    }
     return sum;
}

const sumArray:number[] = [8,78,67,56,45,34,23,78,90,100,101,102,103]; 
const resultsumArray = sumOfAllNumbers(sumArray);
console.log(resultsumArray);


function sumOfAllNumbers2(numbers:number[]) :number {
    let sum = 0;
    let index = 0;
    while (index < numbers.length) {
        sum += numbers[index];
        index++;
    }
    return sum;
}
const array78:number[] = [8,78,67,56,45,34,23,78,90,100,101,102,103];
const sum191 = sumOfAllNumbers2(array78);
console.log(sum191);

function calculateSum(numbers: number[]): number {
    let sum = 0;
    let index = 0;

    while (index < numbers.length) {
        sum += numbers[index];
        index++;
    }

    return sum;
}

const numbersArray = [89, 90, 78, 67, 56, 45, 67];
const result904 = calculateSum(numbersArray);
console.log(`Sum of numbers: ${result904}`)
 