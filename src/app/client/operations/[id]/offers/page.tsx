const offers = [
  {
    entity: "Entidad A",
    type: "Hipoteca fija",
    tin: "2,75%",
    tae: "3,05%",
    monthly: "980 €",
    term: "30 años",
    status: "Recomendada",
    highlight: true,
  },
  {
    entity: "Entidad B",
    type: "Hipoteca mixta",
    tin: "2,45% primeros 5 años",
    tae: "3,20%",
    monthly: "940 €",
    term: "30 años",
    status: "En revisión",
    highlight: false,
  },
  {
    entity: "Entidad C",
    type: "Hipoteca variable",
    tin: "Euríbor + 0,65%",
    tae: "Variable",
    monthly: "Desde 910 €",
    term: "30 años",
    status: "Pendiente de confirmar",
    highlight: false,
  },
];

export default function ClientOffersPage() {
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
            href="/client/operations/1"
            className="rounded-full border border-slate-200 px-5 py-2 text-sm font-bold text-[#073F3A] transition hover:border-[#008B7A] hover:text-[#008B7A]"
          >
            Volver a la operación
          </a>
        </header>

        <div className="mb-8 rounded-[2rem] bg-[#F7FAF8] p-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#008B7A]">
            Ofertas hipotecarias
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Comparativa de ofertas
              </h1>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                Aquí podrás ver las opciones seleccionadas por tu asesor para
                comparar condiciones de forma clara antes de tomar una decisión.
              </p>
            </div>

            <span className="w-fit rounded-full bg-[#E9FFF6] px-5 py-3 text-sm font-bold text-[#008B7A]">
              3 ofertas disponibles
            </span>
          </div>
        </div>

        <div className="mb-6 rounded-[2rem] bg-[#073F3A] p-7 text-white">
          <p className="text-sm font-bold text-[#18C98B]">
            Recomendación del asesor
          </p>
          <p className="mt-3 text-xl font-semibold leading-8">
            Marta, de momento la oferta más equilibrada es la de la Entidad A por
            estabilidad, cuota y condiciones generales. Aun así, estamos revisando
            si podemos mejorar alguna vinculación.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.entity}
              className={`rounded-[2rem] border p-7 shadow-xl shadow-slate-900/5 ${
                offer.highlight
                  ? "border-[#008B7A] bg-[#F7FAF8]"
                  : "border-slate-100 bg-white"
              }`}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[#008B7A]">
                    {offer.entity}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold">{offer.type}</h2>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    offer.highlight
                      ? "bg-[#008B7A] text-white"
                      : "bg-[#E9FFF6] text-[#008B7A]"
                  }`}
                >
                  {offer.status}
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-white p-4">
                  <p className="text-sm font-bold text-slate-500">TIN</p>
                  <p className="mt-1 text-xl font-bold">{offer.tin}</p>
                </div>

                <div className="rounded-2xl bg-white p-4">
                  <p className="text-sm font-bold text-slate-500">TAE</p>
                  <p className="mt-1 text-xl font-bold">{offer.tae}</p>
                </div>

                <div className="rounded-2xl bg-white p-4">
                  <p className="text-sm font-bold text-slate-500">
                    Cuota estimada
                  </p>
                  <p className="mt-1 text-xl font-bold text-[#008B7A]">
                    {offer.monthly}
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4">
                  <p className="text-sm font-bold text-slate-500">Plazo</p>
                  <p className="mt-1 text-xl font-bold">{offer.term}</p>
                </div>
              </div>

              <button className="mt-6 w-full rounded-full border border-[#008B7A] px-6 py-3 font-bold text-[#008B7A] transition hover:bg-[#008B7A] hover:text-white">
                Ver detalle
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-900/5">
          <h2 className="mb-4 text-2xl font-bold">Aviso importante</h2>
          <p className="leading-7 text-slate-600">
            Esta pantalla es una demo visual. En la versión real, las ofertas
            deberían estar revisadas por el equipo Fixers antes de mostrarse al
            cliente y podrían incluir documentos como FEIN, vinculaciones,
            comisiones y observaciones internas no visibles.
          </p>
        </div>
      </section>
    </main>
  );
}
