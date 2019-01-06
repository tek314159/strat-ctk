// controls.js

function keyControls() {
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'w': 
                controlHandler.controlInput('up');
                break;
            case 'a':
                controlHandler.controlInput('left');
                break;
            case 's':
                controlHandler.controlInput('down');
                break;
            case 'd':
                controlHandler.controlInput('right');
                break;
            case 'c':
                controlHandler.controlInput('cancel');
                break;
        }
        switch (event.keyCode) {
            case 37: // left arrow
                controlHandler.controlInput('left');
                break;
            case 38: // up arrow
                controlHandler.controlInput('up');
                break;
            case 39: // right arrow
                controlHandler.controlInput('right');
                break;
            case 40: // down arrow
                controlHandler.controlInput('down');
                break;
            case 32: // down arrow
                controlHandler.controlInput('enter');
                break;
        }
    })
}

var controlHandler = {
    controlDomain: 'miniMap',
    controlInput(input) {
        if (this.controlDomain == 'miniMap') {
            this.mapSelector(input);
        }
    },
    mapSelector(input) {
        switch (input) {
            case 'up':
                cursor.changePosition(0,-1);
                break;
            case 'left':
                cursor.changePosition(-1,0);
                break;
            case 'down':
                cursor.changePosition(0,1);
                break;
            case 'right':
                cursor.changePosition(1,0);
                break;
            case 'enter':
                console.log('enter button');;
                break;
            case 'cancel':
                console.log('cancel button');;
                break;
        }
        refreshDisplay();
    },

}