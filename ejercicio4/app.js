function mostrarEmpleado(){
    let empleado = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        dni: document.getElementById("dni").value,
        direccion: document.getElementById("direccion").value,
        salario: document.getElementById("salarioxmes").value,
        
    
        salarioAnual: function() {//aca calculo el sueldo anual
            return empleado.salario*12;
        }
    }


    document.getElementById("mostrar-nombre").innerHTML= empleado.nombre
    document.getElementById("mostrar-apellido").innerHTML= empleado.apellido
    document.getElementById("mostrar-dni").innerHTML= empleado.dni
    document.getElementById("mostrar-direccion").innerHTML= empleado.direccion
    document.getElementById("mostrar-salarioanual").innerHTML= "$" + empleado.salarioAnual()
}