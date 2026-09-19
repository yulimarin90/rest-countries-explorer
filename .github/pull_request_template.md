## Requisito relacionado

RF01-listado- Yuli

## Descripción

* Implementar un listado de países consumiendo la API Rest Countries.
* Debe mostrar al menos 20 países.
* Cada país debe mostrar mínimo 3 datos distintos.

## Cambios realizados

* Se implementó el consumo de la API Rest Countries.
* Se organizó la información recibida para mostrar el listado de países.
* Se muestran diferentes datos de cada país, como nombre, región, capital y lenguaje

## Qué se intentó primero y qué pasó

* Primero revise la respuesta que entregaba la API para identificar cómo venía organizada la información y qué campos podían utilizarse.
* Al principio la respuesta no era una lista simple de nombres, por lo que se tuvo en cuenta el tipo de dato (string, arreglo, arreglo de objetos), por lo tanto se inicio creando el archivo country.ts con esa estructura
*Luego se hizo el archivo de service para conectarnos con Rest countries.
* Finalmente se adaptó el código de los archivos de la carpeta components y feature, donde se respeto las condiciones tecnicas para traer la información y mostrarla.

## Que error o comportamiento inesperado obtuve (mensaje exacto)
*Los mensajes de error que obtuve realizando este modulo fue porque no reconocia algunas propiedades al intentar acceder

"Property 'common' does not exist on type "

## Decisión final
La propiedad common se encontraba dentro de name, por lo que no podía accederse directamente desde el objeto principal.

Finalmente se accedió a la información siguiendo la estructura correspondiente: name.common solucionando el error.


## Pruebas realizadas -> por sebastian

* Se validó que el listado contiene 20 países o más.
* Se validó que cada país contiene mínimo 3 datos diferentes.
* Se revisó que la información mostrada proviene de la API.
* Se verificó que los datos se muestran correctamente en la interfaz.

## Checklist

* [x] El código funciona correctamente
* [x] Se probaron los casos principales
* [x] No se agregaron errores de TypeScript
* [x] Se respetan los criterios de aceptación

-------------------------------------------------------------

## Requisito relacionado - Sebastian

RF02-estados

## Descripción

* Implementar los diferentes estados de la interfaz al consultar la API Rest Countries.
* Estados: cargando, error, sin resultados y éxito.

## Cambios realizados

* Se implementaron los estados necesarios para representar las diferentes situaciones durante la consulta de la API.
* Se agregó el estado de carga mientras se obtiene la información.
* Se agregó el manejo de errores cuando la consulta no puede completarse.
* Se agregó el manejo del caso en el que no se encuentran resultados.

## Qué se intentó primero y qué pasó

Primero se implementó la consulta a la API y se retornó directamente la lista obtenida mediante result.data.objects.

Para manejar el caso en el que no hubiera países, inicialmente se agregó un segundo return [] después del retorno de la lista.

## Que error o comportamiento inesperado obtuve (mensaje exacto)
El problema fue que el código tenía dos retornos consecutivos:

return result.data.objects
return [] // estado no se encontraron resultados

El segundo return [] nunca llegaba a ejecutarse, ya que la función terminaba en el primer return.

Por esta razón, el estado de “sin resultados” no se podía controlar de esa manera.

## Decisión final
Finalmente se decidió manejar el estado de “sin resultados” desde la lógica que consume la respuesta de la API, verificando si la lista obtenida contiene elementos antes de mostrar el listado.

Se descartó utilizar un segundo return después de return result.data.objects, porque ese código no permite diferenciar correctamente entre una lista vacía y una respuesta exitosa con datos.

También se mantuvo el manejo independiente de los estados de cargando, error, sin resultados y éxito, para que cada situación tenga su propio comportamiento en la interfaz.

## Pruebas realizadas -> yuli

* Se validó el estado de carga mientras se realiza la consulta.
* Se validó el estado de error cuando la petición falla.
* Se validó el mensaje cuando no existen resultados.
* Se verificó que el listado se muestre correctamente cuando la consulta es exitosa.

## Checklist

* [x] El código funciona correctamente
* [x] Se probaron los casos principales
* [x] No se agregaron errores de TypeScript
* [x] Se respetan los criterios de aceptación

------------------------------------------------------------------

## Requisito relacionado- Yuli

RF03-búsqueda 

## Descripción

* Implementar un campo de búsqueda para filtrar países utilizando la información de la API.
* El campo debe ser controlado.
* Debe tener un retardo de 400 ms.
* Se debe utilizar `setTimeout` dentro de `useEffect`.
* Debe mostrar un mensaje cuando no existan resultados.

## Cambios realizados

* Se implementó el campo de búsqueda controlado.
* Se agregó el retardo de 400 ms utilizando `setTimeout` dentro de `useEffect`.
* Se corrigió una variable que estaba ocasionando problemas al realizar el filtro.
* Se cambió la clave de autorización para manejarla desde el archivo `.env` en lugar de dejarla directamente en el código.

## Qué se intentó primero y qué pasó

Primero implemente el campo de búsqueda para filtrar los países a partir del texto ingresado por el usuario. Se utilizó el valor del campo para realizar el filtro después del retardo establecido.

## Error o comportamiento inesperado

Durante las primeras pruebas, al escribir el nombre de un país que sí existía, el país no aparecía en los resultados.

Cuando se buscaba un país que no existía, tampoco se mostraba correctamente el mensaje correspondiente de “no se encontraron resultados”.

Por lo tanto, el filtro no estaba funcionando correctamente en ninguno de los dos escenarios: ni cuando el país existía ni cuando no había coincidencias.

El problema estaba relacionado con una variable utilizada en la lógica del filtro, que estaba ocasionando que la búsqueda no comparara correctamente la información.

## Qué se decidió finalmente y qué alternativa se descartó

Se revisó la lógica utilizada para realizar el filtro y se corrigió la variable que estaba generando el problema (country- la tenia en mayuscula "Country").

Después de realizar el ajuste, se verificó la búsqueda utilizando nombres de países con mayúsculas y minúsculas y se comprobó que, cuando no existe coincidencia, se muestra el mensaje correspondiente.

## Pruebas realizadas -> Sebastian

* Se validó la búsqueda utilizando nombres de países en mayúsculas y minúsculas.
* Se verificó que el filtro funciona después del retardo establecido.
* Se validó el mensaje cuando no existe un país que coincida con la búsqueda.
* Se revisó que la clave de autorización se obtiene desde el archivo `.env`.
* Se verificó que el código cumple con el uso de `setTimeout` dentro de `useEffect`.

## Checklist

* [x] El código funciona correctamente
* [x] Se probaron los casos principales
* [x] No se agregaron errores de TypeScript
* [x] Se respetan los criterios de aceptación

------------------------------------------------------------------

## Requisito relacionado Sebastian

RF04-detalle

## Descripción

* Implementar una vista de detalle que permita consultar información adicional.
* Permitir seleccionar un país desde el listado.
* Mostrar información adicional del país seleccionado.
* Presentar los datos de forma clara y organizada.
* Incluir una opción para regresar al menú principal.

## Cambios realizados

* Se implementó la selección de un país desde el listado.
* Se creó la vista para mostrar información adicional del país seleccionado.
* Se agregó la opción para regresar al listado principal.
* Se organizó la información del detalle para facilitar su lectura.

## Qué se intentó primero y qué pasó

* Primero se intentó mostrar la información adicional directamente dentro del listado de países.
* Al probar esta opción, la información general y la información adicional quedaban mezcladas y la interfaz se veía más cargada.

## Error o comportamiento inesperado

El comportamiento inesperado en esta caso fue unicamente lo visual

## Qué se decidió finalmente y qué alternativa se descartó
* Finalmente se decidió separar la información del país seleccionado en una vista de detalle.
* Se descartó mostrar toda la información directamente en las tarjetas del listado para mantener la vista principal más organizada.

## Pruebas realizadas -> Yuli

* Se validó que se pueda seleccionar un país.
* Se verificó que la información adicional corresponda al país seleccionado.
* Se validó que los datos se muestren de forma organizada.
* Se verificó la opción para regresar al listado principal.

## Checklist

* [x] El código funciona correctamente
* [x] Se probaron los casos principales
* [x] No se agregaron errores de TypeScript
* [x] Se respetan los criterios de aceptación

------------------------------------------------

## Requisito relacionado - Yuli

RF05-favoritos

## Descripción

* Implementar la funcionalidad para marcar y desmarcar países.
* Agregar y quitar países de favoritos.
* Mostrar el contador de favoritos.
* Mantener los favoritos mediante LocalStorage.
* Conservar los favoritos después de recargar la página.

## Cambios realizados

* Se implementó la opción para marcar un país como favorito.
* Se agregó la opción para quitar un país de favoritos.
* Se agregó el contador de países favoritos.
* Se implementó la persistencia utilizando `localStorage`.

## Qué se intentó primero y qué pasó

* Primero se manejaron los favoritos únicamente mediante el estado de la aplicación.

## Error o comportamiento inesperado

* No se mostró un mensaje de error específico; el comportamiento inesperado fue que al recargar la página los favoritos se perdían.


## Qué se decidió finalmente y qué alternativa se descartó
* Finalmente se utilizo `localStorage` para guardar los favoritos y recuperarlos nuevamente al cargar la aplicación como nos especificaba el pdf
* Se descartó mantener los favoritos solamente en el estado porque no permitía cumplir con la persistencia.

## Pruebas realizadas -> sebastian

* Se validó que un país pueda agregarse a favoritos.
* Se verificó que un país pueda quitarse de favoritos.
* Se validó que el contador se actualice correctamente.
* Se recargó la página y se verificó que los favoritos permanezcan.
* Se revisó que los favoritos almacenados puedan recuperarse correctamente.

## Checklist

* [x] El código funciona correctamente
* [x] Se probaron los casos principales
* [x] No se agregaron errores de TypeScript
* [x] Se respetan los criterios de aceptación

---

## Requisito relacionado sebastian

RF06-reintento

## Descripción

* Implementar una opción para reintentar la consulta a la API cuando ocurra un error.
* El reintento debe ejecutarse sin recargar la página.
* Se debe actualizar nuevamente el estado de carga.
* Si la consulta funciona, debe mostrarse nuevamente el listado.
* Si vuelve a fallar, debe mantenerse el mensaje de error.

## Cambios realizados

* Se agregó la opción para volver a realizar la consulta cuando ocurre un error.
* El reintento se realiza desde la misma interfaz sin necesidad de recargar la página.
* Se actualiza nuevamente el estado de carga al realizar el reintento.

## Qué se intentó primero y qué pasó

* Primero se manejó el error mostrando únicamente el mensaje correspondiente cuando la consulta fallaba.
* Al realizar la revisión evidencie que, después del error, no había una opción para volver a realizar la consulta sin recargar la página.
* Finalmente se agregó un botón de reintento que vuelve a ejecutar la consulta y actualiza nuevamente el estado de carga.
* Se descartó depender de la recarga manual de la página, ya que el requisito solicita que el usuario pueda realizar el reintento desde la interfaz.

## Pruebas realizadas - Yuli

* Se validó que el botón de reintento aparezca cuando ocurre un error.
* Se verificó que la consulta se ejecute nuevamente sin recargar la página.
* Se validó que aparezca nuevamente el estado de carga durante el reintento.
* Se verificó que el listado aparezca cuando el segundo intento es exitoso.
* Se validó que el mensaje de error permanezca cuando el segundo intento también falla.

## Checklist

* [x] El código funciona correctamente
* [x] Se probaron los casos principales
* [x] No se agregaron errores de TypeScript
* [x] Se respetan los criterios de aceptación
