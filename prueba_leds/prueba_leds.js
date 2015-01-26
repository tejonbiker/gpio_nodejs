//Script sencillo para prender los leds sin ningun patron
//No se te olvide instalar pidriver con:
//$ [sudo] npm install pidriver

var pi=require('pidriver');

var led_array = [new pi.Gpio('GPIO4',{mode: pi.OUTPUT}),
		new pi.Gpio('GPIO17',{mode: pi.OUTPUT}),
		new pi.Gpio('GPIO27',{mode: pi.OUTPUT}),
		new pi.Gpio('GPIO22',{mode: pi.OUTPUT}),
		new pi.Gpio('GPIO18',{mode: pi.OUTPUT}),
		new pi.Gpio('GPIO23',{mode: pi.OUTPUT}),
		new pi.Gpio('GPIO24',{mode: pi.OUTPUT}),
		new pi.Gpio('GPIO25',{mode: pi.OUTPUT})];

for(i=0;i<8;i++)
{
	led_array[i].down();
}

var current_led=0;

setInterval(function() {

	if(current_led<=7)
	{
		led_array[current_led].up();
	}

	current_led++;

	if(current_led>8)
	{

		for(i=0;i<8;i++)
		{
        		led_array[i].down();
		}
		process.exit(1);
	}
},1000);




