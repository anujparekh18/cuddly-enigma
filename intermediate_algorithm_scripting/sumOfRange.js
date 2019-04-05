/*We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.

sumAll([1, 4]) should return a number.
Passed
sumAll([1, 4]) should return 10.
Passed
sumAll([4, 1]) should return 10.
Passed
sumAll([5, 10]) should return 45.
Passed
sumAll([10, 5]) should return 45.*/

function sumAll(arr) {
  const [a,b] = arr;
  let newArr = [];
  if (a<b){
  for (let i=a; i<=b; i++){
    newArr.push(i);
  }    
  }else if (a>b) {
  for (let i=b; i<=a; i++){
    newArr.push(i);
  }  
  }
  console.log(newArr);
  const sum = newArr.reduce((x, y) => x + y);
  return sum;
}

console.log(sumAll([10, 5]));