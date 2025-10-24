//Sistema de Venta de Entradas de Cine con Reservas Anticipadas: Diseña una
//aplicación que permita gestionar la venta de entradas en un cine. Cada película tiene
//un título, género, horario y sala. Los clientes pueden reservar entradas para una
//película específica con anticipación y se debe mostrar cuántas entradas quedan
//disponibles por sala. Además, permite ver cuáles son las películas más reservadas.
/*function cine (){
    let sala:"";
    let reserva:"";
}*/

// Películas
const peliculas = [
    { id: 1, titulo: "Avatar 2", genero: "Ciencia ficción", horario: "18:00", sala: 1 , disponibles: 40 },
    { id: 2, titulo: "Elementos", genero: "Animación", horario: "21:00", sala: 2 , disponibles: 50 },
    { id: 3, titulo: "homo argento", genero: "comedia", horario: "14:00", sala: 2 , disponibles: 50 },
    { id: 4, titulo: "el conjuro 2", genero: "terror", horario: "22:00", sala: 1 , disponibles: 40 },
    { id: 5, titulo: "culpa nuestra", genero: "romantica", horario: "19:00", sala: 2 , disponibles: 50 },
  ];
  // Salas
  const salas = [
    { id: 1, capacidad: 50 },
    { id: 2, capacidad: 40 }
  ];
  
  // Reservas
  const reservas = [
    { cliente: "Caro", peliculaId: 1, cantidad: 2 },
  ];
function mostrarpelicula () {
    // mostrar peliculas disponibles
}
  function VerificarDisponibles (){
    //decrementar los cupos disponibles
  }
   function HacerReservas (){
    //mostrar cuantas entradas quedan disponibles
   }

   //ver las peliculas mas reservadas
    
    
















