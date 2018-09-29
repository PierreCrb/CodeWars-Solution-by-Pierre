function iqTest(numbers){
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});

  var odd = numbers.filter(function(el){ return el % 2 === 1});
  var even = numbers.filter(function(el){ return el % 2 === 0});

  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}