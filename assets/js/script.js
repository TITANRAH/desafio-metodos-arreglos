let tareas = [
  {
    id: 1857477620278,
    descripcionTarea: "durmiendo",
    completado: false,
  },

  {
    id: 2057477620278,
    descripcionTarea: "Me levanto",
    completado: false,
  },

  {
    id: 155747740123,
    descripcionTarea: "Tomar desayuno",
    completado: false,
  },
];

let html = "";
let inputChekbox = Boolean;
agregar = document.getElementById("agregar");
tabla = document.getElementById("tabla");
totalTareas = document.getElementById("total-tareas");
totalRealizadas = document.getElementById("total-realizadas");

render();

function agregarTarea() {
  const tareaNueva = agregar.value;

  tareas.push({
    id: Date.now(),
    descripcionTarea: tareaNueva,
    completado: false,
  });

  agregar.value = "";
  render();
}

function check(id) {
  checkboxCaja = document.getElementById("check").checked;

  const tareaSel = tareas.find((tarea) => tarea.id == id);

  tareaSel.completado = !tareaSel.completado;

  checkboxCaja = tareaSel.completado;

  console.log(inputChekbox);

  render();
}

function render() {
  let html = "";
  let realizadas = tareas.filter((tarea) => tarea.completado == true);
  totalRealizadas.innerHTML = realizadas.length;
  for (let tarea of tareas) {
    if (tarea.completado == true) {
      html += `<tr>
        <th scope="row"></th>
        <td>${tarea.id}</td>
        <td>${tarea.descripcionTarea}</td>
        
        <td> <i class="bi bi-check-all" id="check" onclick="check(${tarea.id})"></i> Realizada</td>
        <td><i class="bi bi-trash trash" onclick=deleteTarea(${tarea.id})></i></td>
        </tr> `;
    } else {
      html += `<tr>
        <th scope="row"></th>
        <td>${tarea.id}</td>
        <td>${tarea.descripcionTarea}</td>
        <td><i class="bi bi-check-square" id="check" onclick="check(${tarea.id})"></i> Pendiente</td>
        <td><i class="bi bi-trash trash" onclick=deleteTarea(${tarea.id})></i></td>
        </tr> `;
    }
  }

  tabla.innerHTML = html;
  totalTareas.innerHTML = tareas.length;
}

function deleteTarea(id) {
  const index = tareas.findIndex((el) => el.id == id);
  tareas.splice(index, 1);
  render();
 
}
