/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.

[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].*/

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  let a = arr1.concat(arr2);
  let arr= a.slice().sort();
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] == arr[i]) {
        newArr.push(arr[i]);
    }
  }
  let array = arr.filter(f => !newArr.includes(f));
  console.log(array);
  console.log(newArr);
  console.log(arr);
  return array;
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);