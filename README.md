# Star Wars API 
## Introduccion
>Implementacion de arquitectura back end con microservicios en javascript 
La Api de Star War permite a los usuarios hacer consultas acerca de los personajes, peliculas y planetas 
de las sagas de starwar

![FlowChart](https://res.cloudinary.com/didzhs53d/image/upload/v1696267787/uyD3Ko0Zf0tv8Nia_aM6TUMAIiHuYOPAL_q0hmyn.png)
## Configuración y Requisitos

- Node.js 12.0 o superior
- npm (Node Package Manager) instalado

Para instalar y ejecutar la API, sigue estos pasos:

```bash
npm install
```
## Endpoints and methods
- URL Base 
```http://35.188.143.251:8000```
- Estructura de la respuesta
>Todas las respuestas son en formato JSON y siguen el siguiente formato:

```bash 
{
 "Error":false,
 "data":{}
}
 ```

## Gateway: 

## Characters:

## Films:

## Planets:

## Database:

# Errores y Códigos de Estado HTTP

- 400 Bad Request: Se produce si la solicitud es inválida o está mal formada.

- 404 Not Found: Se produce si la tarea no se encuentra.

- 500 Internal Server Error: Se produce en caso de un error interno del servidor.
