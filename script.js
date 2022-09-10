const inputTexto = document.getElementById('input-texto');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const inputResultado = document.getElementById('mensaje-texto');
const btnCopiar = document.getElementById('btn-copy');
const soloLetras ='^[a-z !ñ]+$';

document.addEventListener('DOMContentLoaded', () => {
  btnEncriptar.addEventListener('click', encriptarTexto);
  btnDesencriptar.addEventListener('click', desencriptarTexto);
  btnCopiar.addEventListener('click', copiarTexto);
});

function encriptarTexto(e) {
  e.preventDefault();
  inputResultado.value = '';
  let texto = inputTexto.value;
  
  if(texto.match(soloLetras)!=null){
    let palabras = texto.split(' ');
    let nuevasPalabras = [];
    
    for (let palabra of palabras) {
      palabra = palabra.replaceAll('e','------');
      palabra = palabra.replaceAll('i','-----');
      palabra = palabra.replaceAll('a','-----');
      palabra = palabra.replaceAll('o','---');
      palabra = palabra.replaceAll('u','');      
      
      nuevasPalabras.push(palabra);    
    }

    const resultado = nuevasPalabras.join(' ');
    
    inputResultado.value = resultado;
  } else {
    mostrarError('Solo se permiten letras minúsculas, sin acentos');
    return;
  }  
}

function desencriptarTexto(e) {
  e.preventDefault();  
  inputResultado.value = '';
  let texto = inputTexto.value;

  if(texto.match(soloLetras)!=null){
    let palabras = texto.split(" ");
    let nuevasPalabras = [];    

    for (let palabra of palabras) {
      palabra = palabra.replaceAll('----','e');
      palabra = palabra.replaceAll('----','i');
      palabra = palabra.replaceAll('---','a');
      palabra = palabra.replaceAll('---','o');
      palabra = palabra.replaceAll('---','u');
      nuevasPalabras.push(palabra);    
    }

    const resultado = nuevasPalabras.join(' ');
    
    inputResultado.value = resultado;
  } else {
    mostrarError('Solo se permiten letras minúsculas, sin acentos');
    return;
  }  
}

function mostrarError(mensaje) {
  const existeError = document.querySelector('.error');
  
  if(!existeError) {
      const formulario = document.getElementById('formulario');
      const divMensaje = document.createElement('div');
      divMensaje.classList.add('error');
  
      divMensaje.textContent = mensaje;            
      formulario.appendChild(divMensaje);
      
      setTimeout(()=> {
          divMensaje.remove();
      }, 3000);
  }
}

function copiarTexto(e) {
    e.preventDefault(); 
    const mensaje = inputResultado.value;

    navigator.clipboard.writeText(mensaje);
}