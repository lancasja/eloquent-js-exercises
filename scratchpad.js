// scratch
var power = function (base, exponent) {
  var result = 1;
  for (var i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
console.log(power(2, 10));
