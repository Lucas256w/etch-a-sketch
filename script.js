let sliderValue = 16;
let isDrawing = false;
let color = '#33272a'


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
                    squareColumn.style.backgroundColor = color
                }
            });
        }
    }
}

const canvas = document.querySelector("#canvas");
const slider = document.querySelector('.slider');
const sliderValueText = document.querySelector('#sliderValue');
const colorSelect = document.querySelector('#colors');


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
                squareColumn.style.backgroundColor = color
            }
        });
        
    }

}