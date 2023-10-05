let titulo = document.getElementById("encabezado");
let concepto = document.getElementById("caracteristicas"); //concepto.style.color="red"; 
//console.log(concepto.parentNode)
let parra = document.getElementsByTagName("p")
let otro = document.getElementsByName("parrafito") //console.log(otro[0].innerText)

function validar() {
    let nombre = document.getElementById("nombre").value;
    let radios = document.getElementsByName("programar");
    let estudia = document.getElementById("estudiante");
    let valorRadio = "";
    for (let a = 0; a < radios.length; a++) {
        if (radios[a].checked) {
            valorRadio = radios[a].value;
        }
    }
    if (estudia.checked) {
        estudia = "SI";
    } else {
        estudia = "NO";
    }
    console.log(valorRadio);
    console.log("Nombre: " + nombre + "\nSabe programar: " + valorRadio + "\nEstudiante: " + estudia);
    
}
function limpiar() {
    document.getElementById("nombre").value = "";
    let radios = document.getElementsByName("programar");
    for (let a = 0; a < radios.length; a++) {
        if (radios[a].checked) {
            radios[a].value = false;
        }
    }
    let estudia = document.getElementById("estudiante");
    estudia.checked = false;
}

