// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.


function solution(number){
  let numArr = []
  let multiplesOfFive = 1, multiplesOfThree = 1;
  let fiveCheck = 0, threeCheck = 0;
  
  if (number < 0) {
    return 0;
  } 
    else {
      while (fiveCheck < number-5) {
        fiveCheck = multiplesOfFive*5
        numArr.push(fiveCheck);
        multiplesOfFive++;
      }
      while (threeCheck < number-3) {
        threeCheck = multiplesOfThree*3
        numArr.push(threeCheck);
        multiplesOfThree++;
      }
      
      // Check for duplicates since indexOf checks only first index number occurs 
      const finalArr = numArr.filter((number,index, thisArr)=>{
        return thisArr.indexOf(number) === index
      })

      const sumArr = finalArr.reduce((previusValue, nextValue) => previusValue + nextValue,0)
      console.log(sumArr)
      return sumArr;
    }
}

solution(19)