// credencialoes maestras para realizar prueba
var futboleros=[{"Nombre":"Danilo","Password":"123"},{"Nombre":"Paula","Password":"456"}]
console.log(futboleros)


function validar_user(){   // funcion que se ejecuta cuando se oprime el boton "Sign in" que se encuentra en login.html

	var sw=false
	// los datos suministrados por el usuario se guardan en variables 
	var nombre=document.getElementById('txt_user').value
	var pass=document.getElementById('txt_Password').value
	// se comparan los datos suministrados con las credenciales maestras
	futboleros.forEach(function(x){
			if (x.Nombre==nombre && x.Password==pass) 
			{
				location.href='https://www.colombia.com/futbol/equipos/'
				sw =true
			}

			})

		if(sw==false)
		{
			alert("El usuario no existe/ Credenciales usuario y/o Password incorrectos  ")


		}

}


function Registrar()   // es la funcion que se invoca cuando se pulsa el boton que dice Ir a Registro en el onclick de login.html
{

location.href='index.html'   // es un enlace a "index.html"

}