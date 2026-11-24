# Landing de Genealogía Creativa

Página estática: `index.html` + `styles.css`, sin framework ni paso de compilación. Las animaciones con scroll son CSS nativo (`animation-timeline: view()` y `scroll()`), sin JavaScript. Sigue el sistema de marca de Wantalyze (papel y tinta azul, ventanas retro, modo claro y oscuro según el sistema).

## Ver en local

```bash
python3 -m http.server 8080 -d landing
```

Abre http://localhost:8080.

## Publicar

Cualquier hosting estático sirve: Cloudflare Pages, Netlify o GitHub Pages. Directorio de salida: `landing/` (sin comando de build).

## Contenido

| Ruta | Qué es |
|---|---|
| `index.html` | La página |
| `styles.css` | Tokens y estilos |
| `favicon.svg` | Isotipo W-cubo de Wantalyze |
| `img/` | Capturas de la app (ver abajo) |
| `tools/seed-session.js` | Sesiones de ejemplo usadas para las capturas |

## Sobre las capturas

Son capturas reales de la app Flutter (`flutter run -d web-server --web-port 8765`), tomadas con Chrome sin ventana. La interfaz es la real, pero la sesión de ejemplo ("Quiero una app que me ayude a no olvidar lo que leo.") se escribió a mano en `tools/seed-session.js` y no es salida de un modelo. La página lo dice en los pies de foto; si reemplazas las capturas por una sesión generada de verdad, actualiza esos textos.

Para repetirlas: carga las sesiones en `localStorage` bajo la clave `flutter.graph_sessions` (cada elemento es un `JSON.stringify` de una sesión; la clave `flutter.memory_enabled` en `true`) y recarga.

| Archivo | Muestra |
|---|---|
| `jardin.jpg` | Vista Jardín |
| `linaje.jpg` | Vista Linaje |
| `panel.jpg` | Detalle de un nodo con "De tu memoria" |
| `banner.jpg` | Preguntas de seguimiento |
| `ajustes.jpg` | Ajustes con el interruptor Memoria |
| `detalle.jpg` | Vista Jardín con el panel abierto (sin usar en la página) |

## Animaciones con scroll

- **Escena del grafo (`#grafo`):** un bloque fijado de unos 420vh de scroll. Mientras bajas, el grafo de ejemplo se construye en tres actos (WANT, ANALYZE, BUILD). Cada nodo, arista y rótulo tiene su tramo en `--a` y `--b` (porcentaje del recorrido).
- **Respaldo:** en navegadores sin `animation-timeline` (Firefox, Safari antiguos) o con `prefers-reduced-motion: reduce`, la escena se muestra completa y sin fijar. Ahí no se anima nada.
- **Resto de la página:** barra de progreso arriba, entrada suave de los bloques (`.rv`) y el átomo de la sección de privacidad gira con el scroll.
- El ejemplo del grafo está escrito a mano en el HTML; no sale de ningún modelo.
