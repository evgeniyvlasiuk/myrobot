var Robot, robot;

Robot = (function() {
  function Robot() {}

  Robot.prototype.name = "";

  Robot.prototype.x = 0;

  Robot.prototype.y = 0;

  Robot.prototype.route = "north";

  Robot.prototype.move = function() {

    switch(this.route) {

    case "east" :
      this.x += 1;
    break;
    case "north":
      this.y += 1;
    break;
    case "west":
      this.x -= 1;
    break;
    case "south":
      this.y -= 1;
    }
    if (this.x < 0) {
      this.x += 1;
    }
    if (this.y < 0) {
      this.y += 1;
    }
    if (this.x > 10) {
      this.x -= 1;
    }
    if (this.y > 10) {
      return this.y -= 1;
    }
  };

  Robot.prototype.rotation = function() {

    switch(parseInt(key.which,10)) {
//levo
case 37:
    switch(this.route){
      case "north":
      this.route="west";
      break;
      case "south":
      this.route="east";
      break;
      case "west":
      this.route="south";
      break;
      case "east":
      this.route="north"
      break;
    }
break;
//180
case 38:
switch(this.route){
      case "north":
      this.route="south";
      break;
      case "south":
      this.route="north";
      break;
      case "west":
      this.route="east";
      break;
      case "east":
      this.route="west"
      break;
    }
 
break;
//pravo
case 39:
switch(this.route){
      case "north":
      this.route="east";
      break;
      case "south":
      this.route="west";
      break;
      case "west":
      this.route="north";
      break;
      case "east":
      this.route="south"
      break
    }
break;
}
  };

  return Robot;

})();

robot = new Robot;

robot.move();

console.log(robot.x);

console.log(robot.y);

console.log(robot.route);