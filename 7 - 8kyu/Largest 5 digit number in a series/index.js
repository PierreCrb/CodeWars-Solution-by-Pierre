function solution(digits){
  if (digits.length <= 5) return Number(digits);
  return Math.max(Number(digits.substr(0, 5)), solution(digits.substr(1)));
}