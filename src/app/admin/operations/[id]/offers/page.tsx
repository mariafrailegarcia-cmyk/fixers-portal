const offers = [
  {
    bank: "Entidad A",
    type: "Hipoteca fija",
    tin: "2,75%",
    tae: "3,05%",
    monthly: "980 €",
    status: "Visible para cliente",
    recommended: true,
  },
  {
    bank: "Entidad B",
    type: "Hipoteca mixta",
    tin: "2,45% primeros 5 años",
    tae: "3,20%",
    monthly: "940 €",
    status: "Visible para cliente",
    recommended: false,
  },
  {
    bank: "Entidad C",
    type: "Hipoteca variable",
    tin: "Euríbor + 0,65%",
    tae: "Variable",
    monthly: "Desde 910 €",
    status: "Solo interna",
    recommended: false,
  },
];

export default function AdminOffersPage() {
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
            href="/admin/operations/1"
            className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-bold text-[#073F3A] transition hover:border-[#008B7A] hover:text-[#008B7A]"
          >
            Volver a la operación
          </a>
        </header>

        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#008B7A]">
              Ofertas bancarias
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Gestionar ofertas de Marta García
            </h1>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Añade, compara y decide qué ofertas hipotecarias serán visibles
              para el cliente en su portal privado.
            </p>
          </div>

          <span className="w-fit rounded-full bg-[#E9FFF6] px-5 py-3 text-sm font-bold text-[#008B7A]">
            2 visibles para cliente
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-[2rem] bg-white p-7 shadow-xl shadow-slate-900/5">
            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-bold">Ofertas registradas</h2>
                <p className="mt-1 text-slate-500">
                  Control interno de propuestas recibidas.
                </p>
              </div>

              <a
                href="/client/operations/1/offers"
                className="rounded-full border border-[#008B7A] px-5 py-2 text-sm font-bold text-[#008B7A] transition hover:bg-[#008B7A] hover:text-white"
              >
                Ver como cliente
              </a>
            </div>

            <div className="space-y-5">
              {offers.map((offer) => (
                <div
                  key={offer.bank}
                  className={`rounded-3xl border p-5 ${
                    offer.recommended
                      ? "border-[#008B7A] bg-[#F7FAF8]"
                      : "border-slate-100 bg-white"
                  }`}
                >
                  <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div>
                      <p className="text-sm font-bold text-[#008B7A]">
                        {offer.bank}
                      </p>
                      <h3 className="mt-1 text-2xl font-bold">{offer.type}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {offer.recommended && (
                        <span className="rounded-full bg-[#008B7A] px-3 py-1 text-xs font-bold text-white">
                          Recomendada
                        </span>
                      )}

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          offer.status === "Visible para cliente"
                            ? "bg-[#E9FFF6] text-[#008B7A]"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {offer.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="rounded-2xl bg-white p-4">
                      <p className="text-sm font-bold text-slate-500">TIN</p>
                      <p className="mt-1 text-lg font-bold">{offer.tin}</p>
                    </div>

                    <div className="rounded-2xl bg-white p-4">
                      <p className="text-sm font-bold text-slate-500">TAE</p>
                      <p className="mt-1 text-lg font-bold">{offer.tae}</p>
                    </div>

                    <div className="rounded-2xl bg-white p-4">
                      <p className="text-sm font-bold text-slate-500">Cuota</p>
                      <p className="mt-1 text-lg font-bold text-[#008B7A]">
                        {offer.monthly}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-4">
                      <p className="text-sm font-bold text-slate-500">
                        Cliente
                      </p>
                      <p className="mt-1 text-lg font-bold">
                        {offer.status === "Visible para cliente" ? "Sí" : "No"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <button className="rounded-full border border-slate-200 px-5 py-2 text-sm font-bold transition hover:border-[#008B7A] hover:text-[#008B7A]">
                      Editar
                    </button>

                    <button className="rounded-full border border-slate-200 px-5 py-2 text-sm font-bold transition hover:border-[#008B7A] hover:text-[#008B7A]">
                      Marcar como recomendada
                    </button>

                    <button className="rounded-full border border-slate-200 px-5 py-2 text-sm font-bold transition hover:border-[#008B7A] hover:text-[#008B7A]">
                      Cambiar visibilidad
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-xl shadow-slate-900/5">
            <h2 className="mb-6 text-2xl font-bold">Añadir nueva oferta</h2>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Entidad bancaria
                </label>
                <input
                  placeholder="Nombre del banco"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#008B7A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Tipo de hipoteca
                </label>
                <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#008B7A]">
                  <option>Hipoteca fija</option>
                  <option>Hipoteca mixta</option>
                  <option>Hipoteca variable</option>
                </select>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    TIN
                  </label>
                  <input
                    placeholder="2,75%"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#008B7A]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    TAE
                  </label>
                  <input
                    placeholder="3,05%"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#008B7A]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Cuota estimada
                </label>
                <input
                  placeholder="980 €"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#008B7A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Observación interna
                </label>
                <textarea
                  rows={4}
                  placeholder="Notas internas sobre vinculaciones, comisiones o condiciones."
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#008B7A]"
                />
              </div>

              <div className="rounded-3xl bg-[#F7FAF8] p-5">
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 h-4 w-4" />
                  <span>
                    <span className="block font-bold text-[#073F3A]">
                      Visible para cliente
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-slate-600">
                      Marca esta opción solo si la oferta ya está revisada y se
                      puede mostrar en el portal del cliente.
                    </span>
                  </span>
                </label>
              </div>

              <a
                href="/admin/operations/1/offers"
                className="block w-full rounded-full bg-[#008B7A] px-6 py-3 text-center font-bold text-white transition hover:bg-[#073F3A]"
              >
                Añadir oferta demo
              </a>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
