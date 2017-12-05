const assert = require('assert')
const Dinosaur = require('../src/Dinosaur')

describe('Dinosaur', () => {
  let dinosaur

  beforeEach(() => {
    dinosaur = new Dinosaur('Velociraptor', 5)
  })

  it('should have a type', () => {
    assert.strictEqual(dinosaur.type, 'Velociraptor')
  })

  it('should have a number of offspring per year', () => {
    assert.strictEqual(dinosaur.offspring, 5)
  })
})