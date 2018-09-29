function radLadies(name){
  return name.split('').filter(x => /[a-z!\s]/i.test(x)).join('').toUpperCase();
}