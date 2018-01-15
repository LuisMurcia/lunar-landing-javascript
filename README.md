# Lunar lander con html, css y javascript
Versión final Lunar Lander incluido en ella el Javascript.
**¡Pruébalo!:**
* https://rawgit.com/LuisMurcia/lunar-landing-javascript/master/index.html

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
* Botón táctil para dispositivos móviles: funciona al igual que la pulsación de un tecla de la computadora; cuando se deja de clickar el motor se apaga el motor y comienza la desaceleración.
* Cada vez que se pase de un dispositivo de resolución móvil a uno de resolución de pantalla completa, se debe reiniciar el juego porque si no pueden darse diferentes tipos de *bugs*.
* Todas las imágenes han sido comprimidas.
