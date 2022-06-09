function nbYear(p0, percent, aug, p) {
  let numYears = 0;
  while (p0 < p) {
    p0 = Math.floor((1 + percent / 100) * p0 + aug);
    numYears++;
  } 
  return numYears;
}