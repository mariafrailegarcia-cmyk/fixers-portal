import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import Timeline, { type TimelineItem } from "@/components/Timeline";

const documents = [
  { name: "Últimas 3 nóminas", status: "Pendiente" },
  { name: "Declaración de la renta", status: "Pendiente" },
  { name: "Contrato de arras", status: "Pendiente" },
];

const timeline: TimelineItem[] = [
  {
    title: "Consulta inicial",
    text: "Hemos recibido tu solicitud y creado tu operación.",
    status: "Completado",
  },
  {
    title: "Documentación recibida",
    text: "Ya tenemos la primera documentación básica.",
    status: "Completado",
  },
  {
    title: "Estudio financiero",
    text: "Tu asesor ha revisado tu perfil y preparado la estrategia.",
    status: "Completado",
  },
  {
    title: "Expediente enviado a bancos",
    text: "Estamos negociando condiciones con varias entidades.",
    status: "En curso",
  },
  {
    title: "Oferta hipotecaria",
    text: "Te presentaremos las mejores condiciones disponibles.",
    status: "Pendiente",
  },
];

export default function ClientDashboard() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <Header
          logoHref="/"
          right={
            <>
              <div className="hidden text-right sm:block">
                <p className="text-sm font-bold">Marta García</p>
                <p className="text-xs text-slate-500">Cliente</p>
              </div>

              <Button href="/" variant="ghost" size="sm">
                Salir
              </Button>
            </>
          }
        />

        <div className="mb-10 rounded-[2rem] bg-surface p-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-brand-accent">
            Área cliente
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Hola, Marta. Así va tu hipoteca.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Aquí puedes consultar el estado de tu operación, revisar la
            documentación pendiente y ver las últimas actualizaciones de tu
            asesor.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card>
            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <p className="text-sm font-bold text-brand-accent">
                  Operación hipotecaria
                </p>
                <h2 className="mt-1 text-3xl font-bold">
                  Compra vivienda habitual
                </h2>
                <p className="mt-2 text-slate-500">
                  Madrid · Vivienda habitual
                </p>
              </div>

              <Badge size="md">En negociación bancaria</Badge>
            </div>

            <ProgressBar value={60} className="mb-7" />

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-100 p-5">
                <p className="text-sm font-bold text-slate-500">Asesor</p>
                <p className="mt-2 text-lg font-bold">Carlos López</p>
              </div>

              <div className="rounded-3xl border border-slate-100 p-5">
                <p className="text-sm font-bold text-slate-500">Importe</p>
                <p className="mt-2 text-lg font-bold">240.000 €</p>
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
              href="/client/operations/1"
              fullWidth
              className="mt-6"
            >
              Ver operación completa
            </Button>
          </Card>

          <Card>
            <h3 className="mb-5 text-xl font-bold">Documentación pendiente</h3>

            <div className="space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc.name}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-surface p-4"
                >
                  <span className="font-semibold">{doc.name}</span>
                  <Badge variant="warning">{doc.status}</Badge>
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

            <p className="mt-4 text-center text-sm text-slate-500">
              Formatos permitidos: PDF, JPG o PNG.
            </p>
          </Card>
        </div>

        <Card className="mt-6">
          <div className="mb-7 flex items-center justify-between gap-4">
            <h3 className="text-xl font-bold">Timeline de la operación</h3>
            <Badge size="md">Actualizado hoy</Badge>
          </div>

          <Timeline items={timeline} />
        </Card>

        <Card tone="dark" className="mt-6">
          <p className="text-sm font-bold text-brand-light">
            Mensaje del asesor
          </p>
          <p className="mt-3 text-xl font-semibold leading-8">
            Marta, estamos en fase de negociación. De momento no tienes que hacer
            nada más salvo subir los documentos pendientes cuando puedas.
          </p>
        </Card>
      </section>
    </main>
  );
}
