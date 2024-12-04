// each line is a report, each number in a report is a a level

// The levels are either all increasing or all decreasing.
// Any two adjacent levels differ by at least one and at most three.

import fs from "fs";

const reports = fs.readFileSync("./input.txt", "utf-8").trim("").split(/\n/);

function compareArr(a, b) {
  return a.toString() === b.toString();
}

function findDistance(test) {
  for (let i = 1; i < test.length; i++) {
    let diff = Math.abs(test[i] - test[i - 1]);
    if (diff > 3 || diff === 0) {
      return false;
    }
  }
  return true;
}

function utilThing(row) {
  let rows = [];
  for (let i = 0; i < row.length; i++) {
    let tempRow = [];
    let position = i;
    for (let i = 0; i < row.length; i++) {
      if (i != position) {
        tempRow.push(row[i]);
      }
    }
    rows.push(tempRow.join(" "));
  }
  return rows;
}

function doTheThingTwo(input) {
  let count = 0;
  input.forEach((report) => {
    let row = report.split(" ");
    let sortedAsc = row.toSorted((a, b) => a - b);
    let sortedDesc = row.toSorted((a, b) => b - a);
    if (findDistance(row) && compareArr(row, sortedAsc)) {
      count++;
    } else if (findDistance(row) && compareArr(row, sortedDesc)) {
      count++;
    } else {
      //this whole block can be refactored using recursive function, the above solves part one
      let count2 = 0;
      let newInput = utilThing(row);
      newInput.forEach((newReport) => {
        let newRow = newReport.split(" ");
        let newSortedAsc = newRow.toSorted((a, b) => a - b);
        let newSortedDesc = newRow.toSorted((a, b) => b - a);
        if (findDistance(newRow) && compareArr(newRow, newSortedAsc)) {
          count2++;
        } else if (findDistance(newRow) && compareArr(newRow, newSortedDesc)) {
          count2++;
        }
      });
      if (count2 !== 0) {
        count++;
      }
      //to here
    }
  });
  console.log(count);
}

doTheThingTwo(reports);

//kept getting stuck in recursion hell so this answer will have to do
