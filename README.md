# Lunar lander con html, css y javascript
Versión esqueleto del juego Lunar Landing que incluye:

* Html con los elementos básicos del juego
* Css: d.css y m.css dos versiones que cargan mediante media query dependiendo del tamaño de pantalla.
* Js: programación realista básica necesaria para dejar caer la nave y parar cuando llega a un límite. Actualiza la velocidad y la altura en %/s y % (1% de pantalla = 1 metro).
* No dispone de imágenes.

Previsualización: https://rawgit.com/urbinapro/lunar-landing-javascript/master/index.html

Tareas a desarrollar:
* Ponerlo bonito según vuestro diseño anterior. No te olvides de optimizar las imágenes. Recuerda que se pueden cargar diferentes tamaños y formas de fondos en función del dispositivo usando css.
* Poner los menús (móvil y escritorio) según vuestro diseño anterior.
* Al pulsar una tecla, hacer click en el botón de power o bien hacer click en la pantalla la nave debe cambiar de aspecto a *nave con motor encendido* y debe cambiar la aceleración de g a -g (ejecutar motorOn).
* Opcionalmente se pueden disponer de menores o mayores tanques de combustible para aumentar o disminuir la dificultad del juego.
* Al tocar fondo debe mirarse si la velocidad de impacto es inferior a un valor umbral, en caso afirmativo mostrar mensaje de felicitación, en caso negativo explotar la nave. En ambos casos el juego finaliza y puede reiniciarse con la opción del menú *reiniciar*
* Debes poder elegir diferentes valores umbrales: 1m/s en modo difícil, 5m/s en modo muy fácil.
* Debe haber una página de *How to play* y una página de *About* accesibles desde el menú (vas a otras páginas saliendo del juego con un avisador o mensaje de comfirmación de que sales de la partida).

Cualquier otra funcionalidad o cambio debe quedar debidamente documentado.

**Este repositorio es susceptible de sufrir modificaciones sin previo aviso**


Versión final Lunar Lander incluido en ella el Javascript
**¡Pruébalo!:**


**Documentación:**
* La página web se adapta a todo tipo de dispositivos (es responsive).

**Opciones:**
* Play/Pause: en cargar la página directamente el juego se inciará. Mediante estos botones, implementadas sus funciones en el Js, nos será posible pausar y reanudar el juego siempre que queramos. En la versión para móvil, en pulsar el desplegable, automáticamente se pausará la partida.
* Reset: se nos iniciará la partida de nuevo desde el principio. Esto ha sido implementado en el Js.
* Help: cuando pulsemos en la opción de *Help* se pausará el juego y se abrirá un div con la explicación del objetivo del Lunar Lander y de cómo llevarlo a cabo. Para retomar la partida por dónde la habíamos dejado, he creado un button *Continuar la partida* que, con Js, le he dado la funcionalidad de volver a la partida allí dónde la dejamos previamente.

**Paneles:**
* Altura y velocidad: son un div cada uno que indican la velocidad a la que se mueve la nave y a la altura que se encuentra respecto del suelo. Esto ha sido implementado mediante Js y, además, al div de velocidad le he dado la condición de que cambie de color su fondo a rojo cuando la velocidad de caída sea superior a los 5 m/s; así el usuario puede visualizar con más facilidad si su velocidad es demasiado elevada.
* Fuel: se trata de un div dentro de otro para que ,mediante Js, el div interior se adapte de manera directamente proporcional a la cantidad de combustible que le queda a la nave.

**Victoria/Derrota:**
* Se tratan de 3 divs para dar un aspecto visual más agradable, uno dentro de otro, que muestran un mensaje de felicitación si el usuario aterriza a una velocidad inferior a los 5 m/s o, de lo contrario, de derrota si aterriza a una velocidad mayor. Además dentro de cada mensaje hay un button *Volver a jugar* para que el usuario reinicie el juego si gusta de hacerlo.

**Aspectos a tener en cuenta**
* He cambiado la nave y el funcionamiento general de todo el proyecto.
* He minimificado el código en una rama nueva *Lunar minimificado*.
* Botón táctil para dispositivos móviles
* Cada vez que se pase 
