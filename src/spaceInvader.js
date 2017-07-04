var SpaceDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.positionLeft = left;
  this.positionTop = top;
  this.direction = 'left';
};

SpaceDancer.prototype = Object.create(Dancer.prototype);
SpaceDancer.prototype.constructor = SpaceDancer;

SpaceDancer.prototype.step = function(timeBetweenSteps, top, left) {
  Dancer.prototype.step.call(this, this.timeBetweenSteps);
  
  this.$node.addClass('space-invader');

  if (this.direction === 'left' && 0 <= this.positionLeft) {
    this.$node.css('left', this.positionLeft -= 100);
    if (this.positionLeft < 0) {
      this.direction = 'right';
    }
  } else if (this.direction === 'right' && $(window).width() >= this.positionLeft) {
    this.$node.css('left', this.positionLeft += 100);
    if (this.positionLeft > $(window).width()) {
      this.direction = 'left';
    }    
  }
};