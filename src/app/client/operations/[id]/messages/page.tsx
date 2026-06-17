import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Header from "@/components/Header";

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
    <main className="min-h-screen bg-white text-ink">
      <section className="mx-auto max-w-5xl px-6 py-8">
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
          <Card>
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">Conversación</h2>
                <p className="mt-1 text-slate-500">
                  Operación: Compra vivienda habitual
                </p>
              </div>

              <Badge size="md">Carlos López</Badge>
            </div>

            <div className="space-y-5">
              {messages.map((message) => {
                const isClient = message.type === "client";

                return (
                  <div
                    key={message.text}
                    className={`flex ${
                      isClient ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-[1.5rem] p-5 ${
                        isClient
                          ? "bg-brand-accent text-white"
                          : "bg-surface text-ink"
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
          </Card>

          <Card>
            <h2 className="mb-5 text-2xl font-bold">Nuevo mensaje</h2>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Asunto
                </label>

                <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-accent">
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
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-accent"
                />
              </div>

              <div className="rounded-3xl bg-surface p-5">
                <p className="font-bold text-brand-deep">Comunicación directa</p>
                <p className="mt-2 leading-7 text-slate-600">
                  Esta versión es una demostración funcional del flujo. En la
                  versión final, los mensajes llegarán a tu asesor y quedarán
                  registrados en tu operación.
                </p>
              </div>

              <Button href="/client/operations/1" fullWidth>
                Enviar mensaje
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </main>
  );
}
