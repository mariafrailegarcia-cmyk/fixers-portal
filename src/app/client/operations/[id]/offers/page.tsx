import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Header from "@/components/Header";

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
    <main className="min-h-screen bg-white text-ink">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <Header
          logoHref="/client/dashboard"
          right={
            <Button href="/client/operations/1" variant="ghost" size="sm">
              Volver a la operación
            </Button>
          }
        />

        <div className="mb-8 rounded-[2rem] bg-surface p-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-brand-accent">
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

            <Badge size="lg">3 ofertas disponibles</Badge>
          </div>
        </div>

        <Card tone="dark" className="mb-6">
          <p className="text-sm font-bold text-brand-light">
            Recomendación del asesor
          </p>
          <p className="mt-3 text-xl font-semibold leading-8">
            Marta, de momento la oferta más equilibrada es la de la Entidad A por
            estabilidad, cuota y condiciones generales. Aun así, estamos revisando
            si podemos mejorar alguna vinculación.
          </p>
        </Card>

        <div className="grid gap-6 lg:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.entity}
              className={`rounded-[2rem] border p-7 shadow-xl shadow-slate-900/5 ${
                offer.highlight
                  ? "border-brand-accent bg-surface"
                  : "border-slate-100 bg-white"
              }`}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-brand-accent">
                    {offer.entity}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold">{offer.type}</h2>
                </div>

                <Badge variant={offer.highlight ? "solid" : "success"}>
                  {offer.status}
                </Badge>
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
                  <p className="mt-1 text-xl font-bold text-brand-accent">
                    {offer.monthly}
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4">
                  <p className="text-sm font-bold text-slate-500">Plazo</p>
                  <p className="mt-1 text-xl font-bold">{offer.term}</p>
                </div>
              </div>

              <Button variant="outline" fullWidth className="mt-6">
                Ver detalle
              </Button>
            </div>
          ))}
        </div>

        <Card className="mt-6">
          <h2 className="mb-4 text-2xl font-bold">Cómo leer esta comparativa</h2>
          <p className="leading-7 text-slate-600">
            Cada oferta ha sido seleccionada y revisada por tu asesor Fixers
            antes de mostrarse aquí. Las condiciones definitivas (FEIN,
            vinculaciones y comisiones) se confirmarán con la entidad antes de la
            firma. Si tienes dudas, puedes escribir a tu asesor en cualquier
            momento.
          </p>
        </Card>
      </section>
    </main>
  );
}
