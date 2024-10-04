# EncuestaFrontend

Este proyecto es una aplicación de encuestas generada con [Angular CLI](https://github.com/angular/angular-cli) versión 18.2.7. Permite a los usuarios registrar sus preferencias musicales y visualizar los resultados en un gráfico de barras.

## Prerrequisitos

Para ejecutar este proyecto, necesitarás tener instalados:

- **Node.js** y **npm**: Puedes descargar e instalar Node.js desde [Node.js website](https://nodejs.org). Esto también instalará npm.
- **Angular CLI**: Si no lo tienes instalado, ejecuta el siguiente comando:
  ```bash
  npm install -g @angular/cli

## Instalación
git clone https://github.com/julioGomezdev/encuesta_frontend.git
cd EncuestaFrontend

npm install

## Configuración del servidor de desarrollo
Ejecuta ng serve para iniciar el servidor de desarrollo. Navega a http://localhost:4200/ en tu navegador. La aplicación se recargará automáticamente si realizas cambios en los archivos fuente.

ng serve

## Interacción con el backend

Para registrar una encuesta, asegúrate de que el campo de correo electrónico tenga un formato válido antes de enviar la solicitud.

Los resultados de las encuestas se visualizan en un gráfico de barras dinámico, el cual se actualiza según los datos obtenidos del backend.

## Funcionalidades de la aplicación
 
### 1. Registro de encuestas

Los usuarios pueden seleccionar su estilo musical favorito y proporcionar un correo electrónico válido para enviar la encuesta.

Si alguno de los campos está vacío o el formato de correo no es válido, se muestra un popup de advertencia usando SweetAlert2.

### 2. Visualización de resultados

Los usuarios pueden ver los resultados en tiempo real en un gráfico de barras, que muestra la cantidad de votos por cada estilo musical.

El gráfico se actualiza dinámicamente según los resultados obtenidos del backend.

## Construcción
ng build --prod

## Ejecución de pruebas unitarias
ng test

## Dependencias clave

Angular Material: Para los componentes de la interfaz de usuario como botones, formularios y selectores.
ng add @angular/material

Chart.js: Para la visualización de los resultados en gráficos de barras.
npm install chart.js

SweetAlert2: Para las notificaciones amigables de errores y confirmaciones.
npm install sweetalert2



Este `README.md` cubre todos los aspectos principales del proyecto, desde la instalación hasta la interacción con las APIs y la configuración del frontend.

