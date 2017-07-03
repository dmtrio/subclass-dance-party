var GrowDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

GrowDancer.prototype = Object.create(Dancer.prototype);
GrowDancer.prototype.constructor = GrowDancer;

GrowDancer.prototype.step = function() {
  Dancer.prototype.step.call(this, this.timeBetweenSteps);
  
  
  
  // this.$node.fadeIn();
  this.$node.css('border-color', 'aquamarine').animate({
    borderRadius: '50px',
    borderWidth: '50px'//['50px', 'solid', 'aquamarine']
  });
  this.$node.animate({
    borderRadius: '10px',
    borderWidth: '10px'//['50px', 'solid', 'aquamarine']
  });
};