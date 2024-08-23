
const character = "!";
const count = 10;
const rows = [];
let inverted = false; // Set to true for inverted pattern, false for normal

// Initialize total number of characters used
let total = 0;

function padRow(rowNumber, rowCount) {
  const rowString = " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
  total += rowString.length; // Update total characters used
  return rowString;
}

// Populate rows based on the inverted flag
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

// Combine rows into a single result string
let result = "";

for (const row of rows) {
  result += "\n" + row;
}

// Output results
console.log(result.trim()); 
// .trim() to remove the leading newline
console.log(rows.length);  
 // Number of rows
console.log(total);       
 // Total number of characters used


