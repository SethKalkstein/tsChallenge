/*
//is the first argument divisible by the second and third?

const isDivisible = (n:number, x:number, y:number):boolean => n % x === 0 && n % y == 0 ? true : false;
 */
/*
//count the characters that are duplicated

const duplicateCount = (text: string): number => text.toLowerCase().split("").sort().reduce((acc,cur,ind,arr)=> acc += (cur == arr[ind+1] && cur != arr[ind-1]) ? 1 : 0, 0 );

const duplicateCount2 = (text: string): number => {
    let tupCounter : [string, number][] = [];
    let count : number = 0;

    for(let textChar of text.toLowerCase()){
    
        let newLetter : boolean = true;
        for(let j = 0; j < tupCounter.length; j++){
    
            if(textChar === tupCounter[j][0]){
                tupCounter[j][1]++;
                newLetter = false;
            }
        }
    
        if(newLetter == true){
            tupCounter.push([textChar,1]);
        }
    }
    
    tupCounter.forEach(tup => count += (tup[1] === 1 ? 0 : 1) );

    return count;
}

const answer : number = duplicateCount2("scootersrateac");

console.log(answer);
*/
/*
// A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.

// At some point during the walk the boy encounters a house with number 0 written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.

// For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one 0 house on the path.

const houseNumbersSum = (inputArray: number[]): number => inputArray.slice(0,inputArray.indexOf(0)).reduce((total : number, current: number)=> total += current, 0);

const sample: number[] = [5, 1, 2, 3, 0, 1, 5, 0, 2];

console.log( houseNumbersSum(sample));
 */
// const factorial = (n: number): number => Array(n).fill(1).reduce((a: number, c: number, i: number) => a * (c + i) , 1 );
const factorial = (n) => n > 1 ? n * factorial(n - 1) : 1;
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(7));
console.log(factorial(17));
