// Interfaz Usuario
interface Usuario {
  nombre: string;
  edad: number;
  email?: string;
}

// Función para imprimir usuario
function imprimirUsuario(usuario: Usuario): void {
  console.log("=== Datos del Usuario ===");
  console.log(`Nombre: ${usuario.nombre}`);
  console.log(`Edad: ${usuario.edad}`);
  if (usuario.email) {
    console.log(`Email: ${usuario.email}`);
  } else {
    console.log("Email: No proporcionado");
  }
  console.log("==========================\n");
}

// Crear un objeto Usuario
const usuario1: Usuario = {
  nombre: "María",
  edad: 30,
};

const usuario2: Usuario = {
  nombre: "Carlos",
  edad: 25,
  email: "carlos@example.com",
};

// Probar función
imprimirUsuario(usuario1);
imprimirUsuario(usuario2);
