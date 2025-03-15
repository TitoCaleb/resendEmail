console.log("hola Titin");

const archivos = [
  { nombre: "archivo1.txt", tamaño: 100 },
  { nombre: "archivo2.txt", tamaño: 200 },
  { nombre: "archivo3.txt", tamaño: 300 },
];

archivos.forEach((archivo) => {
  console.log(archivo.nombre);
});
