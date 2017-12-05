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
})