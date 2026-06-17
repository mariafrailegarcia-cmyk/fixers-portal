import Link from "next/link";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import ProgressBar from "@/components/ProgressBar";

const heroTimeline: Array<[string, string, boolean]> = [
  ["Consulta inicial", "Completado", true],
  ["Documentación recibida", "Completado", true],
  ["Estudio financiero", "Completado", true],
  ["Expediente enviado a bancos", "En curso", true],
  ["Oferta hipotecaria", "Pendiente", false],
  ["Firma en notaría", "Pendiente", false],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
        <header className="flex items-center justify-between gap-4">
          <Logo href="/" height={48} priority />

          <nav className="hidden items-center gap-8 text-sm font-semibold text-brand-deep md:flex">
            <a className="transition hover:text-brand-accent" href="#proceso">
              Proceso
            </a>
            <a className="transition hover:text-brand-accent" href="#confianza">
              Por qué Fixers
            </a>
            <Link
              className="transition hover:text-brand-accent"
              href="/login"
            >
              Portal cliente
            </Link>
          </nav>

          <Button href="/login" size="sm" className="hidden sm:inline-flex">
            Acceder
          </Button>
        </header>

        <div className="grid flex-1 items-center gap-14 py-16 md:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dce8e3] bg-white px-4 py-2 text-sm font-semibold text-brand-accent shadow-sm">
              <span className="h-2 w-2 rounded-full bg-brand-light" />
              Portal privado de seguimiento hipotecario
            </div>

            <h1 className="mb-6 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Tu hipoteca, clara de principio a firma.
            </h1>

            <p className="mb-9 max-w-2xl text-lg leading-8 text-slate-600">
              Un espacio privado para que cada cliente pueda consultar el estado
              de su operación, revisar documentos pendientes, recibir
              actualizaciones de su asesor y conocer los próximos pasos sin
              llamadas innecesarias.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/client/dashboard" size="lg">
                Entrar como cliente
              </Button>

              <Button href="/admin/dashboard" variant="ghost" size="lg">
                Panel Fixers
              </Button>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
              <div>
                <p className="text-3xl font-bold text-brand-accent">24/7</p>
                <p className="mt-1 text-sm text-slate-500">
                  Consulta del estado
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-brand-accent">100%</p>
                <p className="mt-1 text-sm text-slate-500">Proceso trazable</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-brand-accent">1</p>
                <p className="mt-1 text-sm text-slate-500">Portal para todo</p>
              </div>
            </div>
          </div>

          <div className="relative" id="proceso">
            <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-brand-light/20 blur-2xl" />
            <div className="absolute -bottom-8 -right-8 h-36 w-36 rounded-full bg-brand-accent/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-7 shadow-2xl shadow-slate-900/10">
              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-1 text-sm font-semibold text-brand-accent">
                    Operación hipotecaria
                  </p>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Compra vivienda habitual
                  </h2>
                </div>

                <Badge size="md">En negociación</Badge>
              </div>

              <ProgressBar value={60} className="mb-7" />

              <div className="mb-7 rounded-3xl border border-[#e6eee9] bg-white p-5 shadow-sm">
                <p className="mb-2 text-sm font-bold text-slate-500">
                  Próximo paso
                </p>
                <p className="leading-7 text-ink">
                  Estamos esperando respuesta de varias entidades bancarias. Te
                  avisaremos en cuanto recibamos nuevas condiciones.
                </p>
              </div>

              <div className="space-y-4">
                {heroTimeline.map(([title, status, active]) => (
                  <div
                    key={title}
                    className="flex items-center gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                  >
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                        active
                          ? "bg-brand-mint text-brand-accent"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {active ? "✓" : "•"}
                    </div>

                    <div className="flex flex-1 items-center justify-between gap-4">
                      <span className="font-semibold">{title}</span>
                      <span
                        className={`text-sm font-medium ${
                          status === "En curso"
                            ? "text-brand-accent"
                            : "text-slate-500"
                        }`}
                      >
                        {status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section
          id="confianza"
          className="grid gap-6 border-t border-slate-100 py-16 md:grid-cols-3"
        >
          {[
            {
              title: "Acompañamiento real",
              text: "Un asesor asignado que negocia con los bancos y te explica cada paso con claridad.",
            },
            {
              title: "Todo en un lugar",
              text: "Documentos, mensajes, ofertas y estado de tu operación, siempre accesibles desde el portal.",
            },
            {
              title: "Transparencia total",
              text: "Sabes en qué punto está tu hipoteca y qué necesitamos de ti en cada momento.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-[2rem] border border-slate-100 bg-surface p-7"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-mint text-brand-accent">
                <span className="h-2.5 w-2.5 rounded-full bg-brand" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{feature.text}</p>
            </div>
          ))}
        </section>

        <footer className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 py-8 text-sm text-slate-500 sm:flex-row">
          <Logo href="/" height={28} />
          <p>Esta versión es una demostración funcional del flujo del portal.</p>
        </footer>
      </section>
    </main>
  );
}
