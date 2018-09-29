function changeMe(moneyIn){
  var key = {'£5': 25, '£2': 10, '£1': 5};
  return moneyIn == '20p' ? '10p 10p' : moneyIn == '50p' ? '20p 20p 10p' : key[moneyIn] ? ('20p ').repeat(key[moneyIn]).slice(0,-1) : moneyIn;
}