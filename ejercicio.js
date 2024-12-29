// Define una función asíncrona llamada obtenerDatos
async function obtenerDatos() {
  // Inicia un bloque try para manejar posibles errores durante la ejecución del código dentro de él
  try {
    // Realiza una solicitud HTTP GET a la URL proporcionada usando fetch.
    // await hace que la ejecución espere hasta que la solicitud se complete y obtenga una respuesta.
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // Convierte el cuerpo de la respuesta en un objeto JSON.
    // await asegura que el código espere hasta que la conversión se complete.
    let data = await response.json();

    // Devuelve el objeto data, que contiene los datos obtenidos de la respuesta en formato JSON.
    return data;
  } catch (error) {
    // Imprime un mensaje de error en la consola, junto con los detalles del error capturado.
    console.error("Error al obtener los datos:", error);
  }
}

// Define una función asíncrona llamada mostrarDatosConRetraso
async function mostrarDatosConRetraso() {
  // Imprime un mensaje en la consola que vas a inicializar una solicitud a la API.
  console.log("Inicializando solicitud a la API");

  // Llama a la función obtenerDatos y espera a que la promesa se resuelva.
  // El resultado (los datos obtenidos) se almacena en la variable datos.
  let datos = await obtenerDatos();

  // Usa setTimeout para ejecutar el código dentro de la función flecha después de 3 segundos (3000 milisegundos).
  setTimeout(() => {
    // Imprime un mensaje en la consola junto con los datos obtenidos, después de que el retraso ha pasado.
    console.log("Datos obtenidos de la API:", datos);
  }, 3000); // Especifica un retraso de 3 segundos antes de ejecutar el código en setTimeout
}

// Llama a la función mostrarDatosConRetraso para iniciar el proceso.
mostrarDatosConRetraso();