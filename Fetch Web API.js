// AJAX

// XMLHttpRequest es una API que permite realizar solicitudes HTTP desde el navegador, sin recargar la página.

// xhttp.onreadystatechange es una propiedad que asigna una función que se ejecutará cada vez que cambie el estado de xhttp.

// La propiedad onreadystatechange es un manejador de eventos que se activa cuando el readyState de XMLHttpRequest cambia.
// Dentro de la función, this hace referencia al objeto xhttp.

// this.responseText contiene la respuesta del servidor en forma de texto cuando la solicitud ha sido completada exitosamente.

// var xhttp = new XMLHttpRequest();
// xhhtp.onreadystatechange = function () {
//     console.log(this.responseText);
// };
// xhttp.open("GET", "www.xaviro.com", true);
// xhttp.send();

// xhttp.open() inicializa la solicitud.

// El primer parámetro, "GET", indica el método HTTP a usar.

// El segundo parámetro, "http://www.xaviro.com", es la URL a la que se enviará la solicitud.

// El tercer parámetro, true, indica que la solicitud debe ser asíncrona (es decir, no bloqueará 
// la ejecución del resto del script mientras se completa la solicitud).

// xhttp.send() envía la solicitud HTTP previamente configurada al servidor.
// Como es una solicitud GET, no se envía ningún dato adicional con send().

// fetch es la forma moderna de hacer esto: (Esta contruido con promesas y es asincrono)

fetch("www.xaviro.com")
    .then(response => response.json())
    .then(json => {
        console.log(json);
    })

// Ejecutar en consola

// La Fetch API es una interfaz moderna en JavaScript que permite hacer solicitudes HTTP de una manera 
// más sencilla y limpia en comparación con la antigua XMLHttpRequest. La Fetch API proporciona una forma 
// más poderosa y flexible para realizar solicitudes y manejar respuestas de recursos a través de la red de forma asíncrona.

