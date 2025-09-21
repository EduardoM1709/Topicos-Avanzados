// Función para repetir nombre en un array
function repetirNombre(nombre: string, veces: number): string[] {
  const resultado: string[] = [];
  for (let i = 0; i < veces; i++) {
    resultado.push(nombre);
  }
  return resultado;
}

// Probar función
console.log(repetirNombre("Juan", 3)); 
console.log(repetirNombre("Ana", 1));  
