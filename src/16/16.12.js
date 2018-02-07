export class Element {
  constructor(name, attributes = [], children = []) {
    this.name = name
    this.attributes = attributes
    this.children = children
  }
}

export class Attribute {
  constructor(name, value) {
    this.name = name
    this.value = value
  }
}

export const encode = (element, mappings) => {
  let encoded = []
  encoded.push(mappings[element.name])
  element.attributes.forEach(attribute => {
    encoded.push(mappings[attribute.name])
    encoded.push(attribute.value)
  })
  if (element.children.length > 0) {
    encoded.push(0)
    element.children.forEach(child => {
      encoded = encoded.concat(encode(child, mappings))
    })
  }
  encoded.push(0)

  return encoded.join(' ')
}
