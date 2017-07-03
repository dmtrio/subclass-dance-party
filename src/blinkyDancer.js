// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

//pseudo

var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  //this.timeBetweenSteps = timeBetweenSteps;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function () {

  Dancer.prototype.step.call(this, this.timeBetweenSteps);

  this.$node.toggle();
};

// MakeDancer.prototype.step = function() {
//   console.log('stepped');
//   setTimeout(this.step, timeBetweenSteps);
// }; 

var FadeDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

FadeDancer.prototype = Object.create(Dancer.prototype);
FadeDancer.prototype.constructor = FadeDancer;

FadeDancer.prototype.step = function(){
  Dancer.prototype.step.call(this, this.timeBetweenSteps);
  
  var colors = ['yellow', 'red', 'blue', 'violet', 'black', 'green'];
  var randomColorNumber = Math.floor(Math.random() * 3);
  
  
  
  // this.$node.fadeIn();
  this.$node.fadeIn().fadeOut(this.timeBetweenSteps).css('border-color', colors[randomColorNumber]);
  
};

var GrowDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

GrowDancer.prototype = Object.create(Dancer.prototype);
GrowDancer.prototype.constructor = GrowDancer;

GrowDancer.prototype.step = function(){
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