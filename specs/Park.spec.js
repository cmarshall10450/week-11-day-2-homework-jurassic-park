const assert = require('assert')
const Park = require('../src/Park')
const Dinosaur = require('../src/Dinosaur')

describe('Park', () => {
  let park

  beforeEach(() => {
    park = new Park()
  })

  it('should start with an empty enclosure', () => {
    assert.deepStrictEqual(park.enclosure, [])
  })

  it('should be able to add a dinosaur', () => {
    const dinosaur = new Dinosaur('Velociraptor', 5)
    park.addDinosaur(dinosaur)
    assert.deepStrictEqual(park.enclosure, [dinosaur])
  })

  it('should be able to remove all dinosaurs of a certain type', () => {
    const dinosaur1 = new Dinosaur('Velociraptor', 5)
    const dinosaur2 = new Dinosaur('Stegasaurus', 10)

    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)

    assert.deepStrictEqual(park.enclosure, [dinosaur1, dinosaur2])

    park.removeByType('Velociraptor')

    assert.deepStrictEqual(park.enclosure, [dinosaur2])
  })

  it('should get dinosaurs with offspring count of more than 2', () => {
    const dinosaur1 = new Dinosaur('Velociraptor', 5)
    const dinosaur2 = new Dinosaur('Stegasaurus', 1)

    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)

    const actual = park.getDinosaursWithOffSpringGreaterThan(2)

    assert.deepStrictEqual(actual, [dinosaur1])
  })

  it('should calculate number of dinosaurs after a 3 years', () => {
    const dinosaur = new Dinosaur('Velociraptor', 5)
    park.addDinosaur(dinosaur)

    const actual = park.getNumberOfDinosaursAfter(3)
    assert.strictEqual(actual, 16)
  })
})