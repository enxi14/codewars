function neutralise(s1, s2) {
  let result = "";
  for (let i = 0; i < s1.length; i++) {
    const char1 = s1[i];
    const char2 = s2[i];

    if (char1 === '+' && char2 === '+') {
      result += '+';
    } else if (char1 === '-' && char2 === '-') {
      result += '-';
    } else {
      result += '0';
    }
  }

  return result;
}

// Test cases
console.log(neutralise("+-+", "+--")); // Output: "+-0"
console.log(neutralise("--++--", "++--++")); // Output: "000000"
console.log(neutralise("-+-+-+", "-+-+-+")); // Output: "-+-+-+"
console.log(neutralise("-++-", "-+-+")); // Output: "-+00"
