//1.Print odd numbers in an array
// Anonymous function
let oddnumbers=function(arr){
    let odd=[];
    for (let i=0;i<arr.length; i++){
      if(arr[i]%2 !==0){
        odd.push(arr[i]);
        }
      }
      return odd;
    };
    console.log(oddnumbers([1,2,3,4,5,6,7,8,9]));
  
  // IIFE
  (function(arr) {
    for(let i = 0; i < arr.length; i++) {
        let odd=[];
      if(arr[i] % 2 !== 0) {
        odd.push(arr[i]);
      }
      return odd;
    }
  })([1,2,3,4,5]);

  
  //2.Convert all the strings to title caps in a string array
  // Anonymous function
let titleCaps = function(arr) {
    for(let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase();
    }
    return arr;
  }
  console.log(titleCaps(["this", "is", "a", "test"]));
  
  // IIFE
  let titleCaps1 = (function(arr) {
    for(let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase();
    }
    return arr;
  })(["this", "is", "a", "test"]);
  console.log(titleCaps1);

  //3.Sum of all numbers in an array
  // Anonymous function
let sum = function(arr) {
    let result = 0;
    for(let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  }
  console.log(sum([1,2,3,4,5]));
  
  // IIFE
  let sum1 = (function(arr) {
    let result = 0;
    for(let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  })([1,2,3,4,5]);
  console.log(sum1);

  
  //4.Return all the prime numbers in an array
  // Anonymous function
let isPrime = function(num) {
    if(num <= 1) {
      return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  let primeNumbers = function(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
      if(isPrime(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log(primeNumbers([1,2,3,4,5,6]));
  
  // IIFE
  let primeNumbers1 = (function(arr) {
    let isPrime = function(num) {
      if(num <= 1) {
        return false;
      }
      for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
          return false;
        }
      }
      return true;
    }
  
    let result = [];
    for(let i = 0; i < arr.length; i++) {
      if(isPrime(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  })([1,2,3,4,5,6]);
  console.log(primeNumbers1);

  
  //5.Return all the palindromes in an array
  // Anonymous function
let isPalindrome = function(str) {
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  let palindromeArray = function(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
      if(isPalindrome(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log(palindromeArray(["racecar", "banana", "level", "hello", "madam"]));
  
  // IIFE
  let palindromeArray1 = (function(arr) {
    let isPalindrome = function(str) {
      let len = str.length;
      for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
          return false;
        }
      }
      return true;
    }
  
    let result = [];
    for(let i = 0; i < arr.length; i++) {
      if(isPalindrome(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  })(["racecar", "banana", "level", "hello", "madam"]);
  console.log(palindromeArray1);


  //6. Return median of two sorted arrays of the same size
  // Anonymous function
let median = function(arr1, arr2) {
    let arr = arr1.concat(arr2).sort(function(a, b){return a-b});
    let mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
      return (arr[mid - 1] + arr[mid]) / 2;
    } else {
      return arr[mid];
    }
  }
  console.log(median([1,2,3], [4,5,6]));
  
  // IIFE
  let median1 = (function(arr1, arr2) {
    let arr = arr1.concat(arr2).sort(function(a, b){return a-b});
    let mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
      return (arr[mid - 1] + arr[mid]) / 2;
    } else {
      return arr[mid];
    }
  })([1,2,3], [4,5,6]);
  console.log(median1);
  
  
  //7. Remove duplicates from an array
  // Anonymous function
  let removeDuplicates = function(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
      if(result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log(removeDuplicates([1,2,3,3,4,5,5]));
  
  // IIFE
  let removeDuplicates1 = (function(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
      if(result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }
    return result;
  })([1,2,3,3,4,5,5]);
  console.log(removeDuplicates1);
  
  
  //8. Rotate an array by k times
  // Anonymous function
  let rotateArray = function(arr, k) {
    for(let i = 0; i < k; i++) {
      arr.unshift(arr.pop());
    }
    return arr;
  }
  console.log(rotateArray([1,2,3,4,5], 3));
  
  // IIFE
  let rotateArray1 = (function(arr, k) {
    for(let i = 0; i < k; i++) {
      arr.unshift(arr.pop());
    }
    return arr;
  })([1,2,3,4,5], 3);
  console.log(rotateArray1);
  
