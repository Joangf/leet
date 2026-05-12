/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const num = x.toString().split('');
  if(num[0]== '-') {
    num.shift();
    const result = Number(num.reduce((a, b) => b + a, '')) * -1;
    if (result < -2147483647) return 0;
    else return result
  }
  const result = Number(num.reduce((a, b) => b + a, ''));
  if (result > 2147483647) return 0;
  else return result;
};