const requiredDocuments = [
  {
    name: "DNI / NIE",
    description: "Documento de identidad por ambas caras.",
    status: "Recibido",
  },
  {
    name: "Últimas 3 nóminas",
    description: "Sube tus tres últimas nóminas en PDF o imagen.",
    status: "Pendiente",
  },
  {
    name: "Declaración de la renta",
    description: "Última declaración presentada.",
    status: "Pendiente",
  },
  {
    name: "Contrato de arras",
    description: "Contrato firmado de reserva o compraventa.",
    status: "Pendiente",
  },
];

export default function ClientDocumentsPage() {
  return (
    <main className="min-h-screen bg-white text-[#0B1736]">
      <section className="mx-auto max-w-6xl px-6 py-8">
        <header className="mb-10 flex items-center justify-between">
          <a href="/client/dashboard">
            <img
              src="/fixers-logo.png"
              alt="Fixers Finance"
              className="h-12 w-auto"
            />
          </a>

          <a
            href="/client/operations/1"
            className="rounded-full border border-slate-200 px-5 py-2 text-sm font-bold text-[#073F3A] transition hover:border-[#008B7A] hover:text-[#008B7A]"
          >
            Volver a la operación
          </a>
        </header>

        <div className="mb-8 rounded-[2rem] bg-[#F7FAF8] p-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#008B7A]">
            Documentación
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Sube tus documentos
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Aquí podrás subir los documentos necesarios para que el equipo Fixers
            pueda revisar tu operación hipotecaria.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-900/5">
            <h2 className="mb-6 text-2xl font-bold">Documentos solicitados</h2>

            <div className="space-y-4">
              {requiredDocuments.map((doc) => (
                <div
                  key={doc.name}
                  className="rounded-3xl border border-slate-100 p-5"
                >
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <p className="font-bold">{doc.name}</p>

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

                  <p className="text-sm leading-6 text-slate-500">
                    {doc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-900/5">
            <h2 className="mb-6 text-2xl font-bold">Subir nuevo documento</h2>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Tipo de documento
                </label>

                <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#008B7A]">
                  <option>Últimas 3 nóminas</option>
                  <option>Declaración de la renta</option>
                  <option>Contrato de arras</option>
                  <option>Otro documento</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Archivo
                </label>

                <div className="rounded-[2rem] border-2 border-dashed border-slate-200 bg-[#F7FAF8] p-8 text-center">
                  <p className="text-lg font-bold text-[#073F3A]">
                    Arrastra aquí tu archivo
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    O selecciónalo manualmente desde tu dispositivo.
                  </p>

                  <input
                    type="file"
                    className="mt-6 w-full rounded-2xl bg-white p-3 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Comentario opcional
                </label>

                <textarea
                  rows={4}
                  placeholder="Puedes añadir una aclaración para tu asesor."
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#008B7A]"
                />
              </div>

              <div className="rounded-3xl bg-[#F7FAF8] p-5">
                <p className="font-bold text-[#073F3A]">Demo visual</p>
                <p className="mt-2 leading-7 text-slate-600">
                  Más adelante conectaremos esta pantalla con Supabase Storage
                  para guardar archivos reales de forma segura.
                </p>
              </div>

              <a
                href="/client/operations/1"
                className="block w-full rounded-full bg-[#008B7A] px-6 py-3 text-center font-bold text-white transition hover:bg-[#073F3A]"
              >
                Subir documento demo
              </a>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
