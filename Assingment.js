'Use Strict'
/*

//Assingment1
//Function basics
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`
}
console.log(describeCountry('Bangladesh', 200, 'Dhaka'));
console.log(describeCountry('Pakistan', 240, 'Islamabad'));
console.log(describeCountry('India', 1000, 'Delhi'));;

//Assingment2
//Function expression
const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100
}
const bangladesh1 = percentageOfWorld1(200);
const india1 = percentageOfWorld1(1200)
const USA1 = percentageOfWorld1(360)
console.log(bangladesh1, india1, USA1);
//Function declaration
//can call function before creating it
const bangladesh2 = percentageOfWorld2(200);
const india2 = percentageOfWorld2(1200)
const USA2 = percentageOfWorld2(360)
function percentageOfWorld2(population) {
  return (population / 7900) * 100
}
console.log(bangladesh2, india2, USA2)
//Assingment3
//Arrow Functions
const percentageOfWorld3 = population => (population / 7900) * 100//Use for one line operations as this one
const bangladesh3 = percentageOfWorld3(200);
const india3 = percentageOfWorld3(1200)
const USA3 = percentageOfWorld3(360)
console.log(bangladesh3, india3, USA3)
//Assingment4
//FunctionsCallingFunctions
const describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(200)} of the world`
}
console.log(describePopulation("bangladesh", 200))
//Assingment5
//IntroductionToArrays
//Lists in python =>>> Array in JavaScript
const populations = new Array(200, 1200, 370, 1440)//Method 1 of creating an array in JS
console.log(populations.length === 4);
const percentages = [bangladesh1, india1, USA1, percentageOfWorld1(populations[populations.length - 1])]//Method 2(OG method) of creating arrays
console.log(percentages)

//Assingment5
//BasicArrayOperations
const neighbours = new Array("India", "Myanmar", "Sri-Lanka");
neighbours.push("Utopia");//Add to end
console.log(neighbours)
neighbours.pop();//Remove from end
console.log(neighbours)
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D.")
}
neighbours[neighbours.indexOf("India")] = 'Republic of India';//array[index]=replaceValue
console.log(neighbours)

//Assingment6
//IntroductionToArrays
//Dictionaries in Python =>>> Objects  in JavaScript

const myCountry = {
  country: 'Bangladesh',
  captital: 'Dhaka',
  language: 'Bengali',
  population: 200,
  neighbours: neighbours
}
console.log(myCountry)
//Assingment6
//Dot&BracketNotation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.captital}.`)
myCountry.population = myCountry.population + 2;//or use myCountry.population +=2
console.log(myCountry.population)
// console.log(myCountry['population' - 2]) This doesn't work because inside myCountry[x],x should be a key or expression of a key. It find the value from the key in the object.It doesn't modfy it.
myCountry["population"] -= 2;
console.log(myCountry.population);


//Assingment7
//ObjectMethods
const neighbours = new Array("India", "Myanmar", "Sri-Lanka");
const myCountry = {
  country: 'Bangladesh',
  captital: 'Dhaka',
  language: 'Bengali',
  population: 200,
  neighbours: neighbours,
  describe: function () {
    return console.log(`${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.captital}.`)

  },
  checkIsIsland: function () {
    // this.isIsland = this.neighbours.length === 0 ? true : false
    this.isIsland = !Boolean(this.neighbours.length)
  }
}
console.log(myCountry);
myCountry.describe();
myCountry.checkIsIsland();
console.log(myCountry);

//Assingnment8
//ForLoop
for (let voterNo = 1; voterNo <= 50; voterNo++) {
  console.log(`Voter number ${voterNo} is currently voting.`)
}

//Assingment9
//LoopingArrays+Break&Continue
const populations = new Array(200, 1200, 370, 1440)
const percentages = []

const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100
}

for (let i = 0; i < populations.length; i++) {
  // percentages.push(populations[i] / 79)
  percentages.push(percentageOfWorld1(populations[i]))//I had issues figuring this out.To make it simple, create the function outside the loop.Then call the function inisde it.
}
console.log(percentages)

//Assingment10
//loopsInLoops
//Failed to do this one :(
const listOfneighbours = [[`Canada`, `Mexico`], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let i = 0; i < listOfneighbours.length; i++) {
  for (let j = 0; j < listOfneighbours[i].length; j++)
    console.log(`Neighbour: ${listOfneighbours[i][j]}`)
}
*/
