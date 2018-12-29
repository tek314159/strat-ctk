//main.js
//git lab is 'origami'; github is 'origin'

var mainCol = document.getElementById('maincol');

function fillMiniMap() {
    for (let i=0;i<miniMapHeight;i++) {
        miniMap.push([]);
        for (let k=0;k<miniMapWidth;k++) {
            miniMap[i].push('.');
        }
    }
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

window.onload=function() {
    setupGame();
}