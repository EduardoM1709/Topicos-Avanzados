// 1. Enum para estado de producto
enum EstadoProducto {
  Disponible = "Disponible",
  Agotado = "Agotado",
  Descontinuado = "Descontinuado",
}

// 2. Union type para IDProducto
type IDProducto = string | number;

// 3. Interfaz Producto
interface Producto {
  id: IDProducto;
  nombre: string;
  precio: number;
  estado: EstadoProducto;
  descripcion?: string;
}

// 4. Función para mostrar detalles de un producto
function mostrarDetallesProducto(producto: Producto): void {
  console.log("=== Detalles del Producto ===");
  console.log(`ID: ${producto.id}`);
  console.log(`Nombre: ${producto.nombre}`);
  console.log(`Precio: ${producto.precio} Lps`);
  console.log(`Estado: ${producto.estado}`);
  if (producto.descripcion) {
    console.log(`Descripción: ${producto.descripcion}`);
  }
  console.log("=============================\n");
}

// 5. Crear objetos
const producto1: Producto = {
  id: 101,
  nombre: "Laptop",
  precio: 1500,
  estado: EstadoProducto.Disponible,
  descripcion: "Laptop de alto rendimiento",
};

const producto2: Producto = {
  id: "A202",
  nombre: "Mouse",
  precio: 25,
  estado: EstadoProducto.Agotado,
};

// Invocar función
mostrarDetallesProducto(producto1);
mostrarDetallesProducto(producto2);
