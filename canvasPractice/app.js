const canvas = document.querySelector('#tutorial'),
    canvasTwo = document.querySelector('#tutorial2'),
    canvasThree = document.querySelector('#tutorial3'),
    canvasFour = document.querySelector('#tutorial4');

const draw = () => {
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgb(200, 0, 0)';  
        ctx.fillRect(10, 10, 50, 50) 
    
        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
    } else {
        // canvas-unsupported code here TT
    }
}

const draw2 = () => {
    if(canvasTwo.getContext) {
        let ctx = canvasTwo.getContext('2d');

        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
    }
}

const draw3 = () => {
    if(canvasThree.getContext) {
        let ctx = canvasThree.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
    }
}

const draw4 = () => {
    if(canvasFour.getContext) {
        let ctx = canvasFour.getContext('2d');

        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false);
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true); 
        ctx.stroke();
    }
}

window.addEventListener("load", draw);
window.addEventListener("load", draw2);
window.addEventListener("load", draw3);
window.addEventListener("load", draw4);