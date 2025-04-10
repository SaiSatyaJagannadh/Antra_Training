// 1. Sum All Salaries
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log("1. Total Salaries Sum:", sum); // Output: 390

// 2. Multiply All Numeric Properties
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}
multiplyNumeric(menu);
console.log("2. Menu after multiplying numerics:", menu);

// 3. Check Valid Email ID
function checkEmailId(str) {
  str = str.toLowerCase();
  let atIndex = str.indexOf('@');
  let dotIndex = str.indexOf('.', atIndex + 1);
  return atIndex > 0 && dotIndex > atIndex + 1;
}
console.log("3. Is 'test@example.com' valid?", checkEmailId("test@example.com")); // true
console.log("   Is 'test.example@com' valid?", checkEmailId("test.example@com")); // false

// 4. Truncate String
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  }
  return str;
}
console.log("4. Truncated:", truncate("What I'd like to tell on this topic is:", 20)); 
console.log("   Truncated:", truncate("Hi everyone!", 20));

// 5. Array Operations
let styles = ["James", "Brennie"];
console.log("5. Initial array:", styles);

styles.push("Robert");
console.log("   After appending Robert:", styles);

let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Calvin";
console.log("   After replacing middle with Calvin:", styles);

let removed = styles.shift();
console.log("   After removing first element:", styles, "| Removed:", removed);

styles.unshift("Rose", "Regal");
console.log("   After prepending Rose and Regal:", styles);
