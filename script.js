let sliderValue = 16;
let isDrawing = false;
let color = '#33272a'
let rainbowTime = false
let eraserTime = false

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

function changeSliderValue(value2) {
    sliderValueText.textContent = value2 + " x " + value2;
}

function createCanvas(value) {
    canvas.innerHTML= '';
    for (i = 0; i<value; i++) {
        const squareRow = document.createElement('div')
        squareRow.classList.add('square-row')
        canvas.appendChild(squareRow)

        for (j = 0; j<value; j++) {
            const squareColumn = document.createElement('div')
            squareColumn.classList.add('square-column')
            squareRow.appendChild(squareColumn)

            
            squareColumn.addEventListener('mousedown', () => {
                isDrawing = true;
            })
            squareColumn.addEventListener('mouseup', () => {
                isDrawing = false;
            })
            squareColumn.addEventListener('mouseover', () => {
                if (isDrawing) {
                    if (rainbowTime){
                        squareColumn.style.backgroundColor = getRandomColor();
                    } 
                    else if(eraserTime) {
                        squareColumn.style.backgroundColor = 'white';
                    }
                    else {
                        squareColumn.style.backgroundColor = color;
                    }
                }
            });
        }
    }
}


const canvas = document.querySelector("#canvas");
const slider = document.querySelector('.slider');
const sliderValueText = document.querySelector('#sliderValue');
const colorsLabel = document.querySelector("#colors-label");
const colorSelect = document.querySelector('#colors');
const colorMode = document.querySelector('.colorMode');
const rainbowMode = document.querySelector('.rainbowMode');
const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear');
const label = document.querySelector('label')

colorMode.classList.add('selected');

slider.addEventListener('change', function() {
    sliderValue = this.value
    createCanvas(sliderValue);

});

slider.addEventListener('input', function() {
    sliderValue = this.value
    changeSliderValue(sliderValue);
});

colorSelect.addEventListener('change', function() {
    color = this.value
    colorsLabel.style.backgroundColor = color
});

colorMode.addEventListener('click', () => {
    rainbowMode.classList.remove('selected');
    eraser.classList.remove('selected');
    colorMode.classList.add('selected');

    rainbowTime = false;
    eraserTime = false;
});

rainbowMode.addEventListener('click', () => {
    colorMode.classList.remove('selected');
    eraser.classList.remove('selected');
    rainbowMode.classList.add('selected');

    rainbowTime = true;
    eraserTime = false;
});

eraser.addEventListener('click', () => {
    rainbowMode.classList.remove('selected');
    colorMode.classList.remove('selected');
    eraser.classList.add('selected');

    rainbowTime = false;
    eraserTime = true;
});

clear.addEventListener('click', () => {
   createCanvas(sliderValue);
});


for (i = 0; i<sliderValue; i++) {
    const squareRow = document.createElement('div')
    squareRow.classList.add('square-row')
    canvas.appendChild(squareRow)

    for (j = 0; j<sliderValue; j++) {
        const squareColumn = document.createElement('div')
        squareColumn.classList.add('square-column')
        squareRow.appendChild(squareColumn)

        squareColumn.addEventListener('mousedown', () => {
            isDrawing = true;
        })
        squareColumn.addEventListener('mouseup', () => {
            isDrawing = false;
        })
        squareColumn.addEventListener('mouseover', () => {
            if (isDrawing) {
                if (rainbowTime){
                    squareColumn.style.backgroundColor = getRandomColor();
                } 
                else if(eraserTime) {
                    squareColumn.style.backgroundColor = 'white';
                }
                else {
                    squareColumn.style.backgroundColor = color;
                }
            }
        });
        
    }

}