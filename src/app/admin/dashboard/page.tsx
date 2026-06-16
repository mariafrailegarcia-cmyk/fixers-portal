const stats = [
  { label: "Operaciones activas", value: "18" },
  { label: "Pendientes de documentos", value: "7" },
  { label: "En negociación bancaria", value: "9" },
  { label: "Firmas próximas", value: "3" },
];

const operations = [
  {
    client: "Marta García",
    operation: "Compra vivienda habitual",
    status: "En negociación bancaria",
    progress: "60%",
    advisor: "Carlos López",
  },
  {
    client: "Luis Romero",
    operation: "Cambio de hipoteca",
    status: "Documentación pendiente",
    progress: "25%",
    advisor: "Ana Ruiz",
  },
  {
    client: "Laura Sánchez",
    operation: "Hipoteca autopromotor",
    status: "Preparando firma",
    progress: "88%",
    advisor: "Carlos López",
  },
  {
    client: "Daniel Pérez",
    operation: "Compra segunda vivienda",
    status: "Estudio financiero",
    progress: "40%",
    advisor: "María Torres",
  },
];

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-[#F7FAF8] text-[#0B1736]">
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
              <p className="text-sm font-bold">Equipo Fixers</p>
              <p className="text-xs text-slate-500">Panel interno</p>
            </div>

            <a
              href="/"
              className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-bold text-[#073F3A] transition hover:border-[#008B7A] hover:text-[#008B7A]"
            >
              Salir
            </a>
          </div>
        </header>

        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#008B7A]">
              Panel Fixers
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Operaciones hipotecarias
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Gestiona clientes, documentación, estados, notas internas y
              actualizaciones visibles para el cliente.
            </p>
          </div>

          <a
            href="/admin/operations/new"
            className="rounded-full bg-[#008B7A] px-6 py-3 font-bold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-[#073F3A]"
          >
            Nueva operación
          </a>
        </div>

        <div className="mb-6 grid gap-5 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-900/5"
            >
              <p className="text-sm font-bold text-slate-500">{stat.label}</p>
              <p className="mt-3 text-4xl font-bold text-[#008B7A]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-900/5">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-100 p-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-bold">Listado de operaciones</h2>
              <p className="mt-1 text-sm text-slate-500">
                Vista general de expedientes activos.
              </p>
            </div>

            <div className="rounded-full bg-[#E9FFF6] px-4 py-2 text-sm font-bold text-[#008B7A]">
              Actualizado hoy
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {operations.map((item) => (
              <div
                key={item.client}
                className="grid gap-5 p-6 md:grid-cols-[1fr_1.2fr_1fr_0.8fr_0.5fr_auto] md:items-center"
              >
                <div>
                  <p className="font-bold">{item.client}</p>
                  <p className="text-sm text-slate-500">Cliente</p>
                </div>

                <div>
                  <p className="font-semibold">{item.operation}</p>
                  <p className="text-sm text-slate-500">Operación</p>
                </div>

                <div>
                  <span className="rounded-full bg-[#E9FFF6] px-3 py-1 text-sm font-bold text-[#008B7A]">
                    {item.status}
                  </span>
                </div>

                <div>
                  <p className="font-semibold">{item.advisor}</p>
                  <p className="text-sm text-slate-500">Asesor</p>
                </div>

                <div className="font-bold text-[#008B7A]">{item.progress}</div>

                <a
                  href="/admin/operations/1"
                  className="rounded-full border border-slate-200 px-4 py-2 text-center text-sm font-bold transition hover:border-[#008B7A] hover:text-[#008B7A]"
                >
                  Abrir
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-7 shadow-xl shadow-slate-900/5">
            <h3 className="mb-5 text-xl font-bold">Tareas pendientes</h3>

            <div className="space-y-4">
              {[
                "Revisar nóminas de Luis Romero",
                "Actualizar estado de Marta García",
                "Preparar documentación para firma de Laura Sánchez",
              ].map((task) => (
                <div
                  key={task}
                  className="rounded-2xl bg-[#F7FAF8] p-4 font-semibold"
                >
                  {task}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#073F3A] p-7 text-white shadow-xl shadow-slate-900/5">
            <p className="text-sm font-bold text-[#18C98B]">
              Recordatorio interno
            </p>
            <h3 className="mt-3 text-2xl font-bold">
              Separar siempre notas internas y mensajes visibles.
            </h3>
            <p className="mt-4 leading-7 text-white/80">
              Todo comentario interno debe quedarse solo para el equipo Fixers.
              El cliente únicamente debe ver actualizaciones claras, revisadas y
              marcadas como visibles.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
