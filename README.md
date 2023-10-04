# Star Wars API 
## Introduccion

La Api de Star War permite a los usuarios hacer consultas acerca de los personajes, peliculas y planetas 
de las sagas de starwar

- Implementacion de arquitectura back end con microservicios en javascript
- bases de datos no relacionales
- Mejores practicas de dasarrollo en express del lado del servidor

![FlowChart](https://res.cloudinary.com/didzhs53d/image/upload/v1696267787/uyD3Ko0Zf0tv8Nia_aM6TUMAIiHuYOPAL_q0hmyn.png)
## Configuración y Requisitos

- Node.js 12.0 o superior
- npm (Node Package Manager) instalado

Para ejecutar la API, sigue estos pasos:
- Desde la raiz del proyecto donde se encuentra el archivo Yml
```bash
docker-compose build
```
```bash
docker-compose up
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
- Método: GET
- Endpoint: /characters/:id
- Parámetros URL:
    id (String): Identificador único del personaje
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

#### listar todas las peliculas 
- Método: GET
- Endpoint: /films
##### Obtener un personaje espesifico
- Método: GET
- Endpoint: /films/:id
- Parámetros URL:
    id (String): Identificador de la pelicula 
#### Crear una nueva pelicula
- Método: POST
- Endpoint: /films
- Cuerpo de la Solicitud (JSON):
```
{
    "_id": "2",
    "title": "The Empire Strikes Back",
    "opening_crawl": "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their h_idden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
    "director": "Irvin Kershner",
    "producer": "Gary Kurtz, Rick McCallum",
    "release_date": "1980-05-17T00:00:00.000Z",
    "characters": [
      {
        "_id": "1",
        "name": "Luke Skywalker"
      },
      {
        "_id": "2",
        "name": "C-3PO"
      },
      {
        "_id": "3",
        "name": "R2-D2"
      },
      {
        "_id": "4",
        "name": "Darth Vader"
      },
      {
        "_id": "5",
        "name": "Leia Organa"
      },
      {
        "_id": "10",
        "name": "Obi-Wan Kenobi"
      },
      {
        "_id": "13",
        "name": "Chewbacca"
      },
      {
        "_id": "14",
        "name": "Han Solo"
      },
      {
        "_id": "18",
        "name": "Wedge Antilles"
      },
      {
        "_id": "20",
        "name": "Yoda"
      },
      {
        "_id": "21",
        "name": "Palpatine"
      },
      {
        "_id": "22",
        "name": "Boba Fett"
      },
      {
        "_id": "23",
        "name": "IG-88"
      },
      {
        "_id": "24",
        "name": "Bossk"
      },
      {
        "_id": "25",
        "name": "Lando Calrissian"
      },
      {
        "_id": "26",
        "name": "Lobot"
      }
    ],
    "planets": [
      {
        "_id": "4",
        "name": "Hoth"
      },
      {
        "_id": "5",
        "name": "Dagobah"
      },
      {
        "_id": "6",
        "name": "Bespin"
      },
      {
        "_id": "27",
        "name": "Ord Mantell"
      }
    ]
  }

```

### Planets:
#### listar todos los planetas 
- Método: GET
- Endpoint: '/planets'
##### Obtener un personaje espesifico
- Método: GET
- Endpoint: 'films/:id'
- Parámetros URL:
    id (String): Identificador de la pelicula 
#### Crear una nueva pelicula
- Método: POST
- Endpoint: '/films'
- Cuerpo de la Solicitud (JSON):
```
{
    "_id": "11",
    "name": "Geonosis",
    "rotation_period": "30",
    "orbital_period": "256",
    "diameter": "11370",
    "climate": "temperate, ar_id",
    "gravity": "0.9 standard",
    "terrain": "rock, desert, mountain, barren",
    "surface_water": "5",
    "res_idents": [
      {
        "_id": "63",
        "name": "Poggle the Lesser"
      }
    ],
    "films": [
      {
        "_id": "5",
        "title": "Attack of the Clones"
      }
    ]
  }

```

## Errores y Códigos de Estado HTTP

- 400 Bad Request: Se produce si la solicitud es inválida o está mal formada.

- 404 Not Found: Se produce si la tarea no se encuentra.

- 500 Internal Server Error: Se produce en caso de un error interno del servidor.
