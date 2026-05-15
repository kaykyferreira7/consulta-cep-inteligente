import { MapPin } from 'lucide-react';

export function Header() {
  return (
    <header className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-600 shadow-lg shadow-sky-200 mb-4">
        <MapPin size={32} className="text-white" />
      </div>
      <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
        Consulta de CEP
      </h1>
      <p className="mt-2 text-slate-500 text-base max-w-sm mx-auto leading-relaxed">
        Digite um CEP brasileiro para consultar endereço completo via ViaCEP
      </p>
    </header>
  );
}
