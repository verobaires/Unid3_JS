var usuario = document.getElementById('usuario');
var password = document.getElementById('password');
var error = document.getElementById('error');
var expresion = /\w+@\w+\.+[a-z]/;
error.style.color = 'orange';




/* function enviarFormulario(){
    console.log('Enviando Formulario...'); //se deberia enviar por defecto

    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('NO OLVIDES INGRESAR TU NOMBRE ');
    }

    if(password.value === null || password.value === ''){
        mensajesError.push('NO OLVIDES PONER @');
    }

        error.innerHTML = mensajesError.join( ',   ');


     return false; //impide que el formulario se envie por defecto
}
 */
var form = document.getElementById('formulario');
    form.addEventListener('submit', function(event){
        event.preventDefault();

        var mensajesError = [];

        if(!expresion.test(usuario) || usuario.value === ''){
            mensajesError.push('NO OLVIDES PONER @ ');
        }
    
        if(password.value === null || password.value === ''){
            mensajesError.push('NO TU PASSWORD');
        }
    
            error.innerHTML = mensajesError.join( ',   ');
    


      
 
    });
 

   /*  function myFunction() {
        /* var str = "Hello world, welcome to the universe. ";
        var n = nombre.includes("@");
        document.getElementById("formulario").innerHTML = n;
      }
       */