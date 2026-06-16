const documents = [
  { name: "DNI / NIE", status: "Recibido" },
  { name: "Últimas 3 nóminas", status: "Pendiente" },
  { name: "Declaración de la renta", status: "Pendiente" },
  { name: "Contrato de arras", status: "Pendiente" },
];

const timeline = [
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
    <main className="min-h-screen bg-white text-[#0B1736]">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <header className="mb-10 flex items-center justify-between">
          <a href="/client/dashboard">
            <img
              src="/fixers-logo.png"
              alt="Fixers Finance"
              className="h-12 w-auto"
            />
          </a>

          <a
            href="/client/dashboard"
            className="rounded-full border border-slate-200 px-5 py-2 text-sm font-bold text-[#073F3A] transition hover:border-[#008B7A] hover:text-[#008B7A]"
          >
            Volver al área cliente
          </a>
        </header>

        <div className="mb-8 rounded-[2rem] bg-[#F7FAF8] p-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#008B7A]">
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

            <span className="w-fit rounded-full bg-[#E9FFF6] px-5 py-3 text-sm font-bold text-[#008B7A]">
              En negociación bancaria
            </span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-900/5">
            <h2 className="mb-6 text-2xl font-bold">Resumen de tu operación</h2>

            <div className="mb-7 rounded-3xl bg-[#F7FAF8] p-5">
              <div className="mb-3 flex justify-between text-sm font-bold">
                <span>Progreso actual</span>
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

            <a
              href="/client/operations/1/offers"
              className="mt-6 inline-flex w-full justify-center rounded-full border border-[#008B7A] px-6 py-3 font-bold text-[#008B7A] transition hover:bg-[#008B7A] hover:text-white"
            >
              Ver ofertas hipotecarias
            </a>
          </div>

          <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-900/5">
            <h2 className="mb-6 text-2xl font-bold">Documentación</h2>

            <div className="space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc.name}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-[#F7FAF8] p-4"
                >
                  <span className="font-bold">{doc.name}</span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      doc.status === "Recibido"
                        ? "bg-[#E9FFF6] text-[#008B7A]"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>

            <a href="/client/operations/1/documents" className="mt-6 block w-full rounded-full bg-[#008B7A] px-6 py-3 text-center font-bold text-white transition hover:bg-[#073F3A]">Subir documentos</a>
          </div>
        </div>

        <div className="mt-6 rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-900/5">
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold">Timeline de la operación</h2>
              <p className="mt-1 text-slate-500">
                Estos son los pasos principales hasta la firma.
              </p>
            </div>

            <span className="w-fit rounded-full bg-[#E9FFF6] px-4 py-2 text-sm font-bold text-[#008B7A]">
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

                    <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#073F3A] p-7 text-white">
            <p className="text-sm font-bold text-[#18C98B]">
              Mensaje de tu asesor
            </p>
            <p className="mt-3 text-xl font-semibold leading-8">
              Marta, estamos en fase de negociación. De momento solo necesitamos
              que subas los documentos pendientes cuando puedas.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-900/5">
            <h2 className="mb-4 text-2xl font-bold">¿Tienes dudas?</h2>
            <p className="leading-7 text-slate-600">
              Puedes escribir a tu asesor para resolver dudas sobre documentos,
              fases del proceso o próximos pasos.
            </p>

            <a href="/client/operations/1/messages" className="mt-6 inline-block rounded-full border border-[#008B7A] px-6 py-3 font-bold text-[#008B7A] transition hover:bg-[#008B7A] hover:text-white">Escribir al asesor</a>
          </div>
        </div>
      </section>
    </main>
  );
}
