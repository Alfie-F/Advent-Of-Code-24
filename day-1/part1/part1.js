import fs from "fs";

const lines = fs
  .readFileSync("./input.txt", "utf-8")
  .trim("")
  .split(/\n|   /);

let arr1 = [];
let arr2 = [];
let sum = 0;

function doTheThing(input) {
  for (let i = 0; i < input.length; i += 2) {
    arr1.push(Number(input[i]));
    arr2.push(Number(input[i + 1]));
  }
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  for (let i = 0; i < arr1.length; i++) {
    sum += Math.abs(arr1[i] - arr2[i]);
  }
  console.log(sum);
}

doTheThing(lines);
