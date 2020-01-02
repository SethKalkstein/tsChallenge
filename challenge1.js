//is the first argument divisible by the second and third?
var isDivisible = function (n, x, y) { return n % x === 0 && n % y == 0 ? true : false; };
//count the characters that are duplicated
var duplicateCount = function (text) { return text.toLowerCase().split("").sort().reduce(function (acc, cur, ind, arr) { return acc += (cur == arr[ind + 1] && cur != arr[ind - 1]) ? 1 : 0; }, 0); };
