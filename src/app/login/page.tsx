export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white text-[#0B1736]">
      <section className="mx-auto grid min-h-screen max-w-7xl px-6 py-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <a href="/">
            <img
              src="/fixers-logo.png"
              alt="Fixers Finance"
              className="mb-12 h-14 w-auto"
            />
          </a>

          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#008B7A]">
            Acceso privado
          </p>

          <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Entra a tu portal hipotecario.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Consulta el estado de tu operación, revisa la documentación pendiente
            y sigue cada paso hasta la firma con el equipo Fixers.
          </p>

          <div className="mt-10 rounded-[2rem] bg-[#F7FAF8] p-6">
            <p className="font-bold text-[#073F3A]">
              Demo visual
            </p>
            <p className="mt-2 leading-7 text-slate-600">
              En la versión real, esta pantalla se conectará con Supabase para
              validar email, contraseña y permisos de cada usuario.
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
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#008B7A]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#008B7A]"
              />
            </div>
          </form>

          <div className="mt-8 space-y-3">
            <a
              href="/client/dashboard"
              className="block w-full rounded-full bg-[#008B7A] px-6 py-3 text-center font-bold text-white transition hover:bg-[#073F3A]"
            >
              Entrar como cliente
            </a>

            <a
              href="/admin/dashboard"
              className="block w-full rounded-full border border-[#008B7A] px-6 py-3 text-center font-bold text-[#008B7A] transition hover:bg-[#008B7A] hover:text-white"
            >
              Entrar como equipo Fixers
            </a>
          </div>

          <a
            href="/"
            className="mt-6 block text-center text-sm font-bold text-slate-500 hover:text-[#008B7A]"
          >
            Volver al inicio
          </a>
        </div>
      </section>
    </main>
  );
}
