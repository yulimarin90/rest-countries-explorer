# REST Countries Explorer

Aplicación web desarrollada con **React + TypeScript + Vite** que consume la API de REST Countries para consultar información de países.

El proyecto permite visualizar países, consultar su información, realizar búsquedas, consultar el detalle de un país, gestionar favoritos y manejar diferentes estados de la interfaz.

## Tecnologías utilizadas

* React
* TypeScript
* Vite
* CSS
* REST Countries API
* Fetch API
* React Router
* LocalStorage

## Requisitos previos

Antes de ejecutar el proyecto es necesario tener instalado:

* **Node.js** versión 18 o superior.
* **npm** incluido con Node.js.
* **Git** para clonar el repositorio.

Puedes verificar las versiones instaladas ejecutando:

```bash
node -v
npm -v
git --version
```

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/yulimarin90/rest-countries-explorer.git
```

### 2. Ingresar a la carpeta del proyecto

```bash
cd rest-countries-explorer
```

### 3. Instalar las dependencias

```bash
npm install
```

## Configuración de la API

La aplicación utiliza la API de **REST Countries** para obtener la información de los países.

Si el proyecto utiliza variables de entorno para la configuración de la API, crear en la raíz del proyecto un archivo:

```text
.env
```

y agregar las variables requeridas por la aplicación.

> No se deben subir al repositorio claves privadas, tokens o credenciales.

## Ejecutar el proyecto

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local de la aplicación, normalmente:

```text
http://localhost:5173
```

Abrir esa dirección en el navegador para visualizar la aplicación.

## Compilar para producción

Para generar la versión de producción:

```bash
npm run build
```

Para comprobar localmente la compilación:

```bash
npm run preview
```

## Funcionalidades

La aplicación implementa los siguientes requisitos funcionales:

### RF-01 — Listado

Permite visualizar un listado de países obtenidos desde la API.

Cada país presenta diferentes datos provenientes de la respuesta de la API.

### RF-02 — Estados

La interfaz contempla los diferentes estados de la aplicación:

* Cargando
* Error
* Sin resultados
* Éxito

### RF-03 — Búsqueda

Permite buscar países mediante un campo de entrada controlado.

La búsqueda utiliza un retraso de **400 ms** antes de ejecutar el filtrado o consulta correspondiente.

### RF-04 — Detalle

Permite seleccionar un país para consultar información adicional sobre este.

También se dispone de una opción para regresar al listado.

### RF-05 — Favoritos

Permite:

* Marcar un país como favorito.
* Quitar un país de favoritos.
* Visualizar la cantidad de favoritos.
* Mantener los favoritos mediante `localStorage`.

### RF-06 — Reintento

Cuando ocurre un error durante la consulta de información, la interfaz permite realizar nuevamente la solicitud.

## Estructura del proyecto

La estructura principal del proyecto está organizada de la siguiente manera:

```text
rest-countries-explorer/
│
├── public/
├── .github/pull_request_template.md
│
├── src/
    ├── RF01-Listado
    ├── RF02-Estado
    ├── RF03-Busqueda
    ├── RF04-detalle
    ├── RF05-favoritos
    ├── RF06-reintento/
│        ├── components
│        ├── hooks
│        ├── Feature
│        ├── services
│        ├ ── types
├── App.css
├── App.tsx
├── DECLARACION-IA.md
└── index.css
└── main.tsx
│
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Flujo de ejecución desde cero

Para ejecutar el proyecto en un equipo nuevo:

```bash
git clone https://github.com/yulimarin90/rest-countries-explorer.git
cd rest-countries-explorer
npm install
npm run dev
```

Después, ingresar desde el navegador a la dirección indicada por Vite.

## Scripts disponibles

| Comando           | Descripción                               |
| ----------------- | ----------------------------------------- |
| `npm install`     | Instala las dependencias del proyecto     |
| `npm run dev`     | Inicia el servidor de desarrollo          |
| `npm run build`   | Genera la compilación para producción     |
| `npm run preview` | Previsualiza la compilación de producción |

## Consideraciones

* El proyecto utiliza **TypeScript** para el tipado de los datos obtenidos desde la API.
* Los estilos se implementan mediante **CSS propio**, sin utilizar Tailwind CSS, Bootstrap o Material UI.
* La búsqueda se implementa utilizando `setTimeout` dentro de `useEffect` y su respectiva limpieza.
* Los favoritos se almacenan en `localStorage` para conservarlos entre sesiones.
* No se utilizan `any` ni `@ts-ignore`.

## Autores

Yuli Tatiana Marin
Sebastián Cardona Rincon

**Repositorio:**
https://github.com/yulimarin90/rest-countries-explorer
