var key = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
          L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};

RomanNumerals = {
  toRoman: function (num) {
    var roman = '';
    for (var entry in key) {
      while (num >= key[entry]) {
        roman += entry;
        num -= key[entry];
      }
    }
    return roman;
  },
  fromRoman: function (roman) {
    var arabic = 0;
    while (roman.length > 0) {
      for (var entry in key) {
        if (roman.substring(0,2) == entry) {
          arabic += key[entry];
          roman = roman.substr(2);
        } else if (roman.substring(0,1) == entry) {
          arabic += key[entry];
          roman = roman.substr(1);
        }
      }
    }
    return arabic;
  }
};