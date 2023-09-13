const NOMBRE = document.getElementById('nombre');
const BOTON_NOMBRE = document.getElementById('botonNombre');
const URL =  'https://jsonplaceholder.typicode.com/users';
const RECUPERAR_DATOS = document.getElementById('recuperarDatos');
const CONTAINER = document.querySelector('#container');
const IMPRIMIR_DATOS = document.getElementById('imprimirDatos');

function obtenerDatos(funcion){
    try{
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            funcion(data)
        }) 
    } catch {
        console.warn('No funciona el fetch')
    }
}


BOTON_NOMBRE.addEventListener('click', () => {
    alert("Su nombre es "+NOMBRE.value);
})

function datosEnConsola(data){
    console.table(data)
}

RECUPERAR_DATOS.addEventListener('click', () => {
    obtenerDatos(datosEnConsola)
})

function mostrarDatos(data){
    let htmlContentToAppend = "";
        for (let usuario of data) {     
            htmlContentToAppend += `
            <div class="border">
            <div>Nombre: ${usuario.name}</div>
            <div>Usuario: ${usuario.username}</div>
            <div>Email: ${usuario.email}</div>
            </div>
        `;
    ;
    CONTAINER.innerHTML = htmlContentToAppend;
}

IMPRIMIR_DATOS.addEventListener('click', () => {
    obtenerDatos(mostrarDatos)
})}