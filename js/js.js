
//ENTORNO
var g = 1.622;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
//NAVE
var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var c = 100;
var a = g; //la aceleración cambia cuando se enciende el motor de a=g a a=-g (simplificado)
//MARCADORES
var velocidad = null;
var altura = null;
var combustible = null;
var aterrizado = false;

//al cargar por completo la página...
window.onload = function(){
	
	velocidad = document.getElementById("velocidad");
	altura = document.getElementById("altura");
	combustible = document.getElementById("fuel");
	
	//Pausar el juego
		document.getElementById("play").onclick=function(){
			pause();
			};
	//Retomar el juego
		document.getElementById("pause").onclick=function(){
			play();
		};
	//Reiniciar el juego
		document.getElementById("reset").onclick=function(){
			reset();
		};
        //Abrir instrucciones del juego
                document.getElementById("help").onclick=function(){
                        mostrarAyuda();
                }
        //Cerrar instrucciones del juego
                document.getElementById("cerrar").onclick=function(){
                        cerrarAyuda();
                }
		
	
	//definición de eventos
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
	
	//Empezar a mover la nave justo después de cargar la página
	start();
}

//Definición de funciones
function start(){
	//cada intervalo de tiempo mueve la nave
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
}

function moverNave(){
	//cambiar velocidad y posicion
	v +=a*dt;
	y +=v*dt;
	//actualizar marcadores
	velocidad.innerHTML=v.toFixed(2);
	altura.innerHTML=y.toFixed(2);
	
        if (v>5){
                document.getElementById("pVelocidad").style.background = "#FF471A"; 
        }else{
                document.getElementById("pVelocidad").style.background = "#66FF33"; 

        }
	//mover hasta que top sea un 70% de la pantalla
	if (y<70){ 
		document.getElementById("nave").style.top = y+"%"; 
	} else { 
		stop();
                aterrizado = true;
                
                /*if (v<5){
                   mostrarVictoria();
                 }else{
                   mostrarDerrota();
                }
                }*/
	}
}
function motorOn(){
        if (aterrizado == true || c==0){
            motorOff();
	//el motor da aceleración a la nave
        }else{
        a=-g;
	//mientras el motor esté activado gasta combustible
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarFuel(); }, 10);
        document.getElementById("imgNave").src = "img/nave2.gif";
        }
}
function motorOff(){
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;
        document.getElementById("imgNave").src = "img/nave.png";
}
function actualizarFuel(){
	//Restamos combustible hasta que se agota
	c-=0.1;
	if (c < 0 ) c = 0;
        document.getElementById("fuel").style.width = c+"%";
}
function pause(){
	stop();	
	document.getElementById("play").style.display = "none";
	document.getElementById("pause").style.display = "inline-block";
}
function play(){
	start();
	document.getElementById("pause").style.display = "none";
	document.getElementById("play").style.display = "inline-block";
}
function reset(){
        y = 10;
        v = 0;
        c = 100;
        a = g;
        g = 1.622;
        dt = 0.016683;
        clearInterval(timer);
        play();
        aterrizado = false;
        document.getElementById("fuel").style.width = 100+"%";
}
function mostrarAyuda(){
        stop();
        document.getElementById("ayuda").style.display = "block";
        document.getElementById("play").style.display = "none";
        document.getElementById("reset").style.display = "none";
        document.getElementById("help").style.display = "none";
}
function cerrarAyuda(){
        play();
        document.getElementById("ayuda").style.display = "none";
        document.getElementById("play").style.display = "inline-block";
        document.getElementById("reset").style.display = "inline-block";
        document.getElementById("help").style.display = "inline-block";
}