// Enum para los días de la semana
enum DiaSemana {
  Lunes = "Lunes",
  Martes = "Martes",
  Miercoles = "Miércoles",
  Jueves = "Jueves",
  Viernes = "Viernes",
  Sabado = "Sábado",
  Domingo = "Domingo",
}

// Función con switch
function esFinDeSemana(dia: DiaSemana): boolean {
  switch (dia) {
    case DiaSemana.Sabado:
    case DiaSemana.Domingo:
      return true;
    default:
      return false;
  }
}

// Probar función
console.log(esFinDeSemana(DiaSemana.Sabado));   
console.log(esFinDeSemana(DiaSemana.Domingo));   
console.log(esFinDeSemana(DiaSemana.Jueves));    
