const args = process.argv.slice(2);

const pigLatin = function(input) {
  let finalStr = '';
  for (let i = 0; i < input.length; i++) {
    let midStr = input[i];
    midStr += midStr[0];
    midStr = midStr.substring(1);
    midStr += 'ay ';
    finalStr += midStr;
  }
  return finalStr;
};

console.log(pigLatin(args));



