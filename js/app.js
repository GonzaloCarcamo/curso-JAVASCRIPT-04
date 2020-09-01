//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');
const max = new Date().getFullYear(); // Año máximo
const min = max - 10; // año mínimo

// Generar un objeto con la búsqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

//Eventos

document.addEventListener('DOMContentLoaded', () => { //Una vez cargado el HTML, se inicia la función mostrarAutos();
    mostrarAutos();

    // Lenar las opciones de años
    llenarSelect();
})

// Event Listeners para los select de búsqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
})

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
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

// Función que filtra en base a la búsqueda
function filtrarAuto() {
    const resultado = autos.filter( filtarMarca );
}

function filtarMarca(auto) {
    const { marca } = datosBusqueda;

    if( marca ) {
        return auto.marca === marca;
    }
    return auto;
}










/*
Flujo de la aplicación:

1. Al cargar el HTML, se inicializa la función mostrarAutos().
2. Esta función itera el array de objetos "autos". 
3. Se genera un <p> por cada elemento y se muestra en el HTML dentro del <div> con id="resultado"
4. Luego de generan los años dentro del select a través de la función llenarSelect().
5. Se genera un objeto con todos los campos
6. Al seleccionar los valores de forma manual, dichos valores son agregados al objeto
7. Cuando se selecciona la marca, se llama la función filtrarAuto(), ocurre un filter de la iteración de autos
   que se genera en la función filtrarMarca. Si se selecciona la marca, se filtra. En caso contrario, trae todos los autos.


*/