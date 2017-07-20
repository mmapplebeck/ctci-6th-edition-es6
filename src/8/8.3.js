export const magicIndex = (nums, start = 0, end = nums.length - 1) => {
  let index = Math.floor((start + end) / 2)
  if (!nums[index]) return null
  let num = nums[index]
  if (num === index) return num
  if (num > index) return magicIndex(nums, start, index - 1)
  return magicIndex(nums, index + 1, end)
}