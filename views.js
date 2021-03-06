// views.js

function refreshDisplay() {
    $("#minmap").html("");
    $("#minmap").append(renderMap(miniMap));
}

function renderMap(maparray) {
    let textMap = "<div id='minmap'>";
    for (let i=0;i<maparray.length;i++) {
        for (let k=0;k<maparray[i].length;k++) {
            textMap += `<div class="mapcell">`
            if (cursor.position[0] == k && cursor.position[1] == i) {
                textMap += '[';
            }
            for (let m=0;m<gameObjectArray.length;m++) {
                if (gameObjectArray[m].position[0] == k && gameObjectArray[m].position[1] == i) {
                    textMap += `<strong>${gameObjectArray[m].icon}</strong>`;
                } else {
                    textMap += maparray[i][k];
                }
            }
            if (cursor.position[0] == k && cursor.position[1] == i) {
                textMap += ']';
            }
            textMap += "</div>";
        }
        textMap += "<br>";
    }
    textMap += "</div>"
    return textMap;
}