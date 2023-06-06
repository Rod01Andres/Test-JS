const Person = require('./06-person')

describe('Person Class Tests', () => {
  let person

  beforeEach(() => {
    person = new Person('Cherry', 45, 1.7)
  })

  test('Should return: Down', () => {
    const imc = person.calcIMC()
    expect(imc).toBe('Down')
  })

  test('Should return: Normal', () => {
    person.weight = 59
    const imc = person.calcIMC()
    expect(imc).toBe('Normal')
  })
})
