// A Hero has a name √
// A Hero has health √
// A Hero has a favourite food √
// A Hero can talk saying their name √

var Superhero = function(name, health, food) {
  this.name = name;
  this.health = health;
  this.food = food;
}

Superhero.prototype = {
  talk: function(name){
    return ("Hello, my name is " + this.name);
  },

  eat: function(food){
    if(food.dangerous ===true ){ 
      this.health -= food.replenish - 10 
    }

      else if (food.name === this.food){
    this.health += food.replenish * 1.5 
      }

        else {this.health += food.replenish};
        }

        if (this.health >= 150) {
          this.health = 150;
        }
  

}

module.exports = Superhero;