const gcd = (a, b) => {
  let first = a;
  let second = b;
  while (first !== 0 && second !== 0) {
    if (first > second) {
      first %= second;
    } else {
      second %= first;
    }
  }
  return (first + second);
};

console.log(gcd(24, 64));
