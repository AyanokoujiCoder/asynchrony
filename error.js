// Hay una forma de trabajar con errores en cualquier situacion y cuando haya un error podemos capturarlo 
// y vemos que aqui se ejecuta sin ningun problema

// try {
//     let objeto = {};
// } catch (error) {
//     console.log(error);
// } finally {
//     console.log('finally');
// }

// Aqui generamos el error:

try {
    let objeto = {};
    console.log(objeto.c.a);
} catch (error) {
    console.log('Error: ');
} finally {
    console.log('finally');
}

// Lo que hicimos es imprimir el error 
// Aqui podemos ver que hemos atrapado el error y tambien imprimimos finally

