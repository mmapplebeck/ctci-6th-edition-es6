const englishInt = n => {
  if (n === 0) return 'Zero'

  const smalls = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  }

  const bigs = {
    0: '',
    1: '',
    2: 'twenty',
    3: 'thirty',
    4: 'fourty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
  }

  let result = []

  const chunk = (n, result) => {
    if (Math.floor(n / 100) > 0) {
      result.push(smalls[Math.floor(n / 100)])
      result.push('hundred')
      n = n % 100
    }

    if (n >= 20) {
      result.push(bigs[Math.floor(n / 10)])
      n = n % 10
    }

    if (n > 0) {
      result.push(smalls[n])
    }
  }

  // millions
  if (n >= 1000000) {
    chunk(Math.floor(n / 1000000), result)
    result.push('million')
    n = n % 1000000
  }

  // thousands
  if (n >= 1000) {
    chunk(Math.floor(n / 1000), result)
    result.push('thousand')
    n = n % 1000
  }

  // hundreds
  chunk(n, result)

  return result.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default englishInt
