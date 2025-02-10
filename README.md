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
- `npm run dev`: Inicia el servidor con la última build
- `npm run lint`: Lanza el linter en busca de errores
- `npm run test`: Lanza los tests

## Arquitectura

La aplicación es una SPA donde se van montando y desmontando componentes dependiendo de dos estados: `showFavorites` o `characterDetail`. El primer estado sirve para mostrar la lista de personajes favoritos, y el segundo estado sirve para guardar el detalle del personaje. Si ninguno de los dos estados está "activo" entonces se muestra el listado de personajes.

Las peticiones se han centralizado en un solo hook que solo recibe dos argumentos, la URI y los parámetros. Los resultados son cacheados dependiendo de los argumentos. Por ejemplo, los resultados de la petición a `http://gateway.marvel.com/v1/characters` con los parámetros `nameStartsWith=Hulk&limit=50` solo se lanza la primera vez, si se produce otra llamada a la misma URI con los mismos parámetros devolvera el resultado de la caché.

Para evitar lanzar una petición cada vez que se escribe en la barra de búsqueda, se ha implementado un `debounce` para no llamar al hook hasta que han transcurrido 500 milisegundos desde el último carácter introducido.

## Posibles mejoras

La aplicación parecía más sencillo al principio, cumplir con todos los requisitos y funcionalidades lo hace más costoso, sobretodo en tiempo. Aunque el proyecto cumple (creo) con todos los requisitos y tiene todas las funcionalidades, algunas mejoras pendientes se han quedado por el camino por falta de tiempo.

### React Router

Simplificar las condiciones de renderizado y hacer un correcto uso de los enlaces.

### TanStack Query

Usar una librería actualizada.

### Tests

Hacer más tests para cubrir más casos.

### Sass

Utilizar mixins y otras herramientas.
