module.exports = function reverse (n) {
  let nString = String(Math.abs(n));
  let nArr = nString.split('');
  nArr.reverse();
  nString = "";
  for (let i = 0; i < nArr.length; i++) {
    nString += nArr[i];
  }
  return parseInt(nString);
}
