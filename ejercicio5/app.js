let empleados = [];

function mostrarEmpleado(){
    let empleado = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        dni: document.getElementById("dni").value,
        direccion: document.getElementById("direccion").value,
        sueldoxhs: document.getElementById("sueldoxhs").value,
        hsxmes: document.getElementById("hsxmes").value,
    
        salarioAnual: function() {
            return empleado.sueldoxhs* empleado.hsxmes;
        }
    }
    //aca agrego empleado al array y lo leo en la consola
empleados.push(empleado);
console.log(empleados);

    document.getElementById("mostrar-nombre").innerHTML= empleado.nombre
    document.getElementById("mostrar-apellido").innerHTML= empleado.apellido
    document.getElementById("mostrar-dni").innerHTML= empleado.dni
    document.getElementById("mostrar-direccion").innerHTML= empleado.direccion
    document.getElementById("mostrar-salarioanual").innerHTML= "$" + empleado.salarioAnual()
}