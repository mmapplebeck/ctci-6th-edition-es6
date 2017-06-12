export const isSubstring = (str1, str2) => {
  return str1.indexOf(str2) > -1
}

export const isRotation = (str1, str2) => {
  return isSubstring(str2 + str2, str1)
}