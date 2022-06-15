function arrayDiff(a,b) {
  let finalArr = [...a]
 
  for (let j=0; j < b.length; j++) {
    for (let i=0; i < a.length; i++) {
      // reset index if true (splicing messes up indexing)
      if (finalArr[i] === b[j]) {
        finalArr.splice(i,1)
        i=0
      }
    }
  }   
  return finalArr
}
// arrayDiff([1,2],[1])
// arrayDiff([1,2,2,2,3],[2]) 
arrayDiff([3,7,0,-18,-18,-14,-4,11,-19,-18,4,10,-3,3,-17,15],[3,7,0])