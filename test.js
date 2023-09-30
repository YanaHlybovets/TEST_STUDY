// // mutable and unmutable array methods:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const students = [
    { name: `John`, age: 20, gpa: 3.8 },
    { name: `Alice`, age: 21, gpa: 3.2 },
    { name: `Bob`, age: 19, gpa: 3.5 },
    { name: `Emily`, age: 22, gpa: 3.9 },
    { name: `David`, age: 20, gpa: 3.7 }
];

function getAdult(array) {
    return array.filter(({ age }) => age > 20);
}

console.log(getAdult(students));

let friends = [
    { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
    { id: 2, name: "Sara", age: 18, budget: 3500, isComplete: false },
    { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
    { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
    { id: 4, name: "Sara", age: 25, budget: 2000, isComplete: false },
];

function getFriend(array, name) {
    const friend = array.find((friend) => friend.name === name);
    return friend || "not found"
}

// console.log(getFriend(friends, "Vova"));