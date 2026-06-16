const documents = [
  { name: "Últimas 3 nóminas", status: "Pendiente" },
  { name: "Declaración de la renta", status: "Pendiente" },
  { name: "Contrato de arras", status: "Pendiente" },
];

const timeline = [
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
    <main className="min-h-screen bg-white text-[#0B1736]">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <header className="mb-10 flex items-center justify-between">
          <a href="/">
            <img
              src="/fixers-logo.png"
              alt="Fixers Finance"
              className="h-12 w-auto"
            />
          </a>

          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-bold">Marta García</p>
              <p className="text-xs text-slate-500">Cliente</p>
            </div>

            <a
              href="/"
              className="rounded-full border border-slate-200 px-5 py-2 text-sm font-bold text-[#073F3A] transition hover:border-[#008B7A] hover:text-[#008B7A]"
            >
              Salir
            </a>
          </div>
        </header>

        <div className="mb-10 rounded-[2rem] bg-[#F7FAF8] p-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#008B7A]">
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
          <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-900/5">
            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <p className="text-sm font-bold text-[#008B7A]">
                  Operación hipotecaria
                </p>
                <h2 className="mt-1 text-3xl font-bold">
                  Compra vivienda habitual
                </h2>
                <p className="mt-2 text-slate-500">Madrid · Vivienda habitual</p>
              </div>

              <span className="w-fit rounded-full bg-[#E9FFF6] px-4 py-2 text-sm font-bold text-[#008B7A]">
                En negociación bancaria
              </span>
            </div>

            <div className="mb-7 rounded-3xl bg-[#F7FAF8] p-5">
              <div className="mb-3 flex justify-between text-sm font-bold">
                <span>Progreso de la operación</span>
                <span className="text-[#008B7A]">60%</span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white">
                <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-[#008B7A] to-[#18C98B]" />
              </div>
            </div>

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

            <a
              href="/client/operations/1"
              className="mt-6 inline-flex w-full justify-center rounded-full bg-[#008B7A] px-6 py-3 font-bold text-white transition hover:bg-[#073F3A]"
            >
              Ver operación completa
            </a>
          </div>

          <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-900/5">
            <h3 className="mb-5 text-xl font-bold">Documentación pendiente</h3>

            <div className="space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc.name}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-[#F7FAF8] p-4"
                >
                  <span className="font-semibold">{doc.name}</span>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>

            <a href="/client/operations/1/documents" className="mt-6 block w-full rounded-full bg-[#008B7A] px-6 py-3 text-center font-bold text-white transition hover:bg-[#073F3A]">Subir documentos</a>

            <p className="mt-4 text-center text-sm text-slate-500">
              Formatos permitidos: PDF, JPG o PNG.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-900/5">
          <div className="mb-7 flex items-center justify-between">
            <h3 className="text-xl font-bold">Timeline de la operación</h3>
            <span className="rounded-full bg-[#E9FFF6] px-4 py-2 text-sm font-bold text-[#008B7A]">
              Actualizado hoy
            </span>
          </div>

          <div className="space-y-6">
            {timeline.map((item) => {
              const isCurrent = item.status === "En curso";
              const isDone = item.status === "Completado";

              return (
                <div key={item.title} className="flex gap-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      isDone || isCurrent
                        ? "bg-[#E9FFF6] text-[#008B7A]"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {isDone ? "✓" : isCurrent ? "•" : ""}
                  </div>

                  <div className="flex-1 border-b border-slate-100 pb-5">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                      <p className="font-bold">{item.title}</p>
                      <span
                        className={`text-sm font-bold ${
                          isCurrent ? "text-[#008B7A]" : "text-slate-500"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <p className="mt-2 text-slate-600">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 rounded-[2rem] bg-[#073F3A] p-7 text-white">
          <p className="text-sm font-bold text-[#18C98B]">Mensaje del asesor</p>
          <p className="mt-3 text-xl font-semibold leading-8">
            Marta, estamos en fase de negociación. De momento no tienes que hacer
            nada más salvo subir los documentos pendientes cuando puedas.
          </p>
        </div>
      </section>
    </main>
  );
}
