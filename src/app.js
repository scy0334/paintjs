const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.querySelectorAll(".jsColor");
const range = document.querySelector('#jsRange');
const paintMode = document.querySelector("#jsMode");
const saveBtn = document.querySelector("#jsSave");
const resetBtn = document.querySelector("#jsReset");

CANVAS_SIZE = 500;
INITIAL_COLOR = "#2c2c2c"
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);


let painting = false;
let filling = false;

const stopPainting = (event) => {
    painting = false;
}

const startPainting = (event) => {
    painting = true;
}

const onMouseMove = (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!filling) {
        if (!painting) {
            ctx.beginPath();
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    }
}

const handleColorClick = (event) => {
    const inputColor = event.target.style.backgroundColor;
    ctx.strokeStyle = inputColor;
    ctx.fillStyle = inputColor;
}

const handleRangeChange = (event) => {
    const lineSize = event.target.value;
    ctx.lineWidth = lineSize;
}

const handleModeClick = () => {
    if (filling === true) {
        filling = false;
        paintMode.textContent = 'Fill';
    } else {
        filling = true;
        paintMode.textContent = "Paint";
    }
}

const handleFillClick = () => {
    if (filling === true){ 
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}

const handleSaveClick = () => {
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "paint";
    link.click();
}

const handleResetClick = () => {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleFillClick);
}

Array.from(colors).forEach(color => {
    color.addEventListener("click", handleColorClick);
})

if (range) {
    range.addEventListener("input", handleRangeChange);
}

if (paintMode) {
    paintMode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}

if (resetBtn) {
    resetBtn.addEventListener("click", handleResetClick);
}