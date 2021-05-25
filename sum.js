const args = process.argv.slice(2);
let sum = function(x, y) {
  return Number(x) + Number(y);
};

console.log(sum(args[0], args[1]));