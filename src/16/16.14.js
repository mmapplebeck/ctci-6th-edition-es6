import {Line} from './16.13'

export default points => {
  let lines = []
  let maxMatches = 0
  let bestLine = null

  for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
      lines.push(new Line(points[i], points[j]))
    }
  }

  lines.forEach(line => {
    let matches = 0
    points.forEach(point => {
      if (line.m * point.x + line.b === point.y) matches++
    })
    if (matches > maxMatches) {
      maxMatches = matches
      bestLine = line
    }
  })

  return bestLine
}
