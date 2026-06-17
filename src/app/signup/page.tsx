import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import SocialAuth from "@/components/SocialAuth";

export const metadata: Metadata = {
  title: "Crear cuenta · Fixers Finance",
  description:
    "Crea tu cuenta en el portal de Fixers Finance para seguir tu operación hipotecaria paso a paso.",
};

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <section className="mx-auto grid min-h-screen max-w-7xl px-6 py-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Logo href="/" height={48} priority className="mb-12" />

          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-accent">
            Crea tu cuenta
          </p>

          <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Empieza a seguir tu hipoteca.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Crea tu acceso al portal de Fixers Finance y consulta el estado de tu
            operación, sube documentos y habla con tu asesor desde un único
            lugar.
          </p>

          <div className="mt-10 space-y-4">
            {[
              "Sigue el progreso de tu operación en tiempo real.",
              "Sube y revisa tu documentación de forma segura.",
              "Habla con tu asesor y recibe cada actualización.",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-mint text-sm font-bold text-brand-accent">
                  ✓
                </span>
                <p className="leading-7 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-md rounded-[2rem] border border-slate-100 bg-white p-8 shadow-2xl shadow-slate-900/10">
          <h2 className="text-3xl font-bold">Crear cuenta</h2>
          <p className="mt-2 text-slate-500">
            Regístrate para acceder a tu portal hipotecario.
          </p>

          <div className="mt-8">
            <SocialAuth href="/client/dashboard" />
          </div>

          <div className="my-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-slate-200" />
            <span className="text-sm font-semibold text-slate-400">
              o regístrate con tu email
            </span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <form className="space-y-5">
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

            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 h-4 w-4" />
              <span className="text-sm leading-6 text-slate-600">
                Acepto los términos del servicio y la política de privacidad de
                Fixers Finance.
              </span>
            </label>
          </form>

          <div className="mt-6">
            <Button href="/client/dashboard" fullWidth>
              Crear cuenta
            </Button>
          </div>

          <p className="mt-6 text-center text-sm text-slate-500">
            ¿Ya tienes cuenta?{" "}
            <Link
              href="/login"
              className="font-bold text-brand-accent hover:underline"
            >
              Inicia sesión
            </Link>
          </p>

          <Link
            href="/"
            className="mt-3 block text-center text-sm font-bold text-slate-500 transition hover:text-brand-accent"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
    </main>
  );
}
