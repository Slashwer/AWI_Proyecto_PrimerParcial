function validarLogin(){
    var emailuser = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var mensajeError = document.getElementById("mensajeError");     
    var email = document.getElementById('email');
    var Emailvalido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (emailuser === "" || password === "") {
        mensajeError.textContent = "Por favor, ingrese un correo electronico y contraseña";
    } else if (Emailvalido.test(email.value) ){
        alert('Inicio de sesion correcto');
        return true;
    }else{
        alert('Ingrese un correo electronico valido');
        return false;
    }
}

function validarFormulario(){
  var nombre = document.getElementById("nombre").value;
  var nombrev = document.getElementById('nombre');
  var nombrevalido =  /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  var numerouser = document.getElementById("numero").value;
  var pro = document.getElementById("pro").value;
  var facultad = document.getElementById("facultad").value;
  var emailuser = document.getElementById("correo").value;
  var comentario = document.getElementById("comentario").value;
  var mensajeError = document.getElementById("mensajeError");    
  var email = document.getElementById('correo');
  var emailvalido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  var numero = document.getElementById("numero"); 
  var numerovalido = /^\d{7,14}$/;

  if(nombre === "" && emailuser === "" && numerouser === "" && pro === "" && facultad === ""  && comentario === ""){
    mensajeError.textContent = "Todos los campos estan vacios!";
    return false;
  }

  if (nombre === "") {
    mensajeError.textContent = "Nombres vacios";
    return false;
  }else if (nombrevalido.test(nombrev.value) ){
    //Si es correcto sigue el siguiente if validando el siguiente dato
  }else{
    alert('Ingrese sus nombres correctamente');
    return false;
  }

  if (emailuser === "") {
      mensajeError.textContent = "Correo electronico vacio";
      return false;
  }else if (emailvalido.test(email.value) ){
  }else{
      alert('Ingrese un correo electronico valido');
      return false;
  }

  if(numerouser === ""){
    mensajeError.textContent = "Numero vacio";
    return false;
  }else if (numerovalido.test(numero.value) ){
  }else{
    alert('Ingrese un numero telefonico valido');
    return false;
  }

  if(pro == ""){
    mensajeError.textContent = "Carrera vacio";
    return false;
  }else if(pro.length>4){
  }else{
    mensajeError.textContent = "Carrera invalida";
    return false;
  }

  if(facultad == ""){
    mensajeError.textContent = "Facultad vacia";
    return false;
  }else if(facultad.length>4){
  }else{
    mensajeError.textContent = "Facultad invalida";
    return false;
  }

  if(comentario == ""){
    mensajeError.textContent = "Anotacion vacia";
    return false;
  }else if(comentario.length>10){
    alert("El formulario se envio correctamente");
  }else{
    mensajeError.textContent = "Anotacion invalida";
    return false;
  }
}

function validarRegistro(){
  var nombre = document.getElementById("nombre").value;
  var nombrev = document.getElementById('nombre');
  var nombrevalido =  /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  var numerouser = document.getElementById("numero").value;
  var pro = document.getElementById("pro").value;
  var facultad = document.getElementById("facultad").value;
  var emailuser = document.getElementById("correo").value;
  var password1 = document.getElementById("contraseña").value;
  var password2 = document.getElementById("contraseña-repeat").value;
  var passworduser = document.getElementById("contraseña");
  var passworduser2 = document.getElementById("contraseña-repeat");
  const terminosYcondiciones = document.getElementById("termsAndConditions");
  var mensajeError = document.getElementById("mensajeError");    
  var email = document.getElementById('correo');
  var emailvalido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  var numero = document.getElementById("numero"); 
  var numerovalido =  /^\d{7,14}$/;
  var usuario = document.getElementById("usuario").value;
  var usuariov = document.getElementById('usuario');
  var usuariovalido =  /^[a-zA-Z0-9\_\-]{4,16}$/;
  var contraseñavalida =  /^.{4,12}$/;

  if(usuario === "" && nombre === "" && emailuser === "" && numerouser === "" && pro === "" && facultad === ""  && password1 === "" && password2 === ""){
    mensajeError.textContent = "Todos los campos estan vacios!";
    return false;
  }

  if(usuario == ""){
    mensajeError.textContent = "Usuario vacio";
    return false;
  }else if(usuariovalido.test(usuariov.value)){
    //Si es correcto sigue el siguiente if validando el siguiente dato
  }else{
    mensajeError.textContent("Ingrese un usuario valido");
    return false;
  }

  if (nombre === "") {
    mensajeError.textContent = "Nombres vacios";
    return false;
  }else if (nombrevalido.test(nombrev.value) ){
  }else{
    alert('Ingrese sus nombres correctamente');
    return false;
}

  if (emailuser === "") {
      mensajeError.textContent = "Correo electronico vacio";
      return false;
  }else if (emailvalido.test(email.value) ){
  }else{
      alert('Ingrese un correo electronico valido');
      return false;
  }

  if(numerouser === ""){
    mensajeError.textContent = "Numero telefonico vacio";
    return false;
  }else if (numerovalido.test(numero.value)){
  }else{
    alert('Ingrese un numero telefonico valido');
    return false;
  }

  if(pro == ""){
    mensajeError.textContent = "Carrera vacio";
    return false;
  }else if(pro.length>4){
  }else{
    mensajeError.textContent = "Carrera invalida";
    return false;
  }

  if(facultad == ""){
    mensajeError.textContent = "Facultad vacia";
    return false;
  }else if(facultad.length>4){
  }else{
    mensajeError.textContent = "Facultad invalida";
    return false;
  }

  
  if(password1 == "" && password2 == ""){
    mensajeError.textContent = "Contraseñas vacias";
    return false;
  }else if(passworduser.value != passworduser2.value){
    mensajeError.textContent = "Contraseñas no coinciden";
    return false;
  }else{
    //mensajeError.textContent("Contraseñas correctas");
  }

  if (contraseñavalida.test(passworduser.value)){
  }else{
    mensajeError.textContent = "La contraseña debe ser de 4 a 12 digitos";
    return false;
  }

  if (!terminosYcondiciones.checked) {
    mensajeError.textContent = "Acepte terminos y condiciones";
    return false;}
    else{
      alert("Registro exitoso");
    }
}

function validarSuscripcion(){
  var correofoo = document.getElementById("correo-footer").value;
  var correo = document.getElementById('correo-footer');
  var correoValido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if (correofoo === "") {
    alert('Correo electronico vacio');
    return false;
  }else if (correoValido.test(correo.value) ){
    alert('Suscripcion exitosa');
    return false;
  }else{
    alert('Ingrese un correo electronico valido');
    return false;
 } 
}

//Abrir enlaces en una nueva pestaña
const enlace1 = document.getElementById("mienlace1");
     console.error("Error causado por que en las otras paginas no tengo links, en acerca de no ocurre");
     enlace1.href="#";
     enlace1.addEventListener('click', function(){
        window.open('https://www.facebook.com','_blank');
});

const enlace2 = document.getElementById("mienlace2");
     enlace2.href="#";
     enlace2.addEventListener('click', function(){
        window.open('https://twitter.com','_blank');
});

const enlace3 = document.getElementById("mienlace3");
     enlace3.href="#";
     enlace3.addEventListener('click', function(){
        window.open('https://www.instagram.com','_blank');
});