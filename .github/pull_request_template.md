## Requisito relacionado
RF01-listado

## Descripción
- Implementar un listado de paises consumiendo la API Rest Countries, debe de mostrar al menos 20 cada uno con datos 3 datos distintos como minimo.


## Cambios realizados
- N/A

## Pruebas realizadas
- Se valida que cada pais contiene minimo 3 datos.
- Se valida que la lista contiene 20 paises o mas.
- se valida en el codigo que la informacion proviene de la API.

## Checklist
- [X] El código funciona correctamente
- [X] Se probaron los casos principales
- [X] No se agregaron errores de TypeScript
- [X] Se respetan los criterios de aceptación

## Requisito relacionado
RF02-estados

## Descripción
- Implementar los diferentes estados de la interfaz al consultar la API Rest Countries.
- Estados: cargando, error, sin resultados y exito.


## Cambios realizados
- 

## Pruebas realizadas
- 

## Checklist
- [] El código funciona correctamente
- [] Se probaron los casos principales
- [] No se agregaron errores de TypeScript
- [] Se respetan los criterios de aceptación

## Requisito relacionado
RF03-busqueda

## Descripción
- Implementar un campo de busqueda para filtrar paises utilizando la informacion de la API.
- condiciones: campo de busqueda controlado, retardo de 400 ms, setTimeout detro de useEffect, mensaje no existe.


## Cambios realizados
- se hizo cambio de la clave de autorizacion para que lo tomara desde el archivo .env
- se corrige una variable corrigiendo error que no dejaba filtrar los paises

## Pruebas realizadas

- Se filtra el pais independientemente si es mayuscula o minuscula
- Se valida el mensaje de error en caso de que no exista el pais
- se valida que el codigo cumple con los item mencionados
## Checklist
- [X] El código funciona correctamente
- [X] Se probaron los casos principales
- [X] No se agregaron errores de TypeScript
- [X] Se respetan los criterios de aceptación

## Requisito relacionado
RF04-detalle

## Descripción
- Implementar una vista de detalle que permita consultar informacion adicional.
- Condiciones: seleccionar un pais de la lista, mostrar informacion adicional, datos claros y organizados, opcion de regresar al menu principal.

## Cambios realizados
- 
<!-- Que intente primero y por que no funciono 
● Que error o comportamiento inesperado obtuve (mensaje exacto) 
● Que decidi finalmente y qué alternativa descarte-->
## Pruebas realizadas
- 

## Checklist
- [] El código funciona correctamente
- [] Se probaron los casos principales
- [] No se agregaron errores de TypeScript
- [] Se respetan los criterios de aceptación

## Requisito relacionado
RF05-favoritos

## Descripción
- Implementar la funcionalidad para marcar y desmarcar paises.
- Condiciones: agrega y quita de favoritos, contados de favoritos, persistencia con LocalStorage, se mantienen despues de recargar la pagina.

## Cambios realizados
- 

## Pruebas realizadas
- 

## Checklist
- [] El código funciona correctamente
- [] Se probaron los casos principales
- [] No se agregaron errores de TypeScript
- [] Se respetan los criterios de aceptación

## Requisito relacionado
RF06-reintento

## Descripción
- Implementar una opcion para reintentar la consulta a la API cuando ocurra un error.
- Condiciones: boton de reintento cuando la peticion falle, ejecutar sin recargar, actualizar el estado de carga al reintentarlo, mostrar el listado nuevamente si es exitoso y mantener el mensaje de error si el segundo intento falla.

## Cambios realizados
- 

## Pruebas realizadas
- 

## Checklist
- [] El código funciona correctamente
- [] Se probaron los casos principales
- [] No se agregaron errores de TypeScript
- [] Se respetan los criterios de aceptación