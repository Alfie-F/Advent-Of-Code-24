import fs from "fs";

const source = fs.readFileSync("./input.txt", "utf-8");

let count;
let sum = 0;
let bool = true;

function doTheThingThree(input) {
  count =
    input.match(new RegExp(/mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/, "g")) ||
    [];
  count.forEach((element) => {
    if (element === "do()") {
      bool = true;
    } else if (element === "don't()") {
      bool = false;
    } else if (bool === true) {
      let actOn = element.replace(/[a-z()]/g, "").split(",");
      sum += actOn[0] * actOn[1];
    }
  });
  console.log(sum);
}

doTheThingThree(source);
