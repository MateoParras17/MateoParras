let librosTotales = []; //array vacio para guardar los libros

function agregarLibro(){ //funcion para agregar un libro al array
    let libro = { //objeto libro
        titulo: document.getElementById("titulo").value,
        autor: document.getElementById("autor").value,
        genero: document.getElementById("genero").value,
        anioPublicacion: document.getElementById("anio").value
    }

    //agrego el libro al array
    librosTotales.push(libro);

    //limpio los inputs 
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("anio").value = "";

    alert("Libro agregado"); 
}

function mostrarLibros(){ //funcion para mostrar todos los libros
    let lista = document.getElementById("lista-libros");
    lista.innerHTML = ""; //limpio la lista antes de mostrar

    //recorro el array y agrego cada libro a la lista
    librosTotales.forEach(function(l){
        lista.innerHTML += "<li>" + l.titulo + " - " + l.autor + " - " + l.genero + " - " + l.anioPublicacion + "</li>";
    });

    document.getElementById("resultado").style.display = "block";
}