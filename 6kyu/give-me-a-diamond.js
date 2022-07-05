// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

function diamond(n) {
  let asterisk = `*`
  let diam = ''
  let space = '\xa0'
  let nextLine = '\n'
  let astArr = []

  if (n % 2 === 0 || n < 0) {
    return null;
  } 
    else {
      // Add top part of diamond with proper spacing
      for (let arrayIndex = 0,i = 1, s=Math.floor(n/2); i<=n; arrayIndex++, i += 2, s--) {
        if (i ===n) {
          astArr[arrayIndex] = asterisk.repeat(i)+nextLine
        } 
          else {
            astArr[arrayIndex] = space.repeat(s)+asterisk.repeat(i)+nextLine
          }
      }
  
      // Add bottom part of diamond
      for (let j = astArr.length - 1; j > 0; j--) {
        astArr.push(astArr[j - 1])
      }
    
    // Convert array of asterisks to string for final shape
    diam = astArr.join('')
    console.log(diam)
    return diam;
    }

}

diamond(9)
