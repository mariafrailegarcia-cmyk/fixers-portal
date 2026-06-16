export default function NewOperationPage() {
  return (
    <main className="min-h-screen bg-[#F7FAF8] text-[#0B1736]">
      <section className="mx-auto max-w-5xl px-6 py-8">
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

        <div className="mb-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#008B7A]">
            Nueva operación
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Crear operación hipotecaria
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Registra un nuevo cliente y crea su expediente para hacer seguimiento
            desde el panel interno y desde el portal cliente.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-900/5">
          <form className="space-y-8">
            <div>
              <h2 className="mb-5 text-2xl font-bold">Datos del cliente</h2>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Nombre completo
                  </label>
                  <input
                    placeholder="Marta García"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#008B7A]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="cliente@email.com"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#008B7A]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Teléfono
                  </label>
                  <input
                    placeholder="+34 600 000 000"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#008B7A]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Asesor asignado
                  </label>
                  <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#008B7A]">
                    <option>Carlos López</option>
                    <option>Ana Ruiz</option>
                    <option>María Torres</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-5 text-2xl font-bold">Datos de la operación</h2>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Tipo de operación
                  </label>
                  <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#008B7A]">
                    <option>Compra vivienda habitual</option>
                    <option>Cambio de hipoteca</option>
                    <option>Compra segunda vivienda</option>
                    <option>Hipoteca autopromotor</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Importe solicitado
                  </label>
                  <input
                    placeholder="240.000 €"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#008B7A]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Ciudad
                  </label>
                  <input
                    placeholder="Madrid"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#008B7A]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Estado inicial
                  </label>
                  <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#008B7A]">
                    <option>Consulta inicial</option>
                    <option>Documentación pendiente</option>
                    <option>Estudio financiero</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-5 text-2xl font-bold">Próximo paso visible</h2>

              <textarea
                rows={4}
                placeholder="Estamos revisando tu caso y pronto te indicaremos la documentación necesaria."
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#008B7A]"
              />
            </div>

            <div className="rounded-3xl bg-[#F7FAF8] p-5">
              <p className="font-bold text-[#073F3A]">Nota importante</p>
              <p className="mt-2 leading-7 text-slate-600">
                Esta pantalla todavía es visual. Más adelante conectaremos este
                formulario con Supabase para guardar clientes y operaciones reales.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/admin/operations/1"
                className="rounded-full bg-[#008B7A] px-7 py-4 text-center font-bold text-white transition hover:bg-[#073F3A]"
              >
                Crear operación demo
              </a>

              <a
                href="/admin/dashboard"
                className="rounded-full border border-slate-200 px-7 py-4 text-center font-bold text-[#073F3A] transition hover:border-[#008B7A] hover:text-[#008B7A]"
              >
                Cancelar
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
