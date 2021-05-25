const args = process.argv.slice(2)


const reverse = function(args){
let newStr = '';
// console.log(' this is new Str ', newStr)
  for( let i = 0; i < args.length; i++){
    var midStr = args[i]
    // console.log('this is midStr ', args[i])
    for( let y = midStr.length - 1; y >= 0; y--){
      newStr += midStr[y]
      // console.log(midStr[y])
    }
  newStr += '\n'
  }
  return newStr
}

console.log(reverse(args))

// split each string into an array, iterate through the array backwards pushing to a container, 
