//aca creo el array de objetos con las 6 ciudades
let JapanCitys = [
    {
        nombre: "Tokio",
        poblacion: "13,960,000",
        area: "2,194 km2",
        altitud: "40 msnm",
        clima: "Humedo subtropical",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/1280px-Skyscrapers_of_Shinjuku_2009_January.jpg"
    },
    {
        nombre: "Osaka",
        poblacion: "2,691,000",
        area: "225 km2",
        altitud: "10 msnm",
        clima: "Humedo subtropical",
        imagen: "https://es.japanspecialist.com/o/adaptive-media/image/3833874/large/1_Osaka.jpg?t=1756118456805"
    },
    {
        nombre: "Kioto",
        poblacion: "1,463,000",
        area: "827 km2",
        altitud: "50 msnm",
        clima: "Humedo subtropical",
        imagen: "https://res.cloudinary.com/jnto/image/upload/w_918,h_516,c_fill,f_auto,fl_lossy,q_60/v1/media/filer_public/95/d6/95d6aeb9-122e-49a1-977c-51802141bb5e/adobestock_265756176_fid41p"
    },
    {
        nombre: "Sapporo",
        poblacion: "1,973,000",
        area: "1,121 km2",
        altitud: "17 msnm",
        clima: "Continental humedo",
        imagen: "https://images.trvl-media.com/place/6104012/f8fa157e-15a4-4533-84ef-b21cb5b53110.jpg"
    },
    {
        nombre: "Hiroshima",
        poblacion: "1,199,000",
        area: "906 km2",
        altitud: "70 msnm",
        clima: "Humedo subtropical",
        imagen: "https://asset.japan.travel/image/upload/v1645000949/hiroshima/Hiroshima2202_main.jpg"
    },
    {
        nombre: "Nagoya",
        poblacion: "2,333,000",
        area: "326 km2",
        altitud: "15 msnm",
        clima: "Humedo subtropical",
        imagen: "https://content.r9cdn.net/rimg/dimg/68/67/c5247216-city-2121-165f3326118.jpg?crop=true&width=1020&height=498"
    }
];

function mostrarCiudades(){ //funcion para mostrar las ciudades
    let contenedor = document.getElementById("ciudades"); //agarro donde estan las cards
    contenedor.innerHTML = ""; //limpio antes de mostrarr 

    //recorro el array y creo una card por ciudad
    JapanCitys.forEach(function(ciudad){
        contenedor.innerHTML +=
            '<div class="col">' +
                '<div class="card h-100">' +
                    '<img src="' + ciudad.imagen + '" class="card-img-top" alt="' + ciudad.nombre + '">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">' + ciudad.nombre + '</h5>' +
                        '<p class="card-text">Poblacion: ' + ciudad.poblacion + '</p>' +
                        '<p class="card-text">Area: ' + ciudad.area + '</p>' +
                        '<p class="card-text">Altitud: ' + ciudad.altitud + '</p>' +
                        '<p class="card-text">Clima: ' + ciudad.clima + '</p>' +
                    '</div>' +
                '</div>' +
            '</div>';
    });

    //muestro las cards
    document.getElementById("resultado").style.display = "block";
}
