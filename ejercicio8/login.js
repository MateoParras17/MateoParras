//aca creo el objeto con los usuarios 
let usuarios = [
    {
        nombreUsuario: "mateo",
        contraseña: "1234",
        fechaCreacion: "01/01/2026"
    },
    {
        nombreUsuario: "juan",
        contraseña: "juan10",
        fechaCreacion: "15/03/2026"
    },
    {
        nombreUsuario: "pedro",
        contraseña: "pedro123",
        fechaCreacion: "20/06/2025"
    }
];

function iniciarSesion(){ //funcion para verificar los datos del login
    let nombreIngresado = document.getElementById("nombreUsuario").value;
    let contraseñaIngresada = document.getElementById("contraseña").value;

    //busco si existe un usuario 
    let usuarioEncontrado = false;

    usuarios.forEach(function(u){
        if(u.nombreUsuario == nombreIngresado && u.contraseña == contraseñaIngresada){
            usuarioEncontrado = true;
            //guardo el usuario
            localStorage.setItem("usuarioLogueado", u.nombreUsuario);
        }
    });

    if(usuarioEncontrado){
        //va a la agenda si esta todo ok
        window.location.href = "agenda.html";
    } else {
        //error si los datos estan mal
        document.getElementById("error").style.display = "block";
    }
}
