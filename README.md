# Star Wars API 
## Introduccion
Implementacion de arquitectura back end con microservicios en javascript 
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
### URL Base 
```http://35.188.143.251:8000```
### Estructura de la respuesta
Todas las respuestas son en formato JSON y siguen el siguiente formato:

```bash 
{
 "error":false,
 "data":{}
}
 ```
### Characters:

#### listar todos los personajes
- Método: GET
- Endpoint: /characters
##### Obtener un personaje espesifico
  Método: GET
    Endpoint: /characters/:id
- Parámetros URL:
    id (String): Identificador único      del personaje
#### Crear un nuevo personaje 
- Método: POST
- Endpoint: /characters 
- Cuerpo de la Solicitud (JSON):
```

 {
      "_id": "9",
      "name": "Biggs Darklighter",
      "height": "183",
      "mass": "84",
      "hair_color": "black",
      "skin_color": "light",
      "eye_color": "brown",
      "birth_year": "24BBY",
      "gender": "male",
      "homeworld": {
        "_id": "1",
        "name": "Tatooine"
      },
      "films": [
        {
          "_id": "1",
          "title": "A New Hope"
        }
      ]
    }
```


### Films:

## Planets:


## Errores y Códigos de Estado HTTP

- 400 Bad Request: Se produce si la solicitud es inválida o está mal formada.

- 404 Not Found: Se produce si la tarea no se encuentra.

- 500 Internal Server Error: Se produce en caso de un error interno del servidor.
