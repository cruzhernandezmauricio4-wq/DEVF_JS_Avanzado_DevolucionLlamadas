// 1. Colección inicial de libros en formato JSON
// Cada libro tiene título, autor, género y estado de disponibilidad
let libros = [
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Realismo mágico", disponible: true },
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry", genero: "Fábula", disponible: true },
  { titulo: "1984", autor: "George Orwell", genero: "Distopía", disponible: false }
];

// 2. Simular lectura asincrónica con callback
// Esta función simula la lectura de un archivo JSON con un retraso
function leerLibros(callback) {
  console.log("Leyendo inventario de libros...");
  setTimeout(() => {
    callback(libros);
  }, 1000); // retraso de 1 segundo
}

// 3. Consultar libros
// Muestra todos los libros disponibles en la colección
function consultarLibros() {
  leerLibros((data) => {
    console.log("Inventario actual:");
    data.forEach((libro, i) => {
      console.log(`${i + 1}. ${libro.titulo} - ${libro.autor} [${libro.genero}] - ${libro.disponible ? "Disponible" : "Prestado"}`);
    });
  });
}