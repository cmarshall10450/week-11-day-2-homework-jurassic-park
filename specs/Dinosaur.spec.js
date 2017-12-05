const assert = require('assert')
const Dinosaur = require('../src/Dinosaur')

describe('Dinosaur', function () {
  let dinosaur

  beforeEach(() => {
    dinosaur = new Dinosaur('Velociraptor', 5)
  })

  it('should have a type', function (done) {
    assert.strictEqual(dinosaur.type, 'Velociraptor')
    done()
  })

  it('should have a number of offspring per year', function (done) {
    assert.strictEqual(dinosaur.offspring, 5)
    done()
  })
})