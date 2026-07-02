const url="http://localhost:3000/tasks"
async function Tareas() {
    const response= await axios.get(url);
    const tareas= response.data;

    const lista= document.getElementById("listaTareas");
    lista.innerHTML="";

    tareas.forEach(tarea => {
        lista.innerHTML += "<li><span>" + tarea.title + "</span><button onclick='eliminar(" + tarea.id + ")'>Eliminar</button></li>";
        lista.innerHTML += "<li><span>" + tarea.title + "</span><button onclick='eliminar(" + tarea.id + ")'>Eliminar</button><button onclick='completar(" + tarea.id + ", " + tarea.completed + ")'>Completar</button></li>";
    });
}
Tareas();
document.getElementById("agregar").onclick = async function() {
    const input = document.getElementById("tarea");
    const titulo = input.value;

    await axios.post(url, {
    title: titulo,
    completed: false
});

    input.value = "";
    Tareas();
}
async function eliminar(id) {
    await axios.delete(url + "/" + id);
    Tareas();
}

async function completar(id, completed) {
    await axios.patch(url + "/" + id, {
    completed: !completed
});
    Tareas();
}