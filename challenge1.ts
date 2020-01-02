//is the first argument divisible by the second and third?

const isDivisible = (n:number, x:number, y:number):boolean => n % x === 0 && n % y == 0 ? true : false;

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
    
    tupCounter.forEach(tup=> count += (tup[1] === 1 ? 0 : 1) );

    return count;
}

const answer : number = duplicateCount2("scootersrateac");

console.log(answer);