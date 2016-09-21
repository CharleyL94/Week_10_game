var Baker = function(name, cook){ 
  this.name = name;
  this.cook = cook;
}

Baker.prototype = {
  cook: function(food){
    this.health += food.replenish * 2

  }
}

module.exports = Baker;