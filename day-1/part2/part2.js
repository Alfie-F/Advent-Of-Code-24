import fs from "fs";

const lines = fs
  .readFileSync("./input.txt", "utf-8")
  .trim("")
  .split(/\n|   /);

let A = [];
let B = [];
const C = {};
let D = 0;

function doTheThing(input) {
  for (let i = 0; i < input.length; i += 2) {
    A.push(Number(input[i]));
    B.push(Number(input[i + 1]));
  }
  B.forEach((num) => {
    if (C[num]) {
      C[num] += 1;
    } else {
      C[num] = 1;
    }
  });
  for (let i = 0; i < A.length; i++) {
    if (!C[A[i]]) {
    } else {
      D += A[i] * C[A[i]];
    }
  }
}

doTheThing(lines);
console.log(D);
