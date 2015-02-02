/*
	Federico Ramos, Fedebro de 2015
	@tejonbiker
*/

//Script sencillo para prender los leds al estilo el auto fantastico
//No se te olvide instalar pidriver con:
//$ [sudo] npm install pidriver

//Cargamos el modulode GPIO
var pi=require('pidriver');

//Guardamos en un arreglo las clases por las cuales vamos a acceder
//a los GPIOs:
//		'GPIO17' : pin a controlar
//		 mode    : Puede ser salida, entrada, pullup o pulldown 


var led_array = [new pi.Gpio('GPIO22',{mode: pi.OUTPUT}),
                new pi.Gpio('GPIO27',{mode: pi.OUTPUT}),
                new pi.Gpio('GPIO17',{mode: pi.OUTPUT}),
                new pi.Gpio('GPIO4',{mode: pi.OUTPUT}),
                new pi.Gpio('GPIO25',{mode: pi.OUTPUT}),
                new pi.Gpio('GPIO24',{mode: pi.OUTPUT}),
                new pi.Gpio('GPIO23',{mode: pi.OUTPUT}),
                new pi.Gpio('GPIO18',{mode: pi.OUTPUT})];

//Ponemos todos los GPIOs a cero
for(i=0;i<led_array.length;i++)
{
	led_array[i].down();
}


//Variable para almacenar el LED actual
var current_led=0;
var left=0;

//Agregamos un "Timer", un callback (funcion de respuesta)
//Que es llamado cuando ocurre un evento, en este caso, la funcion
//es llamada cada cierto tiempo indicado por el segundo 
//parametro de setInterval (milisegundos)
setInterval(function() {

	//Pon a cero todos los LEDs
        for(i=0;i<led_array.length;i++)
        {
           led_array[i].down();
        }


	if(left==0) //Vamos hacia la derecha?
	{
	   current_led++; //Desplaza hacia la derecha

	   if(current_led>=7) //Llegamos al limite derecho?
	   {
		left=1; //Cambia el sentido
	   }

	}
	else //Vamos hacia la izquierda
        {
           current_led--; //Desplaza hacia la izquierda

           if(current_led==0) //Llegamos al limite izquierdo?
           {
                left=0; //Cambia el sentido
           }

        }

	led_array[current_led].up(); //Enciende el el correspondiente

},1000);
