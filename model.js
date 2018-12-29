// model.js

const miniMapHeight = 12;
const miniMapWidth = 12;

const miniMap = [];

var gameObject = function (icon) {
    this.icon = icon;
    this.currentMap = miniMap;
    this.position = [0,0]
}

gameObject.prototype.getPosition = function() {
    return this.position;
}

gameObject.prototype.changePosition = function(x, y) {
    //console.log(this.position);
    let startX = this.position[0];
    let startY = this.position[1];
    if (x > 0) {
        if ((this.position[0] + x) < this.currentMap[this.position[1]].length) {
            this.position[0] += x;
        }
    } else if (x < 0) {
        if ((this.position[0] + x) >= 0) {
            this.position[0] += x;
        }
    }
    if (y > 0) {
        if ((this.position[1] + y) < this.currentMap.length) {
            this.position[1] += y;
        }
    } else if (y < 0) {
        if ((this.position[1] + y) >= 0) {
            this.position[1] += y;
        }
    }
    if (startX != this.position[0] || startY != this.position[1]) {
        //console.log("moved");
        //console.log(this.position);
        return true;
    } else {
        return false;
    }
}

var cursorType = function() {
    this.currentMap = miniMap;
    this.position = [0,0]
}

cursorType.prototype.changePosition = function(x, y) {
    //console.log(this.position);
    let startX = this.position[0];
    let startY = this.position[1];
    if (x > 0) {
        if ((this.position[0] + x) < this.currentMap[this.position[1]].length) {
            this.position[0] += x;
        }
    } else if (x < 0) {
        if ((this.position[0] + x) >= 0) {
            this.position[0] += x;
        }
    }
    if (y > 0) {
        if ((this.position[1] + y) < this.currentMap.length) {
            this.position[1] += y;
        }
    } else if (y < 0) {
        if ((this.position[1] + y) >= 0) {
            this.position[1] += y;
        }
    }
    if (startX != this.position[0] || startY != this.position[1]) {
        //console.log("moved");
        //console.log(this.position);
        return true;
    } else {
        return false;
    }
}

var player = new gameObject('x');
var cursor = new cursorType();