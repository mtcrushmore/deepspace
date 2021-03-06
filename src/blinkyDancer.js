var BlinkyDancer = function(top, left, timeBetweenSteps){
  
  // this.oldStep = this.step;


  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass("blinky");

  // , top, left, timeBetweenSteps
  // this.oldStep = Dancer.prototype.step;
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // return blinkyDancer;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.action = function(){
    // call the old version of step at the beginning of any call to this new version of step
    this.step();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // blinkyDancer.$node.toggle();
    this.$node.toggle();

  };

