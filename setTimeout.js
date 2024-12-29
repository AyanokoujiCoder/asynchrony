// Time out son unas funciones que realmente no son parte de Javascript, son un tipo de web API,
//  toma en cuenta que esto se va a utilizar mucho cuando trabajamos con asincronia.

console.log('antes');
setTimeout(()=>{
    console.log('Cualquier código');
},3000); // Este tiempo se mide en milisegundos (3 segundos)
console.log('despues');

// Esto es asincronia, es simplemente correr codigo que no bloquea el resto del codigo 
// pero cuando termina el tiempo que pusimos de 3000 milisegundos corre el codigo.

// Aqui el codigo no va a correr si lo cancelamos

// console.log('antes');
// let timeout = setTimeout(()=>{
//     console.log('Cualquier código');
// },3000);
// console.log('despues');
// clearTimeout(timeout);