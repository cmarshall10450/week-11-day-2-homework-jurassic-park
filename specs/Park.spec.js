const assert = require('assert')
const Park = require('../src/Park')
const Dinosaur = require('../src/Dinosaur')

describe('Park', () => {
  let park

  beforeEach(() => {
    park = new Park()
  })

  it('should start with an empty enclosure', (done) => {
    assert.deepStrictEqual(park.enclosure, [])
    done()
  })

  it('should be able to add a dinosaur', (done) => {
    const dinosaur = new Dinosaur('Velociraptor', 5)
    park.addDinosaur(dinosaur)
    assert.deepStrictEqual(park.enclosure, [dinosaur])
    done()
  })

  it('should be able to remove all dinosaurs of a certain type', (done) => {
    const dinosaur1 = new Dinosaur('Velociraptor', 5)
    const dinosaur2 = new Dinosaur('Stegasaurus', 10)

    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)

    assert.deepStrictEqual(park.enclosure, [dinosaur1, dinosaur2])

    park.removeByType('Velociraptor')

    assert.deepStrictEqual(park.enclosure, [dinosaur2])
    done()
  })
})