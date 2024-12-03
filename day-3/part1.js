import fs from "fs";

const source = fs.readFileSync("./input.txt", "utf-8");

let count;
let sum = 0;

function doTheThingThree(input) {
  count = input.match(new RegExp(/mul\(\d{1,3},\d{1,3}\)/, "g")) || [];
  count.forEach((element) => {
    let actOn = element.replace(/[a-z()]/g, "").split(",");
    sum += actOn[0] * actOn[1];
  });
  console.log(sum);
}

doTheThingThree(source);
