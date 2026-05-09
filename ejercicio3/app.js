function mostrarProducto(){//funcion para mostrar el producto
    let productos={//estos son los objetos
    CocaCola:{
        nombre: "Coca-Cola",
        precio: 2500,
        descripcion: "Bebida gasificada sabor cola",
        marca: "Coca-Cola Company",
        porcDescuento: 10,
        imagen: "coca.webp"
    },
    oreo:{
        nombre: "Galletas oreo",
        precio: 1500,
        descripcion:"Galletas de chocolate con relleno de crema",
        marca:"Nabisco",
        porcDescuento: 5,
        imagen: "oreo.webp"
    },
    fideos:{
        nombre: "Fideos",
        precio: 1000,
        descripcion: "Fideos tallarines",
        marca: "Luchetti",
        porcDescuento: 5,
        imagen: "fideos.webp",
    },
}
let eleccion = document.getElementById("producto").value//esto lee lo que elija el usuario

let producto={ //aca agarro el producto
    nombre: productos[eleccion].nombre,
    precio: productos[eleccion].precio,
    descripcion: productos[eleccion].descripcion,
    marca: productos[eleccion].marca,
    porcDescuento: productos[eleccion].porcDescuento,
    imagen: productos[eleccion].imagen,

    calcDescuento: function(){//funcion para calcular el descuento
        let descuento = producto.precio*(producto.porcDescuento/100);
        return producto.precio-descuento;
    }
}

//con esto muestro los resultados
    document.getElementById("mostrar-nombre").innerHTML=producto.nombre
    document.getElementById("mostrar-precio").innerHTML= "$" + producto.precio
    document.getElementById("mostrar-descripcion").innerHTML=producto.descripcion
    document.getElementById("mostrar-marca").innerHTML=producto.marca
    document.getElementById("mostrar-descuento").innerHTML= "$" + producto.calcDescuento()
    document.getElementById("mostrar-imagen").src = producto.imagen

}
