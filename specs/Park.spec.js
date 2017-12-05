const assert = require('assert')
const Park = require('../src/Park')
const Dinosaur = require('../src/Dinosaur')

describe('Park', () => {
  let park

  beforeEach(() => {
    park = new Park()
  })

  it('should start with an empty enclosure', function (done) {
    assert.deepStrictEqual(park.enclosure, [])
    done()
  })

  it('should be able to add a dinosaur', function (done) {
    const dinosaur = new Dinosaur('Velociraptor', 5)
    park.addDinosaur(dinosaur)
    assert.deepStrictEqual(park.enclosure, [dinosaur])
    done()
  })
})