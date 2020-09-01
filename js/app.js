//Variables
const resultado = document.querySelector('#resultado');


//Eventos

document.addEventListener('DOMContentLoaded', () => { //Una vez cargado el HTML, se inicia la función mostrarAutos();
    mostrarAutos();
})


//Funciones

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












/*
Flujo de la aplicación:

1. Al cargar el HTML, se inicializa la función mostrarAutos().
2. Esta función itera el array de objetos "autos". 
3. Se genera un <p> por cada elemento y se muestra en el HTML dentro del <div> con id="resultado"



*/