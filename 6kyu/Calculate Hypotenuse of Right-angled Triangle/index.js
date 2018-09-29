function calculateHypotenuse(a, b) {
  if (a === true || b === true) {
    throw "error";
  }
  else if (a > 0 && b > 0) {
    return Math.round(Math.sqrt(a * a + b * b) * 1000) / 1000;
  } else {
    throw "error";
  }
}