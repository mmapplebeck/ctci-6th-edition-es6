export const oneAway = (str1, str2) => {
  if (Math.abs(str1.length - str2.length) > 1) return false
  let edited = false
  for (let i = 0, j = 0; i < str1.length && j < str2.length; i++, j++) {
    if (str1[i] !== str2[j]) {
      if (edited) return false
      if (str1.length < str2.length) i--
      else if (str2.length < str1.length) j--
      edited = true
    }
  }
  return true
}