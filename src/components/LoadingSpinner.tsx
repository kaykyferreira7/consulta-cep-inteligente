export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center gap-4 py-6 animate-fadeIn" aria-live="polite" aria-label="Carregando">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-4 border-sky-100" />
        <div className="absolute inset-0 rounded-full border-4 border-sky-500 border-t-transparent animate-spin" />
      </div>
      <p className="text-slate-500 text-sm font-medium">Consultando ViaCEP...</p>
    </div>
  );
}
