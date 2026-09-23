// Colección inicial de libros en formato JSON
let libros = [
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Realismo mágico", disponible: true },
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry", genero: "Fábula", disponible: true },
  { titulo: "1984", autor: "George Orwell", genero: "Distopía", disponible: false }
];

// Simular lectura asincrónica con callback
function leerLibros(callback) {
  setTimeout(() => {
    callback(libros);
  }, 500);
}

// Consultar libros
function consultarLibros(callback) {
  leerLibros((data) => {
    console.log("\nInventario actual:");
    data.forEach((libro, i) => {
      console.log(`${i + 1}. ${libro.titulo} - ${libro.autor} [${libro.genero}] - ${libro.disponible ? "Disponible" : "Prestado"}`);
    });
    if (callback) callback();
  });
}

// Agregar libros
function agregarLibro(nuevoLibro, callback) {
  setTimeout(() => {
    libros.push(nuevoLibro);
    console.log(`\nLibro agregado: ${nuevoLibro.titulo}`);
    if (callback) callback();
  }, 500);
}

// Actualizar disponibilidad
function actualizarDisponibilidad(titulo, estado, callback) {
  setTimeout(() => {
    let libro = libros.find(l => l.titulo === titulo);
    if (libro) {
      libro.disponible = estado;
      console.log(`\nDisponibilidad actualizada: ${titulo} → ${estado ? "Disponible" : "Prestado"}`);
    } else {
      console.log("\nLibro no encontrado.");
    }
    if (callback) callback();
  }, 500);
}

// ---------------------------
// Menú interactivo con readline
// ---------------------------
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log("\n--- Menú Biblioteca ---");
  console.log("1. Consultar libros");
  console.log("2. Agregar libro");
  console.log("3. Actualizar disponibilidad");
  console.log("4. Salir");

  rl.question("Elige una opción: ", (opcion) => {
    switch (opcion) {
      case "1":
        consultarLibros(() => mostrarMenu());
        break;
      case "2":
        rl.question("Título: ", (titulo) => {
          rl.question("Autor: ", (autor) => {
            rl.question("Género: ", (genero) => {
              const nuevoLibro = { titulo, autor, genero, disponible: true };
              agregarLibro(nuevoLibro, () => mostrarMenu());
            });
          });
        });
        break;
      case "3":
        rl.question("Título del libro a actualizar: ", (titulo) => {
          rl.question("Nuevo estado (disponible/prestado): ", (estado) => {
            const disponible = estado.toLowerCase() === "disponible";
            actualizarDisponibilidad(titulo, disponible, () => mostrarMenu());
          });
        });
        break;
      case "4":
        console.log("Saliendo del sistema...");
        rl.close();
        break;
      default:
        console.log("Opción inválida.");
        mostrarMenu();
    }
  });
}

// Iniciar menú
mostrarMenu();
