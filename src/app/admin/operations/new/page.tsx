import Button from "@/components/Button";
import Card from "@/components/Card";
import Header from "@/components/Header";

export default function NewOperationPage() {
  return (
    <main className="min-h-screen bg-surface text-ink">
      <section className="mx-auto max-w-5xl px-6 py-8">
        <Header
          logoHref="/admin/dashboard"
          right={
            <Button href="/admin/dashboard" variant="ghost" size="sm">
              Volver al panel
            </Button>
          }
        />

        <div className="mb-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-brand-accent">
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

        <Card className="p-8">
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
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-accent"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="cliente@email.com"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-accent"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Teléfono
                  </label>
                  <input
                    placeholder="+34 600 000 000"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-accent"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Asesor asignado
                  </label>
                  <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-accent">
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
                  <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-accent">
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
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-accent"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Ciudad
                  </label>
                  <input
                    placeholder="Madrid"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-accent"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Estado inicial
                  </label>
                  <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-accent">
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
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-accent"
              />
            </div>

            <div className="rounded-3xl bg-surface p-5">
              <p className="font-bold text-brand-deep">Nota importante</p>
              <p className="mt-2 leading-7 text-slate-600">
                Esta versión es una demostración funcional del flujo. En la
                versión final, este formulario guardará clientes y operaciones
                reales de forma segura.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/admin/operations/1" size="lg">
                Crear operación
              </Button>

              <Button href="/admin/dashboard" variant="ghost" size="lg">
                Cancelar
              </Button>
            </div>
          </form>
        </Card>
      </section>
    </main>
  );
}
