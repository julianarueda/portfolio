//Guardamos el objeto del input Principal
let inputTareaAgregar = document.querySelector('.input');
//Guardamos el objeto del boton agregar
let buttonAgregar = document.querySelector('.boton-agregar');
//Seleccionamos el div que contiene las tareas agregadas
let divContainer = document.querySelector('.container');

class Item {
    constructor(tarea){
        this.tarea = tarea;
        this.div = this.crearDiv(tarea);
    }

    crearDiv(tarea){
        // Crear el input
        const inputItem = document.createElement('input');
        inputItem.type = 'text';
        inputItem.disabled = true;
        inputItem.classList.add('item-input');
        inputItem.value = tarea;
        const div = document.createElement('div');
        div.classList.add('item');

        // Creo el botón editar
        let botonEditar = document.createElement('button');
        botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>';
        botonEditar.classList.add('boton-editar');
        botonEditar.addEventListener('click', function() {
                inputItem.disabled = !inputItem.disabled;
                if(inputItem.disabled){
                    botonEditar.innerHTML = '<i class="fas fa-lock"></i>';
                } else {
                    botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>';
                }
        })

        // Creo el botón eliminar
        let botonEliminar = document.createElement('button');
        botonEliminar.innerHTML = '<i class="fa-solid fa-trash"></i>';
        botonEliminar.classList.add('boton-remover');
        botonEliminar.addEventListener('click', () => {
            div.remove();
        })

        //Inserto los 3 objetos creado a la div
        div.appendChild(inputItem)
        div.appendChild(botonEditar);
        div.appendChild(botonEliminar);
        divContainer.appendChild(div);
        return div;
    }
}

function chequearInput() {
    let tarea = inputTareaAgregar.value.trim();
    if (tarea !== '') {
        let newItem = new Item(tarea); // Instanciar un objeto Item con el valor del input
        inputTareaAgregar.value = ''; // Limpiar el input después de agregar la tarea
    }
}

// Agrego click al boton agregar
buttonAgregar.addEventListener('click', () => {
    chequearInput();
});

//Instancio una tarea de ejemplo
let newItem = new Item("Hacer el desayuno");