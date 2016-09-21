var assert = require('assert');
var Superhero = require('../superhero');
var Food = require('../food');
var Rat = require('../rat');
var Pharmasist = require('../pharmasist');

describe ('Superhero', function() {

   var kat
   var mussels
  

  beforeEach(function(){
    kat = new Superhero("kat", 100, "mussels")
    mussels = new Food("mussels", 15)
  })

    it('should create a hero with a name', function(){
      var kat = new Superhero( "Kat" );
      assert.equal("Kat", kat.name);
    })

    it('should have health', function(){
      assert.equal(100, kat.health);
    })

    it('should have a favourite food', function(){
        assert.equal("mussels", kat.food);
    })

    it('should be able to say name', function(){
      assert.equal("Hello, my name is kat", kat.talk());
    })

    it('food should replenish health', function(){
      kat.eat(mussels);
      assert.equal(122.5, kat.health);
    })

    it('danderous food should damage health', function(){
      var rat = new Rat("Rattie")
      var peppers = new Food("pepper", 3, false)
      rat.touch(peppers)
        kat.eat(peppers);
        assert.equal(107, kat.health)
    })
  })

describe ('Food', function(){

  // var mussels

  it('food should have a name', function(){
    var mussels = new Food("mussels", 2);
    assert.equal("mussels", mussels.name);
  })

})

describe ('Rat', function(){

  // var peppers

  it('rat should make food dangerous', function(){
    var rat = new Rat("Rattie")
    var peppers = new Food("pepper", 9, false)
    rat.touch(peppers)
    assert.equal(true, peppers.dangerous);
  })
})

describe ('Pharmasist', function(){

  it('should be able to get rid of dangerous food', function(){
    var pharmasist = new Pharmasist("Robert")
    var peppers = new Food("pepper", 5, true)
    pharmasist.rub(peppers)
    assert.equal(false, peppers.dangerous);
  })
})


  
