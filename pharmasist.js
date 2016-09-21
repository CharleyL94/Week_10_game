var Pharmasist = function(name, cure) {
  this.name = name;
  this.cure = cure;
}

Pharmasist.prototype = {
  rub: function(food){
    food.dangerous = false
  }
}

module.exports = Pharmasist;