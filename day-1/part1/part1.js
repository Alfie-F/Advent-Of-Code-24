import fs from "fs";

const lines = fs
  .readFileSync("./input.txt", "utf-8")
  .trim("")
  .split(/\n|   /);

let A = [];
let B = [];
let C = 0;

function doTheThing(input) {
  for (let i = 0; i < input.length; i += 2) {
    A.push(Number(input[i]));
    B.push(Number(input[i + 1]));
  }
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    C += Math.abs(A[i] - B[i]);
  }
}

doTheThing(lines);
console.log(C);
