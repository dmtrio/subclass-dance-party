var FadeDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

FadeDancer.prototype = Object.create(Dancer.prototype);
FadeDancer.prototype.constructor = FadeDancer;

FadeDancer.prototype.step = function() {
  Dancer.prototype.step.call(this, this.timeBetweenSteps);
  
  var colors = ['yellow', 'red', 'blue', 'violet', 'black', 'green'];
  var randomColorNumber = Math.floor(Math.random() * 3);
  
  
  
  // this.$node.fadeIn();
  this.$node.fadeIn().fadeOut(this.timeBetweenSteps).css('border-color', colors[randomColorNumber]);
  
};