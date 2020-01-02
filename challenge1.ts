//is the first argument divisible by the second and third?

const isDivisible = (n:number, x:number, y:number):boolean => n % x === 0 && n % y == 0 ? true : false;

//count the characters that are duplicated

const duplicateCount = (text: string): number => text.toLowerCase().split("").sort().reduce((acc,cur,ind,arr)=> acc += (cur == arr[ind+1] && cur != arr[ind-1]) ? 1 : 0, 0 )