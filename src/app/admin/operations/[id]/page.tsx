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

export default function AdminOperationDetail() {
  return (
    <main className="min-h-screen bg-[#F7FAF8] text-[#0B1736]">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <header className="mb-10 flex items-center justify-between">
          <a href="/admin/dashboard">
            <img
              src="/fixers-logo.png"
              alt="Fixers Finance"
              className="h-12 w-auto"
            />
          </a>

          <a
            href="/admin/dashboard"
            className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-bold text-[#073F3A] transition hover:border-[#008B7A] hover:text-[#008B7A]"
          >
            Volver al panel
          </a>
        </header>

        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#008B7A]">
              Operación hipotecaria
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Marta García
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Compra vivienda habitual · Madrid · Asesor asignado: Carlos López
            </p>
          </div>

          <span className="w-fit rounded-full bg-[#E9FFF6] px-5 py-3 text-sm font-bold text-[#008B7A]">
            En negociación bancaria
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] bg-white p-7 shadow-xl shadow-slate-900/5">
            <h2 className="mb-6 text-2xl font-bold">Resumen interno</h2>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-[#F7FAF8] p-5">
                <p className="text-sm font-bold text-slate-500">Importe</p>
                <p className="mt-2 text-2xl font-bold">240.000 €</p>
              </div>

              <div className="rounded-3xl bg-[#F7FAF8] p-5">
                <p className="text-sm font-bold text-slate-500">Progreso</p>
                <p className="mt-2 text-2xl font-bold text-[#008B7A]">60%</p>
              </div>

              <div className="rounded-3xl bg-[#F7FAF8] p-5">
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

            <a
              href="/admin/operations/1/offers"
              className="mt-6 inline-flex w-full justify-center rounded-full border border-[#008B7A] px-6 py-3 font-bold text-[#008B7A] transition hover:bg-[#008B7A] hover:text-white"
            >
              Gestionar ofertas hipotecarias
            </a>

            <div className="mt-6 rounded-3xl border border-slate-100 p-5">
              <p className="mb-4 text-sm font-bold text-slate-500">
                Cambiar estado
              </p>

              <div className="grid gap-3 md:grid-cols-2">
                {[
                  "Documentación pendiente",
                  "Estudio financiero",
                  "Expediente enviado a bancos",
                  "En negociación bancaria",
                  "Oferta presentada",
                  "Preparando firma",
                ].map((status) => (
                  <button
                    key={status}
                    className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${
                      status === "En negociación bancaria"
                        ? "border-[#008B7A] bg-[#E9FFF6] text-[#008B7A]"
                        : "border-slate-200 hover:border-[#008B7A] hover:text-[#008B7A]"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-xl shadow-slate-900/5">
            <h2 className="mb-6 text-2xl font-bold">Datos del cliente</h2>

            <div className="space-y-4">
              <div className="rounded-2xl bg-[#F7FAF8] p-4">
                <p className="text-sm font-bold text-slate-500">Nombre</p>
                <p className="mt-1 font-bold">Marta García</p>
              </div>

              <div className="rounded-2xl bg-[#F7FAF8] p-4">
                <p className="text-sm font-bold text-slate-500">Email</p>
                <p className="mt-1 font-bold">marta@email.com</p>
              </div>

              <div className="rounded-2xl bg-[#F7FAF8] p-4">
                <p className="text-sm font-bold text-slate-500">Teléfono</p>
                <p className="mt-1 font-bold">+34 600 000 000</p>
              </div>

              <div className="rounded-2xl bg-[#F7FAF8] p-4">
                <p className="text-sm font-bold text-slate-500">Tipo</p>
                <p className="mt-1 font-bold">Compra vivienda habitual</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-7 shadow-xl shadow-slate-900/5">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Documentación</h2>
              <button className="rounded-full bg-[#008B7A] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#073F3A]">
                Pedir documento
              </button>
            </div>

            <div className="space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc.name}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-[#F7FAF8] p-4"
                >
                  <div>
                    <p className="font-bold">{doc.name}</p>
                    <p className="text-sm text-slate-500">{doc.type}</p>
                  </div>

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
          </div>

          <div className="rounded-[2rem] bg-[#073F3A] p-7 text-white shadow-xl shadow-slate-900/5">
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

            <button className="mt-6 w-full rounded-full bg-[#18C98B] px-6 py-3 font-bold text-[#073F3A]">
              Añadir nota interna
            </button>

            <p className="mt-4 text-sm text-white/60">
              Estas notas no son visibles para el cliente.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-[2rem] bg-white p-7 shadow-xl shadow-slate-900/5">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold">
                Actualizaciones visibles para cliente
              </h2>
              <p className="mt-1 text-slate-500">
                Solo estos mensajes aparecen en el portal del cliente.
              </p>
            </div>

            <button className="rounded-full bg-[#008B7A] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#073F3A]">
              Nueva actualización
            </button>
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
        </div>
      </section>
    </main>
  );
}
