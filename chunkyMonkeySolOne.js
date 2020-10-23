/* 
Basic Algorithm Scripting: Chunky MonkeyPassed
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

//Solution One
function chunkArrayInGroups(arr, size) {                  //1
  var temp = [];                                          //2
  var result = [];                                        //3

  for (var a = 0; a < arr.length; a++) {                  //4
    console.log(result);
    if (a % size !== size - 1) temp.push(arr[a]);         //5  //size-1 = 2
    else {                                                //6
      temp.push(arr[a]);                                  //7
      result.push(temp);                                  //8
      temp = [];                                          //9
    }
  }

  if (temp.length !== 0) result.push(temp);               //10
  return result;                                          //11
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 3));
                            //   0,   1,   2,   3,   4,   5,   6,   7,   8
                    //myResult   0,   1,   2,   0,   1,   2,   0,   1,   2

//Notes
/*
chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].

//1
Function which takes in two arguments:
  Arg1: an array
  Arg2: The size/length of target sub arrays (Chunks)

//2//3
Two variables initialized as empty arrays

//4
For loop with three parameters 
[initialization];   = var a = 0;
[condition];        = a < arr.length;
[final-expression]  = a++

//5
The push() method adds one or more elements to the end of an array and returns the new length of the array.
[https://devdocs.io/javascript/global_objects/array/push]

This line of code will check if the current iteration index has a remainder when divided by the size (modulus operator ( % )). If the remainder does not equal the size - 1 (i.e 2 in this scenario) then the value of that particular index will be pushed into the temp array. 


((a % size !== size - 1=====>(2))) - pushes anything to temp that does not solve to 2 (i.e only 0's and 1's)

temp state when looping line 5
______________
[]            |
[ 'a' ]       |
[ 'a', 'b' ]  |
[]            |
[ 'd' ]       |
[ 'd', 'e' ]  |
[]            |
[ 'g' ]       |
[ 'g', 'h' ]  |


//6,//7,//8,//9
This else condition will apply should the if condition in //5 fails or is false. In other words, should the modulus calculation solve the current index to 2 (i.e no remainder in this scenario) then line //7 will also push the value of that index to the temp array. 

line //8 will then take the current three values in temp([ 'a', 'b', 'c' ]) and push those values into the result array

line //9 will then clear the temp array of it's current contents and create a "chunk" of the original array in the result array. The loop will then continue and keep trying to fill the temp array up with another 3 values or values equal to the size input given in the arguments and then push them to the results array until the entire input array has been iterated over.

result array state changes
[ [ 'a', 'b', 'c' ] ]
[ [ 'a', 'b', 'c' ] ]
[ [ 'a', 'b', 'c' ] ]                                                chunk 1
[ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]                             
[ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
[ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]                              chunk 1, 2
[ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'g', 'h', 'i' ] ]           chunk 1, 2, 3
[ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'g', 'h', 'i' ], [ 'j' ] ]  chunk 1, 2, 3 & remainder

//10
This line will check to see if the length of the temp array is not equal to zero. In other words, it will check if the array is not empty. If there are still some remaining elements in the temp array this is also pushed into the result array regardless if the "chunk" does not meet the input size for a sub array or a "chunk".

//11
This line will return the result of all chunked arrays.
[ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'g', 'h', 'i' ], [ 'j' ] ]  chunk 1, 2, 3 & remainder
*/