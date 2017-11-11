
function f(i, points, multiplier){
  return Math.pow(Math.E, i);
}



function getCircularPoint(radius, angle){
  // Get the relative position of point in circle
  var x = radius * Math.cos(angle);
  var y = radius * Math.sin(angle);
  return {x, y};
}


/*
*
*/
function Shape(targetEl){
  var self = this;

  // Set up the element structure
  this.target = targetEl;
  this.canvas = document.createElement("canvas");
  this.canvas.classList.add("cover");
  this.target.appendChild(this.canvas);

  // Default shape
  this.points = 200;
  this.multiplier = 9;

  // Rendering settings
  this.renderProperties = {
    coverage: 0.85, // Percentage
    color: "#000000",
    lineWidth: 1,
    offsetAngle: -Math.PI/2
  }

  // Rendering context
  this.ctx = this.canvas.getContext("2d");

  // Set the canvas size
  this.resize();
  window.addEventListener("resize", function(){
    self.resize();
  });
}



Shape.prototype.resize = function(){
  this.canvas.width = this.target.clientWidth;
  this.canvas.height = this.target.clientHeight;
  this.render(); // Redraw
}



Shape.prototype.alter = function(options){
  // Change the shape structure

  this.render(); // Redraw
}



Shape.prototype.renderOptions = function(options){
  // Change the render options
}

/* Safe render

Shape.prototype.render = function(){
  // Establish basic knowledge
  var offsetA = this.renderProperties.offsetAngle;
  var offsetW = this.canvas.width / 2;
  var offsetH = this.canvas.height / 2;
  var revolution = 2 * Math.PI;
  var pieceAngle = revolution / this.points;
  var allowedWidth = this.canvas.width * this.renderProperties.coverage;
  var allowedHeight = this.canvas.height * this.renderProperties.coverage;
  var radius = Math.min(allowedWidth, allowedHeight) / 2;

  // Set rendering settings


  // Loop through every point
  for(var i = 1; i <= this.points; i++){
    // Multiply the number with the multiplier
    var dest = i*this.multiplier; // Destination point

    // Draw a line inbetween them
    var p1 = getCircularPoint(radius, pieceAngle*i + offsetA);
    var p2 = getCircularPoint(radius, pieceAngle*dest + offsetA);

    this.ctx.beginPath();
    this.ctx.moveTo(offsetW + p1.x, offsetH + p1.y);
    this.ctx.lineTo(offsetW + p2.x, offsetH + p2.y);
    this.ctx.stroke(); // Draw it
  }
}

*/


Shape.prototype.render = function(){
  // Establish basic knowledge
  var offsetA = this.renderProperties.offsetAngle;
  var offsetW = this.canvas.width / 2;
  var offsetH = this.canvas.height / 2;
  var revolution = 2 * Math.PI;
  var pieceAngle = revolution / this.points;
  var allowedWidth = this.canvas.width * this.renderProperties.coverage;
  var allowedHeight = this.canvas.height * this.renderProperties.coverage;
  var radius = Math.min(allowedWidth, allowedHeight) / 2;

  // Set rendering settings


  // Loop through every point
  for(var i = 1; i <= this.points; i++){
    // Multiply the number with the multiplier
    var dest = f(i, this.points, this.multiplier);

    // Draw a line inbetween them
    var p1 = getCircularPoint(radius, pieceAngle*i + offsetA);
    var p2 = getCircularPoint(radius, pieceAngle*dest + offsetA);

    this.ctx.beginPath();
    this.ctx.moveTo(offsetW + p1.x, offsetH + p1.y);
    this.ctx.lineTo(offsetW + p2.x, offsetH + p2.y);
    this.ctx.stroke(); // Draw it
  }
}



Shape.prototype.render2 = function(){
  // Establish basic knowledge
  var offsetA = this.renderProperties.offsetAngle;
  var offsetW = this.canvas.width / 2;
  var offsetH = this.canvas.height / 2;
  var revolution = 2 * Math.PI;
  var pieceAngle = revolution / this.points;
  var allowedWidth = this.canvas.width * this.renderProperties.coverage;
  var allowedHeight = this.canvas.height * this.renderProperties.coverage;
  var radius = Math.min(allowedWidth, allowedHeight) / 2;

  // Set rendering settings

  // State
  var point = 1;
  var lastPoint = 1;

  // Loop the amount of points
  for(var n = 1; n <= this.points; n++){
    // Multiply point with the multiplier
    point = (point * this.multiplier) % this.points;
    console.log(point);

    // Draw a line inbetween them
    var p = getCircularPoint(radius, pieceAngle*point + offsetA);
    var pLast = getCircularPoint(radius, pieceAngle*lastPoint + offsetA);

    this.ctx.beginPath();
    this.ctx.moveTo(offsetW + pLast.x, offsetH + pLast.y);
    this.ctx.lineTo(offsetW + p.x, offsetH + p.y);
    this.ctx.stroke(); // Draw it

    // Prepare for next loop
    lastPoint = point;
  }
}



Shape.prototype.render3 = function(){
  // Loop the amount of points
  // Multiply point with the multiplier
  // Draw a line and set the new point
}
