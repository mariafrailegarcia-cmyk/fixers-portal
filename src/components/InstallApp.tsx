"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallApp() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(
    null,
  );
  const [visible, setVisible] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone ===
        true;
    if (standalone) return; // Ya está instalada.

    try {
      if (sessionStorage.getItem("fixers-install-dismissed") === "1") return;
    } catch {
      // sessionStorage no disponible: continuamos igualmente.
    }

    const ua = window.navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(ua)) {
      // Detección solo en cliente tras el montaje (evita desajustes de
      // hidratación entre servidor y navegador).
      /* eslint-disable react-hooks/set-state-in-effect */
      setIsIOS(true);
      setVisible(true);
      /* eslint-enable react-hooks/set-state-in-effect */
    }

    const onPrompt = (event: Event) => {
      event.preventDefault();
      setDeferred(event as BeforeInstallPromptEvent);
      setVisible(true);
    };
    const onInstalled = () => setVisible(false);

    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    setShowHelp(false);
    try {
      sessionStorage.setItem("fixers-install-dismissed", "1");
    } catch {
      // Ignorado.
    }
  };

  const handleInstall = async () => {
    if (isIOS || !deferred) {
      setShowHelp(true);
      return;
    }
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
        <button
          type="button"
          onClick={handleInstall}
          className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-emerald-900/20 transition hover:bg-brand-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2"
        >
          <span aria-hidden="true">📲</span>
          Instalar app
        </button>

        <button
          type="button"
          onClick={dismiss}
          aria-label="Cerrar"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-bold text-slate-400 shadow-md transition hover:text-slate-600"
        >
          ×
        </button>
      </div>

      {showHelp ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center"
          onClick={() => setShowHelp(false)}
        >
          <div
            className="w-full max-w-sm rounded-[1.5rem] bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-ink">Instalar la app</h3>

            {isIOS ? (
              <ol className="mt-4 space-y-3 text-slate-600">
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-mint text-sm font-bold text-brand-accent">
                    1
                  </span>
                  <span className="leading-7">
                    Pulsa el icono <strong>Compartir</strong> (el cuadrado con
                    una flecha hacia arriba), abajo en Safari.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-mint text-sm font-bold text-brand-accent">
                    2
                  </span>
                  <span className="leading-7">
                    Elige <strong>“Añadir a pantalla de inicio”</strong>.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-mint text-sm font-bold text-brand-accent">
                    3
                  </span>
                  <span className="leading-7">
                    Pulsa <strong>“Añadir”</strong> y listo: el icono de Fixers
                    aparecerá en tu pantalla de inicio.
                  </span>
                </li>
              </ol>
            ) : (
              <p className="mt-4 leading-7 text-slate-600">
                Abre el menú del navegador (botón <strong>⋮</strong> arriba a la
                derecha) y elige{" "}
                <strong>“Instalar aplicación”</strong> o{" "}
                <strong>“Añadir a pantalla de inicio”</strong>. En ordenador,
                también aparece un icono de instalar al final de la barra de
                direcciones.
              </p>
            )}

            <button
              type="button"
              onClick={() => setShowHelp(false)}
              className="mt-6 w-full rounded-lg bg-brand px-6 py-3 font-bold uppercase tracking-wide text-white transition hover:bg-brand-strong"
            >
              Entendido
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
