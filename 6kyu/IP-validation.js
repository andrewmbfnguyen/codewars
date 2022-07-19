// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89

// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string


function isValidIP(str) {
  // Array prompting for proper IP check
  let ipStrArray = str.split('.');
  let ipNumArr = ipStrArray.map(number => parseInt(number))

  // Check for valid ip characters
  let regex = /^(\d{1,3}\.){3}\d{1,3}$/ig
  let result = regex.test(str)
  // console.log(result)

  // Check for valid ip range
  let valid = ipNumArr.every(num => 0 <= num && num <=255);
  // console.log(valid);

  let leadZero = true;
  // iterate to check for leading 0
  for (let i=0; i < ipStrArray.length; i++) {
    if (ipStrArray[i][0]==='0' && ipStrArray[i].length > 1) {
      leadZero=false;
      break;
    } else {
      leadZero=true;
    }
  }
  // console.log(leadZero)

  // Check final boolean result
  if (valid && result && leadZero) {
    return true
  } else {
      return false;
  }
}
console.log(isValidIP('123.456.789.0')); //False
console.log(isValidIP("12.255.56.21")); //True
console.log(isValidIP("12.255.56.01")); //False


//Optimal?
function isValidIPaddress(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}


