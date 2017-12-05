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

module.exports = Park