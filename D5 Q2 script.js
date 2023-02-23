//Q2 . Do the below programs in arrow functions.
// 1.Print odd numbers in an array
let oddNumbers = (arr) => {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] % 2 !== 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log(oddNumbers([1,2,3,4,5,6,7,8,9]));
  
  
  // 2. Convert all the strings to title caps in a string array
  let titleCaps = (arr) => {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
      let words = arr[i].toLowerCase().split(' ');
      for(let j = 0; j < words.length; j++) {
        words[j] = words[j][0].toUpperCase() + words[j].slice(1);
      }
      result.push(words.join(' '));
    }
    return result;
  }
  console.log(titleCaps(["hello world", "good morning", "happy birthday"]));
  
  
  // 3.Sum of all numbers in an array
  let sumArray = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  console.log(sumArray([1,2,3,4,5]));
  
  
  // 4.Return all the prime numbers in an array
  let isPrime = (num) => {
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) return false;
    }
    return true;
  }
  
  let primeNumbers = (arr) => {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
      if(isPrime(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log(primeNumbers([1,2,3,4,5,6,7,8,9]));
  
  
  // 5.Return all the palindromes in an array
  let isPalindrome = (str) => {
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  let palindromeArray = (arr) => {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
      if(isPalindrome(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log(palindromeArray(["racecar", "banana", "level", "hello", "madam"]));
  