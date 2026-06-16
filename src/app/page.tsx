export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#0B1736]">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
        <header className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src="/fixers-logo.png"
              alt="Fixers Finance"
              className="h-14 w-auto"
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#073F3A] md:flex">
            <a className="transition hover:text-[#008B7A]" href="#proceso">
              Proceso
            </a>
            <a className="transition hover:text-[#008B7A]" href="#documentos">
              Documentos
            </a>
            <a className="transition hover:text-[#008B7A]" href="#portal">
              Portal cliente
            </a>
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-14 py-16 md:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dce8e3] bg-white px-4 py-2 text-sm font-semibold text-[#008B7A] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#18C98B]" />
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
              <a
                href="/client/dashboard"
                className="rounded-full bg-[#008B7A] px-7 py-4 text-center font-bold text-white shadow-xl shadow-emerald-900/10 transition hover:bg-[#073F3A]"
              >
                Entrar como cliente
              </a>

              <a
                href="/admin/dashboard"
                className="rounded-full border border-[#dce8e3] bg-white px-7 py-4 text-center font-bold text-[#073F3A] shadow-sm transition hover:border-[#008B7A] hover:text-[#008B7A]"
              >
                Panel Fixers
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
              <div>
                <p className="text-3xl font-bold text-[#008B7A]">24/7</p>
                <p className="mt-1 text-sm text-slate-500">
                  Consulta del estado
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-[#008B7A]">100%</p>
                <p className="mt-1 text-sm text-slate-500">
                  Proceso trazable
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-[#008B7A]">1</p>
                <p className="mt-1 text-sm text-slate-500">
                  Portal para todo
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-[#18C98B]/20 blur-2xl" />
            <div className="absolute -bottom-8 -right-8 h-36 w-36 rounded-full bg-[#008B7A]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-7 shadow-2xl shadow-slate-900/10">
              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-1 text-sm font-semibold text-[#008B7A]">
                    Operación hipotecaria
                  </p>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Compra vivienda habitual
                  </h2>
                </div>

                <span className="rounded-full bg-[#E9FFF6] px-4 py-2 text-sm font-bold text-[#008B7A]">
                  En negociación
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

              <div className="mb-7 rounded-3xl border border-[#e6eee9] bg-white p-5 shadow-sm">
                <p className="mb-2 text-sm font-bold text-slate-500">
                  Próximo paso
                </p>
                <p className="leading-7 text-[#0B1736]">
                  Estamos esperando respuesta de varias entidades bancarias.
                  Te avisaremos en cuanto recibamos nuevas condiciones.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  ["Consulta inicial", "Completado", true],
                  ["Documentación recibida", "Completado", true],
                  ["Estudio financiero", "Completado", true],
                  ["Expediente enviado a bancos", "En curso", true],
                  ["Oferta hipotecaria", "Pendiente", false],
                  ["Firma en notaría", "Pendiente", false],
                ].map(([title, status, active]) => (
                  <div
                    key={String(title)}
                    className="flex items-center gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                  >
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                        active
                          ? "bg-[#E9FFF6] text-[#008B7A]"
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
                            ? "text-[#008B7A]"
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
      </section>
    </main>
  );
}