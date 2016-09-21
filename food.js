// Food should have a name √
// Food should have a replenishment value √

var Food = function(name, replenish, dangerous) {
  this.name = name;
  this.replenish = replenish;
  this.dangerous = dangerous;
}

module.exports = Food;