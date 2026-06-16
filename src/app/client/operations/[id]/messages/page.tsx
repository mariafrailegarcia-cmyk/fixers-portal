const messages = [
  {
    sender: "Carlos López",
    role: "Asesor Fixers",
    text: "Hola Marta, estamos en fase de negociación bancaria. De momento solo necesitamos que subas las nóminas y la declaración de la renta.",
    time: "Hoy · 10:30",
    type: "advisor",
  },
  {
    sender: "Marta García",
    role: "Cliente",
    text: "Perfecto, esta tarde subo los documentos pendientes. Gracias.",
    time: "Hoy · 11:05",
    type: "client",
  },
  {
    sender: "Carlos López",
    role: "Asesor Fixers",
    text: "Genial. En cuanto los recibamos, actualizaremos el expediente y seguiremos negociando con las entidades.",
    time: "Hoy · 11:12",
    type: "advisor",
  },
];

export default function ClientMessagesPage() {
  return (
    <main className="min-h-screen bg-white text-[#0B1736]">
      <section className="mx-auto max-w-5xl px-6 py-8">
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
            Mensajes
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Habla con tu asesor
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Consulta las actualizaciones de tu operación y envía dudas al equipo
            Fixers de forma clara y ordenada.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.65fr]">
          <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-900/5">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Conversación</h2>
                <p className="mt-1 text-slate-500">
                  Operación: Compra vivienda habitual
                </p>
              </div>

              <span className="rounded-full bg-[#E9FFF6] px-4 py-2 text-sm font-bold text-[#008B7A]">
                Carlos López
              </span>
            </div>

            <div className="space-y-5">
              {messages.map((message) => {
                const isClient = message.type === "client";

                return (
                  <div
                    key={message.text}
                    className={`flex ${isClient ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-[1.5rem] p-5 ${
                        isClient
                          ? "bg-[#008B7A] text-white"
                          : "bg-[#F7FAF8] text-[#0B1736]"
                      }`}
                    >
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <div>
                          <p className="font-bold">{message.sender}</p>
                          <p
                            className={`text-xs ${
                              isClient ? "text-white/70" : "text-slate-500"
                            }`}
                          >
                            {message.role}
                          </p>
                        </div>

                        <p
                          className={`text-xs ${
                            isClient ? "text-white/70" : "text-slate-500"
                          }`}
                        >
                          {message.time}
                        </p>
                      </div>

                      <p className="leading-7">{message.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-900/5">
            <h2 className="mb-5 text-2xl font-bold">Nuevo mensaje</h2>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Asunto
                </label>

                <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#008B7A]">
                  <option>Duda sobre documentación</option>
                  <option>Duda sobre estado de la operación</option>
                  <option>Duda sobre oferta bancaria</option>
                  <option>Otra consulta</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Mensaje
                </label>

                <textarea
                  rows={7}
                  placeholder="Escribe aquí tu mensaje para el asesor..."
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#008B7A]"
                />
              </div>

              <div className="rounded-3xl bg-[#F7FAF8] p-5">
                <p className="font-bold text-[#073F3A]">Demo visual</p>
                <p className="mt-2 leading-7 text-slate-600">
                  Más adelante conectaremos esta pantalla con Supabase para
                  guardar mensajes reales y avisar al asesor.
                </p>
              </div>

              <a
                href="/client/operations/1"
                className="block w-full rounded-full bg-[#008B7A] px-6 py-3 text-center font-bold text-white transition hover:bg-[#073F3A]"
              >
                Enviar mensaje demo
              </a>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
