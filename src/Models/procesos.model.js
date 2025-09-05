// src/models/procesos.model.js
const procesos = [
  {
    id: 1,
    titulo: "Alta de producto",
    descripcion: "Registrar un nuevo producto en el catálogo.",
    estado: "En curso",
    imagen: "https://picsum.photos/seed/proc1/400/240"
  },
  {
    id: 2,
    titulo: "Revisión de usuarios",
    descripcion: "Validar cuentas nuevas y actualizar perfiles.",
    estado: "Pendiente",
    imagen: "https://picsum.photos/seed/proc2/400/240"
  },
  {
    id: 3,
    titulo: "Sincronización de inventario",
    descripcion: "Conciliar stock con proveedores externos.",
    estado: "Completado",
    imagen: "https://picsum.photos/seed/proc3/400/240"
  }
];

function getAll() {
  return procesos;
}

module.exports = { getAll };
