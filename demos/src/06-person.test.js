const Person = require('./06-person')

describe('Person Class Tests', () => {
  let person
  // Arrange
  beforeEach(() => {
    person = new Person('Cherry', 45, 1.7)
  })

  test('Shoul return: No found', () => {
    person.weight = -45
    const imc = person.calcIMC()
    expect(imc).toBe('No found')
  })

  test('Should return: Down', () => {
    const imc = person.calcIMC()
    expect(imc).toBe('Down')
  })

  test('Should return: Normal', () => {
    // Arrange
    person.weight = 59
    // Act
    const imc = person.calcIMC()
    // Assert
    expect(imc).toBe('Normal')
  })

  test('Shoul return: Overweight', () => {
    person.weight = 72.25
    const imc = person.calcIMC()
    expect(imc).toBe('Overweight')
  })

  test('Shoul return: Overweight level 1', () => {
    person.weight = 81
    const imc = person.calcIMC()
    expect(imc).toBe('Overweight level 1')
  })

  test('Shoul return: Overweight level 2', () => {
    person.weight = 101
    const imc = person.calcIMC()
    expect(imc).toBe('Overweight level 2')
  })

  test('Shoul return: Overweight level 3', () => {
    person.weight = 119
    const imc = person.calcIMC()
    expect(imc).toBe('Overweight level 3')
  })

  test('Shoul return: Not found', () => {
    person.weight = 1000
    const imc = person.calcIMC()
    expect(imc).toBe('Not found')
  })
})
