import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Header from "@/components/Header";

const documents = [
  { name: "DNI / NIE", status: "Recibido", type: "Cliente" },
  { name: "Últimas 3 nóminas", status: "Pendiente", type: "Cliente" },
  { name: "Declaración de la renta", status: "Pendiente", type: "Cliente" },
  { name: "Contrato de arras", status: "Pendiente", type: "Cliente" },
];

const internalNotes = [
  "Cliente con perfil solvente. Revisar ratio de endeudamiento antes de enviar a más bancos.",
  "Interesa priorizar entidades con buena respuesta en operaciones de vivienda habitual.",
];

const clientUpdates = [
  {
    title: "Expediente enviado a bancos",
    text: "Hemos enviado tu expediente a varias entidades para negociar condiciones.",
  },
  {
    title: "Estudio financiero completado",
    text: "Tu asesor ha revisado la documentación y preparado la estrategia hipotecaria.",
  },
];

const statuses = [
  "Documentación pendiente",
  "Estudio financiero",
  "Expediente enviado a bancos",
  "En negociación bancaria",
  "Oferta presentada",
  "Preparando firma",
];

const currentStatus = "En negociación bancaria";

export default function AdminOperationDetail() {
  return (
    <main className="min-h-screen bg-surface text-ink">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <Header
          logoHref="/admin/dashboard"
          right={
            <Button href="/admin/dashboard" variant="ghost" size="sm">
              Volver al panel
            </Button>
          }
        />

        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-brand-accent">
              Operación hipotecaria
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Marta García
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Compra vivienda habitual · Madrid · Asesor asignado: Carlos López
            </p>
          </div>

          <Badge size="lg">En negociación bancaria</Badge>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card>
            <h2 className="mb-6 text-2xl font-bold">Resumen interno</h2>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-surface p-5">
                <p className="text-sm font-bold text-slate-500">Importe</p>
                <p className="mt-2 text-2xl font-bold">240.000 €</p>
              </div>

              <div className="rounded-3xl bg-surface p-5">
                <p className="text-sm font-bold text-slate-500">Progreso</p>
                <p className="mt-2 text-2xl font-bold text-brand-accent">60%</p>
              </div>

              <div className="rounded-3xl bg-surface p-5">
                <p className="text-sm font-bold text-slate-500">
                  Firma estimada
                </p>
                <p className="mt-2 text-2xl font-bold">Julio 2026</p>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-100 p-5">
              <p className="mb-2 text-sm font-bold text-slate-500">
                Próximo paso visible para cliente
              </p>
              <p className="leading-7">
                Estamos esperando respuesta de varias entidades bancarias. Te
                avisaremos en cuanto recibamos nuevas condiciones para comparar
                las mejores ofertas.
              </p>
            </div>

            <Button
              href="/admin/operations/1/offers"
              variant="outline"
              fullWidth
              className="mt-6"
            >
              Gestionar ofertas hipotecarias
            </Button>

            <div className="mt-6 rounded-3xl border border-slate-100 p-5">
              <p className="mb-4 text-sm font-bold text-slate-500">
                Cambiar estado
              </p>

              <div className="grid gap-3 md:grid-cols-2">
                {statuses.map((status) => (
                  <button
                    key={status}
                    type="button"
                    className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${
                      status === currentStatus
                        ? "border-brand-accent bg-brand-mint text-brand-accent"
                        : "border-slate-200 hover:border-brand-accent hover:text-brand-accent"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="mb-6 text-2xl font-bold">Datos del cliente</h2>

            <div className="space-y-4">
              <div className="rounded-2xl bg-surface p-4">
                <p className="text-sm font-bold text-slate-500">Nombre</p>
                <p className="mt-1 font-bold">Marta García</p>
              </div>

              <div className="rounded-2xl bg-surface p-4">
                <p className="text-sm font-bold text-slate-500">Email</p>
                <p className="mt-1 font-bold">marta@email.com</p>
              </div>

              <div className="rounded-2xl bg-surface p-4">
                <p className="text-sm font-bold text-slate-500">Teléfono</p>
                <p className="mt-1 font-bold">+34 600 000 000</p>
              </div>

              <div className="rounded-2xl bg-surface p-4">
                <p className="text-sm font-bold text-slate-500">Tipo</p>
                <p className="mt-1 font-bold">Compra vivienda habitual</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold">Documentación</h2>
              <Button size="sm">Pedir documento</Button>
            </div>

            <div className="space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc.name}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-surface p-4"
                >
                  <div>
                    <p className="font-bold">{doc.name}</p>
                    <p className="text-sm text-slate-500">{doc.type}</p>
                  </div>

                  <Badge
                    variant={doc.status === "Recibido" ? "success" : "warning"}
                  >
                    {doc.status}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          <Card tone="dark">
            <h2 className="mb-6 text-2xl font-bold">Notas internas</h2>

            <div className="space-y-4">
              {internalNotes.map((note) => (
                <div
                  key={note}
                  className="rounded-2xl bg-white/10 p-4 leading-7 text-white/90"
                >
                  {note}
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-full bg-brand-light px-6 py-3 font-bold text-brand-deep transition hover:brightness-95"
            >
              Añadir nota interna
            </button>

            <p className="mt-4 text-sm text-white/60">
              Estas notas no son visibles para el cliente.
            </p>
          </Card>
        </div>

        <Card className="mt-6">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold">
                Actualizaciones visibles para cliente
              </h2>
              <p className="mt-1 text-slate-500">
                Solo estos mensajes aparecen en el portal del cliente.
              </p>
            </div>

            <Button size="sm">Nueva actualización</Button>
          </div>

          <div className="space-y-4">
            {clientUpdates.map((update) => (
              <div
                key={update.title}
                className="rounded-3xl border border-slate-100 p-5"
              >
                <p className="font-bold">{update.title}</p>
                <p className="mt-2 leading-7 text-slate-600">{update.text}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </main>
  );
}
