export const freq = (book, searchWord) => book.split(' ').reduce((count, word) => word.toLowerCase() === searchWord ? count + 1 : count, 0)

const wordFreqs = {}

export const freqImproved = (book, word) => {
  if (wordFreqs[word]) return wordFreqs[word]

  book.split(' ').map(word => {
    word = word.toLowerCase();
    
    if (wordFreqs[word]) wordFreqs[word] += 1
    else wordFreqs[word] = 1
  })

  return wordFreqs[word]
}
