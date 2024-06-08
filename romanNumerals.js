const toRomanLazy = (num) => {
  let output = ""
  let romanNumeralToArabic = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
  }

  const romanNumeralOrder = ['M', 'D', 'C', 'L', 'X', 'V', 'I']

  for (let romanNumeral of romanNumeralOrder) {
      const arabicEquivalent = romanNumeralToArabic[romanNumeral]
      const count = Math.floor(num / arabicEquivalent)
      output += romanNumeral.repeat(count)
      num -= count * arabicEquivalent
  }

  return output

};


module.exports = { toRomanLazy }
