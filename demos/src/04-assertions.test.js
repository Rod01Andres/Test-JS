// marchers

test('test obj', () => {
  const data = {
    name: 'Cherry'
  }
  data.lastname = 'Rod'
  expect(data).toEqual({ name: 'Cherry', lastname: 'Rod' })
})

test('null', () => {
  const data = null
  expect(data).toBeNull()
  expect(data).toBeDefined()
  expect(data).not.toBeUndefined()
})

test('booleans', () => {
  expect(true).toEqual(true)
  expect(false).toEqual(false)

  expect(0).toBeFalsy()
  expect('').toBeFalsy()
  expect(false).toBeFalsy()
})

test('strings', () => {
  expect('Christoph').toMatch(/stop/)
})

test('list / arrays', () => {
  const num = [1, 2, 3, 4, 5]
  expect(num).toContain(3)
})
