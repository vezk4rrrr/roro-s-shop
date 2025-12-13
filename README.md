# Roro's Shop — Búsqueda de productos

Se añadió una **barra de búsqueda** funcional y visible en `index.html` y `productos.html` que filtra productos en tiempo real sin recargar la página.

Cómo funciona (resumen):
- El listado de productos se centralizó en `js/search.js` (variable `productos`).
- El módulo expone `SearchModule.initSearch(...)`, `SearchModule.filterProductos(...)` y `SearchModule.renderProductos(...)`.
- En `productos.html` la búsqueda está integrada en la vista de productos y respeta el parámetro `?categoria=` en la URL.
- En `index.html` hay una búsqueda rápida que muestra resultados (nombre + imagen) mientras el usuario escribe.

Cómo añadir o editar productos:
1. Edita `js/search.js` y agrega/edita objetos en el arreglo `productos`. Cada objeto tiene las propiedades: `nombre`, `categorias`, `precio`, `imagen`.
2. Si se agrega una nueva imagen, guárdala en la carpeta `img/` y referénciala en `imagen`.

Nota: los nombres de archivo son sensibles a mayúsculas/minúsculas en algunos servidores (por ejemplo, Linux). Asegúrate de que el valor de `imagen` coincida exactamente con el nombre del archivo en `img/`.

Comportamiento:
- Búsqueda case-insensitive y en tiempo real.
- Mensaje claro `No se encontraron productos` cuando no hay coincidencias.
- Implementación completamente front-end, sin dependencias externas.

Si quieres que la búsqueda busque también por categorías, ingredientes u otros campos, puedo añadir ese comportamiento.
