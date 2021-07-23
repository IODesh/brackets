module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 > 0) {
    return false;
  }
  let count = 0;
  for(let i = 0; i < str.length / 2; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      str = str.replace(bracketsConfig[j].join(''), '');
    }
    count++;
  }
  if(str.length > 0) return false
  else return true
}
