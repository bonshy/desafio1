//primeero definir las funciones globales del sistema

function calcularRango(datos) {
  const min = Math.min(...datos);
  const max = Math.max(...datos);
  return max - min;
}

function calcularDesviacion(datos) {
  const promedio = calcularPromedio(datos);
  const desviaciones = datos.map((dato) => dato - promedio);
  const sumatoria = desviaciones.reduce((acumulador, desviacion) => acumulador + Math.pow(desviacion, 2), 0);
  return Math.sqrt(sumatoria / datos.length);
}

function calcularPromedio(datos) {
  const suma = datos.reduce((acumulador, dato) => acumulador + dato, 0);
  return suma / datos.length;
}

function calcularMedia(datos) {
  const datosOrdenados = datos.sort((a, b) => a - b);
  return datosOrdenados[Math.floor(datosOrdenados.length / 2)];
}

function calcularMediana(datos) {
  const datosOrdenados = datos.sort((a, b) => a - b);
  const middleIndex = Math.floor(datosOrdenados.length / 2);
  if (datosOrdenados.length % 2 === 0) {
    return (datosOrdenados[middleIndex - 1] + datosOrdenados[middleIndex]) / 2;
  } else {
    return datosOrdenados[middleIndex];
  }
}
// Cargar por alerta una breve explicacion e iniciaremos la calculadora
console.log(alert('Bienvenido a tu calculadora de estadistica basica, en esta calculadora se cargara una cantidad n de datos y devolvera las principales variables estadisticas simples. Listo para empezar?'));

//la funcion ejecutara la calculadora hasta que el usuario ponda end, entonces realizara los calculos sencillos.
//en esta funcion se agrega un boocle while para que se ejecute mientras que no se presione end
//el condicional  es para evirtar que se consideren valores no numericos
//si bien arrays no se vio todavia, es la forma que mas se adecua para organizar los numeros y las operaciones, al menos de lo que entendi hasta ahora de JS
function ejecutarCalculadora() {
  const datos = [];
  let entrada = prompt("Ingresa el primer dato (Una vez cargados todos los datos ingresar 'end'):");
  while (entrada.toLowerCase() !== "end") {
    const numero = parseFloat(entrada);
    if (!isNaN(numero)) {
      datos.push(numero);
    }
    entrada = prompt("Ingresa otro dato (Una vez cargados todos los datos ingresar 'end'):");
  }
//por ultimo pido que se muestren en consola los resultados
  console.log("Datos ingresados:", datos);
  console.log("Rango:", calcularRango(datos));
  console.log("Desviación:", calcularDesviacion(datos));
  console.log("Promedio:", calcularPromedio(datos));
  console.log("Media:", calcularMedia(datos));
  console.log("Mediana:", calcularMediana(datos));
}
ejecutarCalculadora();