// question : other than using the traditional for loop to find the target use the js array methods to find the same

// 1) Using the findIndex method
function targetFinder1(arr,target){
    let index = arr.findIndex(x => x === target);
   if(index !== -1){
    return index;
   }
   return index;
}
let arr = [1,2,3,4,5,6,7];
let target = 5;
console.log(targetFinder1(arr,target))

// -----------------------------------------------------------------------------------------------------------------------------

// question : filter out the even numbers from an array :

function filterEven(arr){
    return arr.filter(x => x%2 === 0)
}
let arr1 = [1,2,3,4,5,6,7,8,9]
console.log(filterEven(arr1))

// ---------------------------------------------------------------------------------------------------------------------------------
// question : given an array, check for any value greater than a given number if yes return true, else return false;

function checkExistence(arr,value){
    return arr.some(x => x > value)
}
let arr2 = [1,2,3,4,5,6,7,8];
let target1 = 3;
console.log(checkExistence(arr2,target1))

// Thus some is used to check for true or false;
// -----------------------------------------------------------------------------------------------------------------------------

// question : Check if any one duplicate element found in an array and return it

function oneDuplicate(arr){
    let seen = new Set();
   
    for(let x of arr3){
        if(seen.has(x)){
           
            return x
        }
        seen.add(x)
    }
    // console.log('seen :',seen)
    return null;
}
let arr3 = [1,2,3,4,3,2];
console.log(oneDuplicate(arr))

// -----------------------------------------------------------------------------------------------------------------------------------

// question : Binary search

function BinarySearch(arr,target){
    let left = 0;let right = arr.length-1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] >target){
            right = mid-1;
        }
        else{
            left = mid+1
        }
    }
    return -1;
}
let arr4 = [1,2,3,4,5,6,7,8]
let target2 = 7;
console.log(BinarySearch(arr4,target2));


// ------------------------------------------------------------------------------------------------------------------------------------------

// question : find the first even and odd number of the array ;

function findFirstEven(arr){
    for(let x of arr){
        if(x % 2 == 0){
            return x;
        }
    }
    return -1;
}
console.log(findFirstEven(arr))

function findFirstOdd(arr){
    for(let x of arr){
        if(x % 2 !== 0){
            return x;
        }
    }
    return -1;
}
console.log(findFirstOdd(arr))

// -------------------------------------------------------------------------------------------------------------------------------------

// question : an array will be given and it might has duplicates, so find all the indexes where the duplicates occur;

function findIndexofDuplicates(arr,target){
    let indices = [];
    for(let i = 0;i<arr.length;i++){
        if(arr[i] === target){
            indices.push(i)
        }
    }
    if(indices.length){
        return indices;
    }else return -1
}
let arr5  = [1,2,3,2,4,2,5,2]
let target3 = 2;
console.log(findIndexofDuplicates(arr5,target3))

// ---------------------------------------------------------------------------------------------------------------------------------------------

// question : find the maximum and minimum element in the array 

function findMax(arr){
    let max = arr[0];
    for(let i = 1;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
let arr6 = [4,3,2,1]
console.log(findMax(arr6))

// --------------------------------------------------------------------------------------------------------------------------------------------