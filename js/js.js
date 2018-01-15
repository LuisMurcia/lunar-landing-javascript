
//ENTORNO
var g = 1.622;
var dt = 0.016683;
var timer = null;
var timerFuel = null;
//NAVE
var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var c = 100;
var a = g; //la aceleraciÃ³n cambia cuando se enciende el motor de a=g a a=-g (simplificado)
//MARCADORES
var velocidad = null;
var altura = null;
var combustible = null;
var aterrizado = false;
//al cargar por completo la pÃ¡gina...
window.onload = function () {

//para realizar el botón de versión móvil
    function tocarBoton() {
            if ('ontouchstart' in window) {
                document.getElementById("press").style.display = "inline-block";
            }
        }

        tocarBoton();
        var botonM = document.getElementById("press");
        botonM.addEventListener("touchstart", pulsar, false);
        botonM.addEventListener("touchend", soltar, false);
        function pulsar(event) {
            motorOn();
        }
        function soltar(event) {
            motorOff();
        }


        velocidad = document.getElementById("velocidad");
        altura = document.getElementById("altura");
        combustible = document.getElementById("fuel");
        //Pausar el juego
        document.getElementById("play").onclick = function () {
            pause();
        };
        //Retomar el juego
        document.getElementById("pause").onclick = function () {
            play();
        };
        //Reiniciar el juego
        document.getElementById("reset").onclick = function () {
            reset();
        };
        //Abrir instrucciones del juego
        document.getElementById("help").onclick = function () {
            mostrarAyuda();
        };
        //Cerrar instrucciones del juego
        document.getElementById("cerrarA").onclick = function () {
            cerrarAyuda();
        };
        //Cerrar ventana de victoria
        document.getElementById("cerrar1").onclick = function () {
            cerrarVictoria();
        };
        //Cerrar ventana de derrota
        document.getElementById("cerrar2").onclick = function () {
            cerrarDerrota();
        };
        document.getElementById("menu").onclick = function () {
            mostrarDesplegable();
        };
        document.getElementById("playM").onclick = function () {
            cerrarDesplegable();
        };
        document.getElementById("resetM").onclick = function () {
            resetM();
        };
        document.getElementById("helpM").onclick = function () {
            mostrarAyudaM();
        };
        document.getElementById("cerrarAM").onclick = function () {
            cerrarAyudaM();
        };
        document.getElementById("cerrar1M").onclick = function () {
            cerrarVictoriaM();
        };
        document.getElementById("cerrar2M").onclick = function () {
            cerrarDerrotaM();
        };
        //definiciÃ³n de eventos
        //encender/apagar al apretar/soltar una tecla
        document.onkeydown = motorOn;
        document.onkeyup = motorOff;
        //Empezar a mover la nave justo despuÃ©s de cargar la pÃ¡gina
        start();
    }
    ;
//DefiniciÃ³n de funciones
    function start() {
        //cada intervalo de tiempo mueve la nave
        timer = setInterval(function () {
            moverNave();
        }, dt * 1000);
    }

    function stop() {
        clearInterval(timer);
    }

    function moverNave() {
//cambiar velocidad y posicion
        v += a * dt;
        y += v * dt;
        //actualizar marcadores
        velocidad.innerHTML = v.toFixed(2);
        altura.innerHTML = (70 - y).toFixed(2);
        if (v > 5) {
            document.getElementById("pVelocidad").style.background = "#FF471A"; //para que el indicador de velocidad se ponga rojo cuando supera los 5 m/s
        } else {
            document.getElementById("pVelocidad").style.background = "#66FF33";
        }
//mover hasta que top sea un 70% de la pantalla
        if (y < 70) {
            document.getElementById("nave").style.top = y + "%";
        } else {
            stop();
            aterrizado = true;
            altura.innerHTML = 0; //así el indicador de altura no marcará valores de 0 con algún decimal
            if (v < 5) {
                mostrarVictoria();
            } else {
                mostrarDerrota();
            }
        }
    }

    function motorOn() {
        if (aterrizado == true || c == 0) {
            motorOff();
            //el motor da aceleraciÃ³n a la nave
        } else {
            a = -g;
            //mientras el motor estÃ© activado gasta combustible
            if (timerFuel == null)
                timerFuel = setInterval(function () {
                    actualizarFuel();
                }, 10);
            document.getElementById("imgNave").src = "img/nave2.gif";
        }
    }
    function motorOff() {
        a = g;
        clearInterval(timerFuel);
        timerFuel = null;
        document.getElementById("imgNave").src = "img/nave.png";
    }
    function actualizarFuel() {
//Restamos combustible hasta que se agota
        c -= 0.1;
        if (c < 0)
            c = 0;
        document.getElementById("fuel").style.width = c + "%";
    }
    function pause() {
        stop();
        document.getElementById("play").style.display = "none";
        document.getElementById("pause").style.display = "inline-block";
        aterrizado = true; //para que no sea posible gastar combustible mientras el juego se encuentra pausado
    }
    function play() {
        start();
        document.getElementById("pause").style.display = "none";
        document.getElementById("play").style.display = "inline-block";
        aterrizado = false;
    }
    function reset() {
        y = 10;
        v = 0;
        c = 100;
        a = g;
        g = 1.622;
        dt = 0.016683;
        clearInterval(timer);
        play();
        aterrizado = false;
        document.getElementById("fuel").style.width = 100 + "%"; //para que se visualice correctamente el contenido de fuel en reiniciar el juego
    }
    function mostrarAyuda() {
        stop();
        aterrizado = true; //para que no sea posible gastar combustible mientras esté abierta la ventana de instrucciones
        document.getElementById("ayuda").style.display = "block";
        document.getElementById("play").style.display = "none";
        document.getElementById("reset").style.display = "none";
        document.getElementById("help").style.display = "none";
        document.getElementById("pause").style.display = "none";
    }
    function cerrarAyuda() {
        play();
        document.getElementById("ayuda").style.display = "none";
        document.getElementById("play").style.display = "inline-block";
        document.getElementById("reset").style.display = "inline-block";
        document.getElementById("help").style.display = "inline-block";
        aterrizado = false;
    }
    function mostrarVictoria() {
        document.getElementById("final1").style.display = "block";
        document.getElementById("celebracion").style.display = "block";
        document.getElementById("play").style.display = "none";
        document.getElementById("reset").style.display = "none";
        document.getElementById("help").style.display = "none";
        document.getElementById("menu").style.display = "none"; //para que no se visualice el desplegable en la versión de móvil
    }
    function cerrarVictoria() {
        reset();
        document.getElementById("final1").style.display = "none";
        document.getElementById("celebracion").style.display = "none";
        document.getElementById("play").style.display = "inline-block";
        document.getElementById("reset").style.display = "inline-block";
        document.getElementById("help").style.display = "inline-block";
    }
    function mostrarDerrota() {
        document.getElementById("final2").style.display = "block";
        document.getElementById("explosion").style.display = "block";
        document.getElementById("play").style.display = "none";
        document.getElementById("reset").style.display = "none";
        document.getElementById("help").style.display = "none";
        document.getElementById("menu").style.display = "none"; //para que no se visualice el desplegable en la versión de móvil
    }
    function cerrarDerrota() {
        reset();
        document.getElementById("final2").style.display = "none";
        document.getElementById("explosion").style.display = "none";
        document.getElementById("play").style.display = "inline-block";
        document.getElementById("reset").style.display = "inline-block";
        document.getElementById("help").style.display = "inline-block";
    }
    function mostrarDesplegable() {
        stop();
        aterrizado = true;
        document.getElementById("opciones").style.display = "block";
        document.getElementById("menu").style.display = "none";
    }
    function cerrarDesplegable() {
        play();
        aterrizado = false;
        document.getElementById("play").style.display = "none"; //si no lo devolvemos a "none" al activar la función "play" la id pasa a "display: inline-block"
        document.getElementById("opciones").style.display = "none";
        document.getElementById("menu").style.display = "block";
    }
    function resetM() {
        y = 10;
        v = 0;
        c = 100;
        a = g;
        g = 1.622;
        dt = 0.016683;
        clearInterval(timer);
        play();
        aterrizado = false;
        document.getElementById("fuel").style.width = 100 + "%"; //para que se visualice correctamente el contenido de fuel en reiniciar el juego
        document.getElementById("play").style.display = "none"; //si no lo devolvemos a "none", al hacer reset se activa la función "play" y la id pasa a "display: inline-block"
        document.getElementById("opciones").style.display = "none";
        document.getElementById("menu").style.display = "block";
    }
    function mostrarAyudaM() {
        stop();
        aterrizado = true; //para que no sea posible gastar combustible mientras esté abierta la ventana de instrucciones
        document.getElementById("ayuda").style.display = "block";
        document.getElementById("menu").style.display = "none";
        document.getElementById("opciones").style.display = "none";
    }
    function cerrarAyudaM() {
        play();
        document.getElementById("play").style.display = "none"; //si no lo devolvemos a "none" al activar la función "play" la id pasa a "display: inline-block"
        document.getElementById("ayuda").style.display = "none";
        document.getElementById("menu").style.display = "block";
    }
    function cerrarVictoriaM() {
        reset();
        document.getElementById("final1").style.display = "none";
        document.getElementById("celebracion").style.display = "none";
        document.getElementById("play").style.display = "none"; //si no lo devolvemos a "none", al hacer reset se activa la función "play" y la id pasa a "display: inline-block"
        document.getElementById("menu").style.display = "block";
    }
    function cerrarDerrotaM() {
        reset();
        document.getElementById("final2").style.display = "none";
        document.getElementById("explosion").style.display = "none";
        document.getElementById("play").style.display = "none"; //si no lo devolvemos a "none", al hacer reset se activa la función "play" y la id pasa a "display: inline-block"
        document.getElementById("menu").style.display = "block";
    }