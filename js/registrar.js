// cuando cargo el js se crea un array vacio
var futbol_usuarios=[]
console.log(futbol_usuarios) // verifico x consola el array vacio

// Creo funcion que responde al "onclick que se invoca en html"
function agregarRegistro(){
// los datos suministrados por el usuario lo guardo en variables
	var nombre=document.getElementById('txt_user').value
	var pass=document.getElementById('txt_Password').value
	var Edad=document.getElementById('txt_Edad').value

// defino estructura del objeto {"key":value,"key":value }
	var Persona={"User":nombre,"Pass":pass,"Edad":Edad}

	futbol_usuarios.push(Persona)    // cada objeto lo agrego al array creado al principio
	console.log(futbol_usuarios)    // verifico x consola como va creciendo el array
	document.getElementById('txt_user').value=""    // Funciona como un refrescar
	document.getElementById('txt_Password').value=""   // Cada vez que oprimo registrar
	document.getElementById('txt_Edad').value=""    // los campos quedan vacios

	futbol_usuarios.forEach(function(x){
		console.log(x)      // muestra cada "key":value del objeto en forma separada
		console.log(x.User)  // muestra el User solo y fuera de la "key"


	})

}

function Login()   // es la funcion que se invoca cuando se pulsa el boton que dice Ir a Login en el onclick de index.html
{

location.href='login.html'   // es como un enlace que te envia a "login.html"

}