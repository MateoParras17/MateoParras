
//aca creo el array de contactos 
let contactos = [
    {
        nomyApe: "Juan Perez",
        telefono: "381-1234567",
        direccion: "salta 200",
        email: "juan@gmail.com"
    },
    {
        nomyApe: "Maria Gomez",
        telefono: "381-2345678",
        direccion: "mendoza 500",
        email: "maria@gmail.com"
    },
    {
        nomyApe: "Carlos Lopez",
        telefono: "381-3456789",
        direccion: "corrientes 100",
        email: "carlos@gmail.com"
    },
    {
        nomyApe: "Ana Martinez",
        telefono: "381-4567890",
        direccion: "laprida 800",
        email: "ana@gmail.com"
    }
];

//muestro los contactos precargados 
contactos.forEach(function(c){
    agregarFila(c);
});

function agregarContacto(){ //funcion para agregar un contacto nuevo desde el form
    let contacto = { //objeto contacto con los datos del form
        nomyApe: document.getElementById("nomyApe").value,
        telefono: document.getElementById("telefono").value,
        direccion: document.getElementById("direccion").value,
        email: document.getElementById("email").value
    }

    //agrego el contacto al array y agrego a la fila de la tabla
    contactos.push(contacto);
    agregarFila(contacto);

    //aca se limpian los inputs
    document.getElementById("nomyApe").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("email").value = "";
}

function agregarFila(contacto){ //con esto se agrega una fila a la tabla
    document.getElementById("body-tabla").innerHTML +=
        "<tr>" +
            "<td>" + contacto.nomyApe + "</td>" +
            "<td>" + contacto.telefono + "</td>" +
            "<td>" + contacto.direccion + "</td>" +
            "<td>" + contacto.email + "</td>" +
        "</tr>";
}
