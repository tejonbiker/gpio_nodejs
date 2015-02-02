/*
	Federico Ramos, Fedebro de 2015
	@tejonbiker
*/

//Script sencillo para prender los leds sin ningun patron
//No se te olvide instalar pidriver con:
//$ [sudo] npm install pidriver

//Cargamos el modulode GPIO
var pi=require('pidriver');

//Guardamos en un arreglo las clases por las cuales vamos a acceder
//a los GPIOs:
//		'GPIO17' : pin a controlar
//		 mode    : Puede ser salida, entrada, pullup o pulldown 
var led_array = [new pi.Gpio('GPIO4',{mode: pi.OUTPUT}),
		new pi.Gpio('GPIO17',{mode: pi.OUTPUT}),
		new pi.Gpio('GPIO27',{mode: pi.OUTPUT}),
		new pi.Gpio('GPIO22',{mode: pi.OUTPUT}),
		new pi.Gpio('GPIO18',{mode: pi.OUTPUT}),
		new pi.Gpio('GPIO23',{mode: pi.OUTPUT}),
		new pi.Gpio('GPIO24',{mode: pi.OUTPUT}),
		new pi.Gpio('GPIO25',{mode: pi.OUTPUT})];


//Ponemos todos los GPIOs a cero
for(i=0;i<8;i++)
{
	led_array[i].down();
}


//Variable para almacenar el LED actual
var current_led=0;

//Agregamos un "Timer", un callback (funcion de respuesta)
//Que es llamado cuando ocurre un evento, en este caso, la funcion
//es llamada cada cierto tiempo indicado por el segundo 
//parametro de setInterval (milisegundos)
setInterval(function() {

	//Enciende el led indicado por el contador
	if(current_led<led_array.length)
	{
		led_array[current_led].up();
	}

	//Muevete al siguiente led
	current_led++;

	//Hemos sobre pasado el maximo de LEDs?
	if(current_led>led_array.length)
	{
		//Pon a cero todos los LEDs
		for(i=0;i<led_array.length;i++)
		{
        		led_array[i].down();
		}

		//Reinicia el contador de LEDs
		current_led=0;
	}
},1000);
