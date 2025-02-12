# Cliente API de Marvel

## Uso

Antes de poder hacer uso de la aplicación es necesario crear el archivo `.env.local` con los siguientes valores:

```
VITE_PUBLIC_API_KEY=TU_CLAVE_PUBLICA
VITE_PRIVATE_API_KEY=TU_CLAVE_PRIVADA
```

Solo hay que cambiar `TU_CLAVE_PUBLICA` y `TU_CLAVE_PRIVADA` por tu clave pública y privada de la API de Marvel.

Después de añadir las claves, lo primero es instalar todas las dependencias con `npm install`. Una vez instaladas se pueden ejecutar los siguientes scripts.

- `npm run dev`: Inicia el servidor de desarrollo
- `npm build:dev`: Genera la build de desarrollo
- `npm build:prod`: Genera la build de producción
- `npm run preview`: Inicia el servidor con la última build
- `npm run lint`: Lanza el linter en busca de errores
- `npm run test`: Lanza los tests

## Arquitectura

La aplicación depende de dos estados: `showFavorites` o `characterDetail`. El primer estado es un booleano que sirve para mostrar la lista de personajes favoritos, y el segundo estado es un objeto con el detalle del personaje, que en caso de tener un valor mostrara la vista del detalle. Si ninguno de los dos estados cumple las condiciones entonces se muestra el listado de personajes.

Las peticiones se han centralizado en un solo hook por conveniencia. Este hook recibe dos argumentos, la URI y los parámetros de busqueda, y los resultados son cacheados (en memoria) dependiendo de los argumentos. Por ejemplo, al realizar una petición a `http://gateway.marvel.com/v1/characters` con los parámetros de busqueda `nameStartsWith=Hulk&limit=50`, el resultado es cacheado con el valor de ambos argumentos, por lo que cualquier petición que contenga los mismos argumentos recuperará los datos de caché.

También se ha implementado un `debounce` en la barra búsqueda para evitar múltiples llamadas al escribir caracteres. De este modo solo se lanzará la búsqueda cuando hayan transcurrido unos milisegundos desde el último carácter introducido.

## Posibles mejoras

La aplicación parecía más sencillo al principio, cumplir con todos los requisitos y funcionalidades lo hace más costoso, sobretodo en tiempo. Aunque el proyecto cumple (creo) con todos los requisitos y tiene todas las funcionalidades, algunas mejoras pendientes se han quedado por el camino por falta de tiempo.

### React Router

Simplificar las condiciones de renderizado y hacer un correcto uso de los enlaces.

### Tests

Aumentar la cobertura código y cubrir más casos.

### Sass

Utilizar mixins y otras herramientas para mejorar la estructura y el uso de estilos.

### Componentes

Separar código y moverlo a componentes para mejorar la legibilidad y su reutilización.
