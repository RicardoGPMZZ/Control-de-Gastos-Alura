
let nombreGasto = document.getElementById("nombreGasto");
let valorGasto = document.getElementById("valorGasto");

let botonAdd = document.getElementById("botonFormulario");
let descripcionGasto = document.getElementById("descripcionGasto");

let gastos = [];


botonAdd.addEventListener("click", () => {

    const gasto = {
        nombre: nombreGasto.value,
        valor: Number(valorGasto.value),
        descripcion : descripcionGasto.value

    };

    gastos.push(gasto);

    if (gasto.valor > 150) {

        alert("El gasto es mayor a USD - 150");
        
    }

    // console.log(listaNombresGastos);
    // console.log(listaValoresGastos);

    actualizarListaGastos();
    limpiarCampos();
    
});

function actualizarListaGastos(){

    const listaElementos = document.getElementById("listaDeGastos");
    const totalElementos = document.getElementById("totalGastos");
    let htmlLista = "";
    let totalGastos = 0;

    gastos.forEach((gasto, posicion) =>{
        const {nombre, valor, descripcion} = gasto;


        htmlLista += `<li>${nombre} - ${descripcion} - USD ${valor.toFixed(2)} 
        <div>
            <button onclick="borrar(${posicion})">Borrar</button>
            <button onclick="editar(${posicion})">Editar</button>
        </div>
        </li>`;

        totalGastos += valor;

        // console.log(elemento);
        // console.log(posicion);
        // console.log(totalGastos);
        
    } );

    
    
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);

}

function limpiarCampos() {
    valorGasto.value = "";
    nombreGasto.value = "";
    descripcionGasto.value = "";
    
}

function borrar(posicion) {

    gastos.splice(posicion, 1);
    actualizarListaGastos();
    
}
function editar(posicion) {

    gastos[posicion].nombre = nombreGasto.value;
    gastos[posicion].valor = Number(valorGasto.value);
    gastos[posicion].descripcion = descripcionGasto.value;

    actualizarListaGastos();
    limpiarCampos();
}