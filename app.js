let fruits = ["apple", "banana", "grapes"];

for (let i = 0; i < fruits.length; i++) {
  const element = fruits[i];
  console.log(`I like ${element}`);
}

let favFruit = fruits.forEach((fruit) => {
  console.log(`My favorite fruit is ${fruit}`);
});
