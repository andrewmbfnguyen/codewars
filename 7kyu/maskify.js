// return masked string with 4 chars shown at end i.e credit card
function maskify(cc) {
  let strArr = cc.split('')
  if (strArr.length > 4) {
    for (let i=0; i < strArr.length-4; i++){
      strArr[i] = '#'
    }
  } 
  let maskedStr = strArr.join('');
  console.log(maskedStr)
  return maskedStr
}

maskify('4556364607935616')