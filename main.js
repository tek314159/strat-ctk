//main.js
//git lab is 'origami'; github is 'origin'

var mainCol = document.getElementById('maincol');
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

var player = new gameObject('x');

function fillMiniMap() {
    for (let i=0;i<miniMapHeight;i++) {
        miniMap.push([]);
        for (let k=0;k<miniMapWidth;k++) {
            miniMap[i].push('.');
        }
    }
}

function keyControls() {
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'w': 
                player.changePosition(0,-1);
                refreshDisplay();
                break;
            case 'a':
                player.changePosition(-1,0);
                refreshDisplay();
                break;
            case 's':
                player.changePosition(0,1);
                refreshDisplay();
                break;
            case 'd':
                player.changePosition(1,0);
                refreshDisplay();
                break;
        }
        switch (event.keyCode) {
            case 37: // left arrow
                player.changePosition(-1,0);
                refreshDisplay();
                break;
            case 38: // up arrow
                player.changePosition(0,-1);
                refreshDisplay();
                break;
            case 39: // right arrow
                player.changePosition(1,0);
                refreshDisplay();
                break;
            case 40: // down arrow
                player.changePosition(0,1);
                refreshDisplay();
                break;
        }
    })
}

function setupGame() {
    fillMiniMap();
    $("#leftcol").html("loaded");
    $("#rightcol").html("");
    $("#rightcol").append("<div id='minmap'></div>");
    var minMap = document.getElementById('minmap');
    minMap.addEventListener('mouseenter', function(event) {
        // highlight the mouseenter target
        event.target.style.color = "purple";
    }, false);
    minMap.addEventListener('mouseleave', function(event) {
        // highlight the mouseenter target
        event.target.style.color = "";
    }, false);
    refreshDisplay();
    keyControls();
}

function refreshDisplay() {
    $("#minmap").html("");
    $("#minmap").append(renderMap(miniMap));
}

function renderMap(maparray) {
    let textMap = "<div id='minmap'>";
    for (let i=0;i<maparray.length;i++) {
        for (let k=0;k<maparray[i].length;k++) {
            textMap += `<div class="mapcell">`
            if (player.position[0] == k && player.position[1] == i) {
                textMap += `<strong>${player.icon}</strong>`;
            } else {
                textMap += maparray[i][k];
            }
            textMap += "</div>";
        }
        textMap += "<br>";
    }
    textMap += "</div>"
    return textMap;
}

window.onload=function() {
    setupGame();
}