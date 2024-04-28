// // Q no 1
//  // Declare and initialize an empty multi-dimensional array
//  const multiDimensionalArray = [];

//  // Add empty arrays to create the structure
//  multiDimensionalArray.push([]);
//  multiDimensionalArray.push([]);
//  multiDimensionalArray.push([]);
 
//  // Alternatively, you can declare and initialize it in one step:
//  const multiDimensionalArray2 = [[], [], []];
 
//  // Example: Adding elements to the multi-dimensional array
//  multiDimensionalArray[0].push(1);
//  multiDimensionalArray[0].push(2);
//  multiDimensionalArray[1].push(3);
//  multiDimensionalArray[1].push(4);
 
//  // Print the multi-dimensional array
//  console.log(multiDimensionalArray);  
// //  Q no 2
// // Declare and initialize the multidimensional array
// const matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// // Print the matrix
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         process.stdout.write(matrix[i][j] + " ");
//     }
//     console.log();
// }
// // q no3
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   } 
// // q no4
//  // Function to print multiplication table
//  function printMultiplicationTable(tableNumber, tableLength) {
//     for (let i = 1; i <= tableLength; i++) {
//       console.log(`${tableNumber} * ${i} = ${tableNumber * i}`);
//     }
//   }
  
//   // Prompt the user for the number and length of the table
//   const userInputNumber = prompt("Enter the number for the multiplication table:");
//   const userInputLength = prompt("Enter the length of the multiplication table:");
  
//   // Convert user input to numbers
//   const tableNumber = parseInt(userInputNumber);
//   const tableLength = parseInt(userInputLength);
  
//   // Check if the user provided valid input
//   if (!isNaN(tableNumber) && !isNaN(tableLength)) {
//     // Confirm with the user before printing the table
//     const confirmation = confirm(`You entered: ${tableNumber} for the number and ${tableLength} for the length. Press OK to show the table, or Cancel to abort.`);
  
//     // If the user confirms, print the table
//     if (confirmation) {
//       console.log(`Multiplication table for ${tableNumber} up to ${tableLength}:`);
//       printMultiplicationTable(tableNumber, tableLength);
//     } else {
//       console.log("Operation aborted.");
//     }
//   } else {
//     console.log("Invalid input. Please enter valid numbers.");
//   }
// //   //q5
// // Define the array of fruits
// const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// // Create input elements for each item with their sequence displayed
// for (let i = 0; i < fruits.length; i++) {
//   const inputElement = document.createElement("input");
//   inputElement.type = "text";
//   inputElement.value = fruits[i];
//   document.body.appendChild(inputElement);
  
//   const label = document.createElement("label");
//   label.textContent = `Element at index ${i} is ${fruits[i]}`;
//   document.body.appendChild(label);
  
//   document.body.appendChild(document.createElement("br"));
// }
// q6


  
    // // A counting 1 till 15
    // let seriesA = '';
    // for (let i = 1; i <= 15; i++) {
    //   seriesA += i + ', ';
    // }
    // document.getElementById('seriesA').innerText = seriesA;

    // // B reverse counting 10 till 1
    // let seriesB = '';
    // for (let i = 10; i >= 1; i--) {
    //   seriesB += i + ', ';
    // }
    // document.getElementById('seriesB').innerText = seriesB;

    // // C even, 0 till 20
    // let seriesC = '';
    // for (let i = 0; i <= 20; i += 2) {
    //   seriesC += i + ', ';
    // }
    // document.getElementById('seriesC').innerText = seriesC;

    // // D odd, 1 till 19
    // let seriesD = '';
    // for (let i = 1; i <= 19; i += 2) {
    //   seriesD += i + ', ';
    // }
    // document.getElementById('seriesD').innerText = seriesD;

    // // E series 2K, 4K, 6K, 8K, 10K, 12K, 14K, 16K, 18K, 20K
    // let seriesE = '';
    // for (let i = 2; i <= 20; i += 2) {
    //   seriesE += i + 'K, ';
    // }
    // document.getElementById('seriesE').innerText = seriesE;
// //   q7
// // Array of items in the bakery
// const bakeryItems = ["cake", "apple pie", "cookie", "chips", "cookies"];

// // Function to search for an item in the array
// function searchItem(item) {
//   const index = bakeryItems.indexOf(item);
//   if (index !== -1) {
//     return `It has ${item} available at index ${index} in our bakery.`;
//   } else {
//     return `We are sorry. ${item} is not available in our bakery.`;
//   }
// }

// // Function to prompt the user and perform the search
// function order() {
//   const userInput = prompt("Welcome to ABC Bakery. What do you want to order, sir or ma'am?");
//   if (userInput) {
//     const result = searchItem(userInput);
//     alert(result);
//   } else {
//     alert("Invalid input.");
//   }
// }

// // Call the order function to start the process
// order();
// // q8
// // Array of numbers
// const numbers = [24, 53, 78, 91, 12];

// // Function to find the largest number in the array
// function findLargestNumber(arr) {
//   let largestNumber = arr[0]; // Assume the first number is the largest
  
//   // Iterate through the array
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largestNumber) {
//       largestNumber = arr[i]; // Update the largest number if a larger number is found
//     }
//   }
  
//   return largestNumber;
// }

// // Call the function and store the result
// const largestNumber = findLargestNumber(numbers);

// // Display the result
// console.log("The largest number in the array is:", largestNumber);
// // q9
// // Array of numbers
// const numbers = [24, 53, 78, 91, 12];

// // Function to find the smallest number in the array
// function findSmallestNumber(arr) {
//   let smallestNumber = arr[0]; // Assume the first number is the smallest
  
//   // Iterate through the array
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallestNumber) {
//       smallestNumber = arr[i]; // Update the smallest number if a smaller number is found
//     }
//   }
  
//   return smallestNumber;
// }

// // Call the function and store the result
// const smallestNumber = findSmallestNumber(numbers);

// // Display the result
// console.log("The smallest number in the array is:", smallestNumber);
// // Function to print multiples of 5 ranging from 1 to 100
// q10
// function printMultiplesOf5() {
//     for (let i = 1; i <= 100; i++) {
//       if (i % 5 === 0) {
//         console.log(i);
//       }
//     }
//   }
  
//   // Call the function to print multiples of 5
//   printMultiplesOf5();
//            ##String##
// q1
// q2
// // Prompting the user for their favorite mobile
// var favoriteMobile = prompt("What is your favorite mobile?");

// // Finding the length of the user input
// var lengthOfInput = favoriteMobile.length;

// // Displaying the length of the user input
// alert("The length of your favorite mobile in my mobile is: " + lengthOfInput);
// // q3
// // Finding the index of 'N' in the word "Pakistani"
// var word = "Pakistani";
// var indexOfn = word.indexOf("n");

// // Displaying the result in the browser
// document.write("The index of 'N' in the word 'Pakistani' is: " + indexOfn);
// // q4
// // Finding the last index of 'L' in the word "HelloWorld"
// var word = "HelloWorld";
// var lastIndexOfL = word.lastIndexOf("L");

// // Displaying the result in the browser
// document.write("The last index of 'L' in the word 'HelloWorld' is: " + lastIndexOfL);
// // q5
// // Finding the character at the 3rd index in the word "Pakistani"
// var word = "Pakistani";
// var characterAtThirdIndex = word.charAt(3);

// // Displaying the result in the browser
// document.write("The character at the 3rd index in the word 'Pakistani' is: " + characterAtThirdIndex);
// q6
// Prompting the user for first and last names
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// // Combining first and last names into FullName
// var FullName = firstName + " " + lastName;

// // Displaying the user's full name
// alert("Your full name is: " + FullName);
// q7
// Define the original string
// var originalString = "Hyderabad";

// // Replace "Hyder" with "Islam"
// var replacedString = originalString.replace("Hyder", "Islam");

// // Display the result in the browser console
// console.log(replacedString);
// q8
// // Define the original string
// var originalString = "Sand and wind and sea and land";

// // Replace all occurrences of "and" with "&"
// var replacedString = originalString.replaceAll("and", "&");

// // Display the result in the browser console
// console.log(replacedString);
// q9
// function convertStringToNumber() {
//     var str = "472";
//     var num = parseInt(str); // Convert string to number

//     // Display value and type in the browser
//     document.getElementById("result").innerHTML = "Value: " + num + "<br>Type: " + typeof(num);
// }
// q10
// function convertToUpperCase() {
//     // Get user input
//     var userInput = document.getElementById("userInput").value;
    
//     // Convert input to capital letters
//     var capitalizedInput = userInput.toUpperCase();
    
//     // Display the converted input
//     document.getElementById("result").innerHTML = capitalizedInput;
// }
// q11
// function convertToTitleCase() {
//     // Get user input
//     var userInput = document.getElementById("userInput").value;
    
//     // Convert input to title case
//     var titleCaseInput = toTitleCase(userInput);
    
//     // Display the converted input
//     document.getElementById("result").innerHTML = titleCaseInput;
// }

// // Function to convert string to title case
// function toTitleCase(str) {
//     return str.toLowerCase().split(' ').map(function(word) {
//         return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');
// q16
// function convertStringToArray() {
//     // Define the string
//     var university = "University of Karachi";

//     // Split the string into an array
//     var universityArray = university.split(" ");

//     // Display the elements of the array in the browser
//     document.getElementById("result").innerHTML = universityArray.join("<br>");
// }
// q17
// function displayLastCharacter() {
//     // Get user input
//     var userInput = document.getElementById("userInput").value;
    
//     // Get the last character of the input
//     var lastCharacter = userInput.charAt(userInput.length - 1);
    
//     // Display the last character
//     document.getElementById("result").innerHTML = "Last character: " + lastCharacter;
// }
// q18
// function countOccurrences() {
//     // Define the string
//     var sentence = "The quick brown fox jumps over the lazy dog";
    
//     // Convert the string to lowercase to make the search case-insensitive
//     var lowercaseSentence = sentence.toLowerCase();
    
//     // Split the string into an array of words
//     var words = lowercaseSentence.split(" ");
    
//     // Initialize a variable to count the occurrences
//     var count = 0;
    
//     // Loop through each word in the array
//     for (var i = 0; i < words.length; i++) {
//         // If the word is "the", increment the count
//         if (words[i] === "the") {
//             count++;
//         }
//     }
    
//     // Display the count of occurrences
//     document.getElementById("result").innerHTML = "Number of occurrences of 'the': " + count;
// }

//    ## function ##
// function displayCurrentDateTime() {
//     // Create a new Date object to get the current date and time
//     var currentDate = new Date();
    
//     // Get the components of the date and time
//     var day = currentDate.getDate();
//     var month = currentDate.getMonth() + 1; // Months are zero-based
//     var year = currentDate.getFullYear();
//     var hours = currentDate.getHours();
//     var minutes = currentDate.getMinutes();
//     var seconds = currentDate.getSeconds();
    
//     // Format the date and time components
//     var formattedDate = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year;
//     var formattedTime = (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    
//     // Display the current date and time in the browser
//     document.getElementById("result").innerHTML = "Current Date & Time: " + formattedDate + " " + formattedTime;
// }
// q2
// function greetUser() {
//     // Get user's first and last name from input fields
//     var firstName = document.getElementById("firstName").value;
//     var lastName = document.getElementById("lastName").value;
    
//     // Concatenate first and last name to form full name
//     var fullName = firstName + " " + lastName;
    
//     // Display greeting message using full name
//     document.getElementById("greeting").innerHTML = "Hello, " + fullName + "!";
// }
// q3
// function addNumbers() {
//     // Get user input for the two numbers
//     var num1 = parseFloat(document.getElementById("num1").value);
//     var num2 = parseFloat(document.getElementById("num2").value);
    
//     // Add the two numbers
//     var sum = num1 + num2;
    
//     // Display the sum
//     document.getElementById("result").innerHTML = "Sum: " + sum;
// }
// q4
// function computeOperation(num1, num2, operator) {
//     var result;

//     // Perform the operation based on the operator
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//         default:
//             result = "Invalid operator";
//     }

//     // Display the result
//     document.getElementById("result").innerHTML = "Result: " + result;
// }q5
// // Define the function to square its argument
// function square(number) {
//     return number * number;
// }

// // Example usage:
// var num = 5;
// var result = square(num);
// console.log("The square of " + num + " is " + result);
// q6
// Define the function to compute factorial
// function factorial(number) {
//     // Base case: if number is 0 or 1, return 1
//     if (number === 0 || number === 1) {
//         return 1;
//     }
//     // Recursive case: compute factorial recursively
//     return number * factorial(number - 1);
// }

// // Example usage:
// var num = 5;
// var result = factorial(num);
// console.log("The factorial of " + num + " is " + result);
// }
// q8
// function calculateHypotenuse(base, perpendicular) {
//     // Define a nested function to square a number
//     function square(number) {
//         return number * number;
//     }

//     // Calculate the squares of the base and perpendicular
//     var baseSquared = square(base);
//     var perpendicularSquared = square(perpendicular);

//     // Calculate the hypotenuse using the Pythagorean theorem
//     var hypotenuseSquared = baseSquared + perpendicularSquared;
//     var hypotenuse = Math.sqrt(hypotenuseSquared);

//     // Return the hypotenuse
//     return hypotenuse;
// }
// q12
// function findLongestWord(sentence) {
//     // Split the sentence into an array of words
//     var words = sentence.split(" ");

//     // Initialize variables to store the longest word and its length
//     var longestWord = "";
//     var maxLength = 0;

//     // Iterate through each word in the array
//     for (var i = 0; i < words.length; i++) {
//         // Remove any non-alphanumeric characters from the word
//         var word = words[i].replace(/[^a-zA-Z0-9]/g, '');

//         // Check if the current word is longer than the longest word found so far
//         if (word.length > maxLength) {
//             longestWord = word;
//             maxLength = word.length;
//         }
//     }

//     // Return the longest word
//     return longestWord;
// }

// // Example usage:
// var sentence = "The quick brown fox jumps over the lazy dog";
// var longestWord = findLongestWord(sentence);
// console.log("The longest word in the sentence is: " + longestWord);




