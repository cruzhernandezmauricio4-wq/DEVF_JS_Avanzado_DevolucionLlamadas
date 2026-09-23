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

// 4. Agregar libros
// Permite agregar un nuevo libro a la colección
function agregarLibro(nuevoLibro, callback) {
  setTimeout(() => {
    libros.push(nuevoLibro);
    console.log(`Libro agregado: ${nuevoLibro.titulo}`);
    callback();
  }, 1000);
}

// 5. Actualizar disponibilidad
// Cambia el estado de un libro a disponible o prestado
function actualizarDisponibilidad(titulo, estado, callback) {
  setTimeout(() => {
    let libro = libros.find(l => l.titulo === titulo);
    if (libro) {
      libro.disponible = estado;
      console.log(`Disponibilidad actualizada: ${titulo} → ${estado ? "Disponible" : "Prestado"}`);
    } else {
      console.log("Libro no encontrado.");
    }
    callback();
  }, 1000);
}

// ---------------------------
// Ejemplo de uso en consola
// ---------------------------

// Consultar inventario inicial
consultarLibros();

// Agregar un nuevo libro y luego consultar inventario
agregarLibro(
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", genero: "Novela", disponible: true },
  () => consultarLibros()
);

// Actualizar disponibilidad de un libro y luego consultar inventario
actualizarDisponibilidad("1984", true, () => consultarLibros());