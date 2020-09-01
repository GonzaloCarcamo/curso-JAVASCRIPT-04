//Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear(); // Año máximo
const min = max - 10; // año mínimo


//Eventos

document.addEventListener('DOMContentLoaded', () => { //Una vez cargado el HTML, se inicia la función mostrarAutos();
    mostrarAutos();

    // Lenar las opciones de años
    llenarSelect();
})


//Funciones

// Muestra el listado de autos
function mostrarAutos() {
    autos.forEach(auto => {

        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHTML = document.createElement('p'); //Por cada elemento "auto", va a generar un <p>

        autoHTML.textContent = `                       
            ${marca} ${modelo} - ${year} - ${precio} - ${puertas} - ${color} - ${transmision} 
        `;

        // Insertar cada elemento auto en el HTML
        resultado.appendChild(autoHTML);
    }) 
}

// Genera los años
function llenarSelect() {
    
    for( let i = max; i >= min; i-- ) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones de años al select
    }
}











/*
Flujo de la aplicación:

1. Al cargar el HTML, se inicializa la función mostrarAutos().
2. Esta función itera el array de objetos "autos". 
3. Se genera un <p> por cada elemento y se muestra en el HTML dentro del <div> con id="resultado"
4. Luego de generan los años dentro del select a través de la función llenarSelect().


*/