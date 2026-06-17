# Fixers Portal

Portal privado de **Fixers Finance** (bróker hipotecario). Permite a los clientes
seguir el progreso de su operación hipotecaria y al equipo interno gestionar
operaciones, documentación, mensajes y ofertas.

> Esta versión es una demostración funcional del flujo. Los datos son estáticos y
> todavía no hay conexión con base de datos ni CRM.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- TypeScript

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de producción
npm run lint    # ESLint
```

## Estructura

- `src/app` — rutas (área pública, portal cliente y panel interno).
- `src/components` — componentes reutilizables: `Logo`, `Header`, `Button`,
  `Card`, `Badge`, `ProgressBar`, `Timeline`.
- `src/app/globals.css` — paleta de marca Fixers como tokens de Tailwind
  (`brand`, `brand-accent`, `brand-deep`, `surface`, `ink`…).

## Rutas principales

| Ruta | Descripción |
| --- | --- |
| `/` | Página de inicio |
| `/login` | Acceso privado |
| `/client/dashboard` | Área del cliente |
| `/client/operations/[id]` | Detalle de la operación (cliente) |
| `/client/operations/[id]/documents` | Documentación |
| `/client/operations/[id]/messages` | Mensajes con el asesor |
| `/client/operations/[id]/offers` | Comparativa de ofertas |
| `/admin/dashboard` | Panel interno |
| `/admin/operations/[id]` | Ficha interna de operación |
| `/admin/operations/[id]/offers` | Gestión de ofertas |
| `/admin/operations/new` | Alta de operación |

## Despliegue

Listo para desplegar en [Vercel](https://vercel.com/new).
