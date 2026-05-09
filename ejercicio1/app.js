function mostrarCoche(){ //aca cree una funcion para poder usar el boton
let coche = {   //aca cree el objeto          
    marca:document.getElementById("marca").value,
    modelo:document.getElementById("modelo").value,
    año:document.getElementById("año").value,
    color:document.getElementById("color").value,
    estado:document.getElementById("estado").value,
    precio: document.getElementById("precio").value
}

//aca se muestran los datos que ingreso el usuario
document.getElementById("mostrar-marca").innerHTML=coche.marca
document.getElementById("mostrar-modelo").innerHTML=coche.modelo
document.getElementById("mostrar-año").innerHTML=coche.año
document.getElementById("mostrar-color").innerHTML=coche.color
document.getElementById("mostrar-estado").innerHTML=coche.estado
document.getElementById("mostrar-precio").innerHTML=coche.precio
}