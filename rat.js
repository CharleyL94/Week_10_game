// Rats should be able to touch food, if they do the food becomes poisonous. √
// Heroes that eat poisonous food should lose health.√

var Rat = function(name) {
  this.name = name;
}

Rat.prototype = {
  touch: function(food){
    food.dangerous = true;
  }
}

module.exports = Rat;
