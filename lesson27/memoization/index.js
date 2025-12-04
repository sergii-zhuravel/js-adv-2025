function calculate(a, b) {
  if (!this.cache) {
    this.cache = {};
  }

  const cacheKey = `${a}-${b}`;

  if (!this.cache[cacheKey]) {
    console.log("Calculating");
    this.cache[cacheKey] = a + b;
  }

  return this.cache[cacheKey];
}

console.log(calculate(1, 1));
console.log(calculate(1, 2));
console.log(calculate(1, 1));
