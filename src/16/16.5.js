export const factorial = (n, count = n) => {
  if (n <= 1) return count
  return factorial(n - 1, count * (n - 1))
}

export const zerosSimple = n => {
  const nFactorial = factorial(n)
  let count = 0;
  let power = 1;
  while(nFactorial % (10 * power) === 0) {
    count += 1;
    power *= 10;
  }
  return count;
}

export const factorsOfFive = n => {
  let count = 0
  let power = 1

  while (n % (Math.pow(5, power)) === 0) {
    count += 1
    power += 1
  }

  return count
}

export const zeros = n => {
  if (n < 5) return 0
  let count = 0

  for (let i = 5; i <= n; i++) {
    count += factorsOfFive(i)
  }

  return count
}
