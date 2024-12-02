import fs from "fs";

const lines = fs
  .readFileSync("./input.txt", "utf-8")
  .trim("")
  .split(/\n|   /);

let arr1 = [];
let arr2 = [];
const dict = {};
let sum = 0;

function doTheThing(input) {
  for (let i = 0; i < input.length; i += 2) {
    arr1.push(Number(input[i]));
    arr2.push(Number(input[i + 1]));
  }
  arr2.forEach((num) => {
    if (dict[num]) {
      dict[num] += 1;
    } else {
      dict[num] = 1;
    }
  });
  for (let i = 0; i < arr1.length; i++) {
    if (!dict[arr1[i]]) {
    } else {
      sum += arr1[i] * dict[arr1[i]];
    }
  }
  console.log(sum);
}

doTheThing(lines);
