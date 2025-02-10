# Cliente Marvel API

## Uso

Antes de poder hacer uso de la aplicación es necesario crear el archivo `.env.local` con los siguientes valores:

```
VITE_PUBLIC_API_KEY=TU_LLAVE_PUBLICA
VITE_PRIVATE_API_KEY=TU_LLAVE_PRIVADA
```

Solo hay que cambiar `TU_LLAVE_PUBLICA` y `TU_LLAVE_PRIVADA` por tus llaves pública y privada de la API de Marvel.

Después de añadir las llaves, lo primero es instalar todas las dependencias con `npm install`. Una vez instaladas se pueden ejecutar los siguientes scripts.

- `npm run dev`: Inicia el servidor de desarrollo
- `npm build:dev`: Genera la build de desarrollo
- `npm build:prod`: Genera la build de producción
- `npm run dev`: Inicia el servidor con la última build
- `npm run lint`: Lanza el linter en busca de errores
- `npm run test`: Lanza los tests

## Arquitectura

La aplicación tiene una arquitectura fija donde se van montando y desmontando componentes en la raíz (App) dependiendo de dos estados: `showFavorites` o `characterDetail`. Si ninguno de los dos está "activo" entonces se muestra el listado de personajes.

Las peticiones se han centralizado en un solo hook que las cachea dependiendo de la URI y los parámetros de búsqueda. Por ejemplo una petición a `http://gateway.marvel.com/v1/characters` con los parámetros `nameStartsWith=Hulk&limit=50` solo sera lanzada la primera vez, si se vuelven a pedir los mismos datos serán recogidos de la caché.

## Posibles mejoras

Parecía más sencillo al principio, pero cumplir con todos los requisitos lo hace más "difícil" (requiere más tiempo).

Desafortunadamente el tiempo ni se detiene ni es infinito, por lo que a pesar de cumplir con (creo) todos los requisitos algunas mejoras se han quedado fuera. Algunas de las estas mejoras son:

### React Router

Añadirlo simplificaria la estructura y las condiciones de rendereizado.

### TanStack Query

Quiza no tenga un impacto significativo pero mejor utilizar la version nueva.

### Tests

Faltan por probar componentes, como el componente Home que habría que mockear el hook y el return.

### Sass

Podria hacer uso de mixins y otras cosas que hagan los estilos más llevadero.
