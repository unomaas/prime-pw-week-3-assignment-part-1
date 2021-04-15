console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- #1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let favoriteFoods = ["Penne Rosa", "Mashed Potatoes", "Ice Cream"];

// 1.b. TODO: Log your array of foods to the console with a message, similar to the example above
console.log("#1.b: Some of my favorite foods are:", favoriteFoods);

// 2. Array.length - tells you how many items are in the array
console.log('--- #2. Length of an array ---');

// Example: How many animals are in the array?
console.log('Example: Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log("#2.a: The number of favorite foods in my array are: ", favoriteFoods.length);

// 3. Accessing array items
console.log('--- #3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('Example: First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array
console.log("#3.a: The second animal in the array is ", animalArray[1]);

// 3.b. TODO: Log the last animal in the array using it's array index
console.log("#3.b: The last animal in the array is ", animalArray[3], ". Done via Array Index.");

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, instead of the exact index number of the last item
console.log("#3.c: The last animal in the array is ", animalArray[animalArray.length - 1], ".  Done via Array Length.");

// 4. Adding & Removing Array Items
console.log('--- #4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Example: Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
favoriteFoods.push("Donuts");
console.log("#4.a: Added a food to the end: ", favoriteFoods);

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Example: Removed the last animal', removedAnimal);
console.log('Example: The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & log both the food removed and the updated array
let removedFood = favoriteFoods.pop();
console.log("#4.b.1: Removed the last food: ", removedFood);
console.log("#4.b.2: My favorite foods are now: ", favoriteFoods)

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Example: Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
favoriteFoods.unshift("Fritos");
console.log("#4.c: Added a food to the beginning: ", favoriteFoods); // Ryan's Question: Is there a preferred method to using String Interpolation vs String Concatenation in regard to arrays?  The output to the console is different, looks like Interpolation returns a string while Concatenation will return the array.  Just curious on when you'd want one over the other.

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Example: Removed the first animal', removedAnimal);
console.log('Example: The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & log both the food removed and the updated array
removedFood = favoriteFoods.shift();
console.log("#4.d.1: Removed the first food: ", removedFood);
console.log("#4.d.2: My favorite foods are now: ", favoriteFoods);
