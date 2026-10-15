# Academia de Idiomas MT — Web informativa

Sitio informativo (sin base de datos) para **Academia de Idiomas MT**, diseñado *mobile first*.
React + TypeScript + Vite + Framer Motion. Listo para desplegar en Vercel.

## Desarrollo

```bash
npm install
npm run dev
npm run build
```

## Editar datos del cliente

Todo el contenido editable está en [`src/data/site.ts`](src/data/site.ts):
teléfono, WhatsApp, correo, dirección, horarios, redes, idiomas, FAQ y artículos del blog.
Los valores marcados con `PENDIENTE` son de ejemplo.

Al cambiar el dominio o el teléfono, actualizar también `index.html` (meta, canonical y JSON-LD),
`public/robots.txt` y `public/sitemap.xml`.

## Formulario

No guarda datos: arma el mensaje y lo abre en WhatsApp con el número configurado.
