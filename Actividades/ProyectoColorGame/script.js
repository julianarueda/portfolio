let numberOfSquares = 6; //Arrancamos con 6 cuadrados

let colors = generateRandomColors(numberOfSquares);

let pickedColor = pickColor();

const colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

const message = document.getElementById("message");


// Selección de todos los cuadrados usando querySelectorAll()
const squares = document.querySelectorAll(".square");

// Asignación de colores a cada cuadrado usando un for loop
for (let i = 0; i < squares.length; i++) {
    // Asignación de un color del arreglo colors a cada cuadrado
    squares[i].style.backgroundColor = colors[i];  

    //Agregamos el evento click al objeto
    squares[i].addEventListener("click", function() {
        //Guardamos el color del cuadrado
        const clickedColor = this.style.backgroundColor;
        //Tengo que comparar el color elegido versus el del juego
        if(clickedColor == pickedColor){
            //SI ES IGUAL ejecuto este código
            message.textContent = "¡Correcto!";
            changeColors(pickedColor);
            document.querySelector("h1").style.color = pickedColor;
            resetButton.textContent = "Play Again?";
        }else{
            //Si es distinto, el color es incorrecto
            message.textContent = "Intentalo Nuevamente";
            squares[i].style.backgroundColor = "#232323"; 
        }
    });
}

function changeColors(unColor){
    for (let i = 0; i < numberOfSquares; i++) {
        // Asignación de un color del arreglo colors a cada cuadrado
        squares[i].style.backgroundColor = unColor;  
    }
}

function pickColor(){
    const numeroDelColor = Math.floor( Math.random() * colors.length);
    return colors[numeroDelColor];
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g  + ", "+ b +")";
}

function generateRandomColors(cantidad){
    const coleccionColores = [];
    for (let i = 0; i < cantidad; i++) {
        coleccionColores.push(randomColor());
    } 
    return coleccionColores;
}

// FUNCIÓN RESET

const resetButton = document.getElementById("reset");

function reset() {
    //Crea el arreglo de 6 colores random
    colors = generateRandomColors(numberOfSquares);
    //Tomamos el color a adivinar
    pickedColor = pickColor();
    //Cambia el titulo
    colorDisplay.textContent = pickedColor;
    // Pintamos los cuadrados
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.backgroundColor = "#232323";
        }
    }
    message.textContent = "";
    document.querySelector("h1").style.color = "#fff";
    resetButton.textContent = "Nuevos Colores";
}

reset(); // Llamar a reset al inicio del juego

resetButton.addEventListener("click", function() {
    reset();
});


// FUNCIÓN HARD - EASY

const hardButton = document.getElementById("hard");
const easyButton = document.getElementById("easy");

hardButton.classList.add("selected");

hardButton.addEventListener("click", function() {
    //6 cuadrados
    numberOfSquares = 6;
    // Agregar clase selected a Hard y quitarla de Easy
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    // Reseteamos
    reset();
});

easyButton.addEventListener("click", function() {
    // Agregar clase selected a Easy y quitarla de Hard
    numberOfSquares = 3;
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    // Reseteamos
    reset();
});