A = [12, 14, 16];
B = [11, 13, 17];
mergedArr = A.concat(B).sort(function (a, b) {
  return a - b;
});
console.log(mergedArr);
