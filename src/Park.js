const Park = function () {
  this.enclosure = []
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur)
}

Park.prototype.removeByType = function (type) {
  for (let dinosaur of this.enclosure) {
    if (dinosaur.type === type) {
      const index = this.enclosure.indexOf(dinosaur)
      this.enclosure.splice(index, 1)
    }
  }
}

Park.prototype.getDinosaursWithOffSpringGreaterThan = function (num) {
  return this.enclosure.filter(dinosaur => dinosaur.offspring > num)
}

Park.prototype.getNumberOfDinosaursAfter = function (years) {
  let count = 0
  for (let dinosaur of this.enclosure) {
    // Add the number of offspring that each dinosaur will have for the
    // number of years and then add the dinosaur itself
    count += (dinosaur.offspring * years) + 1
  }

  return count
}

module.exports = Park