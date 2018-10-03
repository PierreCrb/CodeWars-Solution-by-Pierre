function findShort(str){
  //return sort for a,b to can use it length in if condetion
  return str.split(' ').sort((a, b) => {
  	//define if a length lowest than b.length to get that -1 , 1
    return a.length < b.length ? -1 : 1;
  })[0].length;
}