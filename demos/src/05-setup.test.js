describe('Set 1', () => {
  beforeAll(() => {
    console.log('Before All')
  })

  beforeEach(() => {
    console.log('Before Each')
  })

  test('Case 1', () => {
    console.log('Case 1')
    expect(1 + 2).toBe(3)
  })

  test('Case 2', () => {
    console.log('Case 2')
    expect(1 + 1).toBe(2)
  })

  afterAll(() => {
    console.log('After All')
  })

  describe('Set 2', () => {
    beforeAll(() => {
      console.log('Before All Set 2')
    })

    test('Case 3', () => {
      console.log('Case 3')
      expect(1 + 1).toBe(2)
    })

    test('Case 4', () => {
      console.log('Case 4')
      expect(1 + 1).toBe(2)
    })
  })
})
