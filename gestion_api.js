const API_URL = "http://localhost:3000/productos";

// GET-Obtener todos los productos
function obtenerProductos() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      console.log("Productos en servidor:");
      console.table(data);
    })
    .catch(error => console.error(":( Error al obtener productos:", error));
}

// POST-Agregar un nuevo producto
function agregarProducto(producto) {
  if (!producto.nombre || isNaN(producto.precio) || isNaN(producto.stock)) {
    console.error(" Datos inválidos. Asegúrate de completar todos los campos correctamente.");
    return;
  }

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto)
  })
    .then(res => res.json())
    .then(data => console.log(" Producto agregado:", data))
    .catch(error => console.error("Error al agregar producto:", error));
}

// PUT - Actualizar un producto existente por ID
function actualizarProducto(id, nuevosDatos) {
  fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevosDatos)
  })
    .then(res => res.json())
    .then(data => console.log(" Producto actualizado:", data))
    .catch(error => console.error(" Error al actualizar producto:", error));
}

function eliminarProducto(id) {
  fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  })
    .then(() => console.log(`🗑️ Producto con ID ${id} eliminado.`))
    .catch(error => console.error(" Error al eliminar producto:", error));
}

// PRUEBAS-Descomenta estas líneas para probar

// obtenerProductos();

// agregarProducto({ nombre: "Teclado Mecánico", precio: 180, stock: 20 });

// actualizarProducto(1, { nombre: "Mouse inalámbrico", precio: 95, stock: 15 });

// eliminarProducto(2);
