# TEQUEBOX — Landing + lista de espera

Landing de validación de demanda para **Caja Premium de 50 tequeños crudos (45 €)**.
Los visitantes intentan comprar → quedan en cola prioritaria → reciben email de confirmación.

## Stack
- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- Postgres (`DATABASE_URL`) — Neon o la DB de Cursor Apps
- Resend — email de plaza en lista de espera

## Lo único que tienes que configurar

1. **Base de datos**
   - En **Cursor Apps**: se crea sola al publicar (`cursor-app.json`).
   - En **Neon / Vercel**: pega la connection string en `DATABASE_URL`.
2. **Resend**
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL` (dominio verificado en Resend)
   - Opcional: `LEADS_NOTIFY_EMAIL` para avisarte a ti de cada lead

Copia `.env.example` → `.env.local` en local, o añade los secretos en el host.

## Flujo de demanda
1. CTA abre el modal de compra.
2. `POST /api/leads` guarda el lead y asigna `#posición` en cola.
3. Resend envía confirmación al email (y aviso al owner si está configurado).
4. La UI muestra “lote agotado + plaza reservada”.

## Comandos

```bash
npm install
npm run dev      # sin DATABASE_URL usa PGlite en memoria
npm run build
npm start
```

Migraciones: `migrations/*.sql` (se aplican en `npm run build` cuando hay `DATABASE_URL`).
