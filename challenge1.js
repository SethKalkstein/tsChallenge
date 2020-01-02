//is the first argument divisible by the second and third?
var isDivisible = function (n, x, y) { return n % x === 0 && n % y == 0 ? true : false; };
//count the characters that are duplicated
var duplicateCount = function (text) { return text.toLowerCase().split("").sort().reduce(function (acc, cur, ind, arr) { return acc += (cur == arr[ind + 1] && cur != arr[ind - 1]) ? 1 : 0; }, 0); };
var duplicateCount2 = function (text) {
    var tupCounter = [];
    var count = 0;
    for (var _i = 0, _a = text.toLowerCase(); _i < _a.length; _i++) {
        var textChar = _a[_i];
        var newLetter = true;
        for (var j = 0; j < tupCounter.length; j++) {
            if (textChar === tupCounter[j][0]) {
                tupCounter[j][1]++;
                newLetter = false;
            }
        }
        if (newLetter == true) {
            tupCounter.push([textChar, 1]);
        }
    }
    tupCounter.forEach(function (tup) { return count += (tup[1] === 1 ? 0 : 1); });
    return count;
};
var answer = duplicateCount2("scootersrateac");
console.log(answer);
