describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('fadeDancer', function() {
  var fadeDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    fadeDancer = new FadeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a fadeIn function that makes it fade in', function () {
    sinon.spy(fadeDancer.$node, 'fadeIn');
    fadeDancer.step();
    expect(fadeDancer.$node.fadeIn.called).to.be.true;   
  });
  
  it('should have a fadeOut function that makes it fade out', function () {
    sinon.spy(fadeDancer.$node, 'fadeOut');
    fadeDancer.step();
    expect(fadeDancer.$node.fadeOut.called).to.be.true;   
  });
});

describe('growDancer', function() {
  var growDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    growDancer = new GrowDancer(10, 20, timeBetweenSteps);
  });

  it('should have a grow function that makes its node grow', function (){
    sinon.spy(growDancer.$node, 'animate');
    growDancer.step();
    expect(growDancer.$node.animate.called).to.be.true;   
  });
});