import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import Timeline, { type TimelineItem } from "@/components/Timeline";

const documents = [
  { name: "DNI / NIE", status: "Recibido" },
  { name: "Últimas 3 nóminas", status: "Pendiente" },
  { name: "Declaración de la renta", status: "Pendiente" },
  { name: "Contrato de arras", status: "Pendiente" },
];

const timeline: TimelineItem[] = [
  {
    title: "Consulta inicial completada",
    text: "Hemos recibido tu solicitud y creado tu operación hipotecaria.",
    status: "Completado",
  },
  {
    title: "Documentación inicial recibida",
    text: "Ya tenemos parte de la documentación necesaria para estudiar tu caso.",
    status: "Completado",
  },
  {
    title: "Estudio financiero realizado",
    text: "Tu asesor ha revisado tu perfil y preparado la estrategia hipotecaria.",
    status: "Completado",
  },
  {
    title: "Expediente enviado a bancos",
    text: "Estamos negociando condiciones con varias entidades bancarias.",
    status: "En curso",
  },
  {
    title: "Presentación de oferta",
    text: "Te mostraremos las mejores opciones disponibles para que puedas decidir.",
    status: "Pendiente",
  },
  {
    title: "Firma en notaría",
    text: "Cuando todo esté aprobado, coordinaremos la firma final.",
    status: "Pendiente",
  },
];

export default function ClientOperationDetail() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <Header
          logoHref="/client/dashboard"
          right={
            <Button href="/client/dashboard" variant="ghost" size="sm">
              Volver al área cliente
            </Button>
          }
        />

        <div className="mb-8 rounded-[2rem] bg-surface p-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-brand-accent">
            Tu operación hipotecaria
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Compra vivienda habitual
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                Aquí puedes ver el avance completo de tu operación, los
                documentos pendientes, las actualizaciones y los próximos pasos.
              </p>
            </div>

            <Badge size="lg">En negociación bancaria</Badge>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card>
            <h2 className="mb-6 text-2xl font-bold">Resumen de tu operación</h2>

            <ProgressBar value={60} label="Progreso actual" className="mb-7" />

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-100 p-5">
                <p className="text-sm font-bold text-slate-500">Asesor</p>
                <p className="mt-2 text-lg font-bold">Carlos López</p>
              </div>

              <div className="rounded-3xl border border-slate-100 p-5">
                <p className="text-sm font-bold text-slate-500">
                  Tipo de operación
                </p>
                <p className="mt-2 text-lg font-bold">Compra vivienda</p>
              </div>

              <div className="rounded-3xl border border-slate-100 p-5">
                <p className="text-sm font-bold text-slate-500">
                  Firma estimada
                </p>
                <p className="mt-2 text-lg font-bold">Julio 2026</p>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-[#e6eee9] bg-white p-5 shadow-sm">
              <p className="mb-2 text-sm font-bold text-slate-500">
                Próximo paso
              </p>
              <p className="leading-7">
                Estamos esperando respuesta de varias entidades bancarias. Te
                avisaremos en cuanto recibamos nuevas condiciones para comparar
                las mejores ofertas.
              </p>
            </div>

            <Button
              href="/client/operations/1/offers"
              variant="outline"
              fullWidth
              className="mt-6"
            >
              Ver ofertas hipotecarias
            </Button>
          </Card>

          <Card>
            <h2 className="mb-6 text-2xl font-bold">Documentación</h2>

            <div className="space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc.name}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-surface p-4"
                >
                  <span className="font-bold">{doc.name}</span>
                  <Badge variant={doc.status === "Recibido" ? "success" : "warning"}>
                    {doc.status}
                  </Badge>
                </div>
              ))}
            </div>

            <Button
              href="/client/operations/1/documents"
              fullWidth
              className="mt-6"
            >
              Subir documentos
            </Button>
          </Card>
        </div>

        <Card className="mt-6">
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold">Timeline de la operación</h2>
              <p className="mt-1 text-slate-500">
                Estos son los pasos principales hasta la firma.
              </p>
            </div>

            <Badge size="md">Actualizado hoy</Badge>
          </div>

          <Timeline items={timeline} />
        </Card>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card tone="dark">
            <p className="text-sm font-bold text-brand-light">
              Mensaje de tu asesor
            </p>
            <p className="mt-3 text-xl font-semibold leading-8">
              Marta, estamos en fase de negociación. De momento solo necesitamos
              que subas los documentos pendientes cuando puedas.
            </p>
          </Card>

          <Card>
            <h2 className="mb-4 text-2xl font-bold">¿Tienes dudas?</h2>
            <p className="leading-7 text-slate-600">
              Puedes escribir a tu asesor para resolver dudas sobre documentos,
              fases del proceso o próximos pasos.
            </p>

            <Button
              href="/client/operations/1/messages"
              variant="outline"
              className="mt-6"
            >
              Escribir al asesor
            </Button>
          </Card>
        </div>
      </section>
    </main>
  );
}
