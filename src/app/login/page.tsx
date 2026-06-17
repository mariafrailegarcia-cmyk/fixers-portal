import Link from "next/link";
import Button from "@/components/Button";
import Logo from "@/components/Logo";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <section className="mx-auto grid min-h-screen max-w-7xl px-6 py-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Logo href="/" height={48} priority className="mb-12" />

          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-accent">
            Acceso privado
          </p>

          <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Entra a tu portal hipotecario.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Consulta el estado de tu operación, revisa la documentación
            pendiente y sigue cada paso hasta la firma con el equipo Fixers.
          </p>

          <div className="mt-10 rounded-[2rem] bg-surface p-6">
            <p className="font-bold text-brand-deep">Acceso seguro</p>
            <p className="mt-2 leading-7 text-slate-600">
              Esta versión es una demostración funcional del flujo. En la versión
              final, el acceso validará email, contraseña y permisos de cada
              usuario de forma segura.
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md rounded-[2rem] border border-slate-100 bg-white p-8 shadow-2xl shadow-slate-900/10">
          <h2 className="text-3xl font-bold">Iniciar sesión</h2>
          <p className="mt-2 text-slate-500">
            Accede como cliente o como miembro del equipo Fixers.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Email
              </label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-accent"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-accent"
              />
            </div>
          </form>

          <div className="mt-8 space-y-3">
            <Button href="/client/dashboard" fullWidth>
              Entrar como cliente
            </Button>

            <Button href="/admin/dashboard" variant="outline" fullWidth>
              Entrar como equipo Fixers
            </Button>
          </div>

          <Link
            href="/"
            className="mt-6 block text-center text-sm font-bold text-slate-500 transition hover:text-brand-accent"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
    </main>
  );
}
