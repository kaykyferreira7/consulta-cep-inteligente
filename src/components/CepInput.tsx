import { useState, FormEvent, ChangeEvent } from 'react';
import { Search, MapPin } from 'lucide-react';
import { formatCep, sanitizeCep } from '../utils/cepValidator';

interface CepInputProps {
  onSearch: (cep: string) => void;
  loading: boolean;
}

export function CepInput({ onSearch, loading }: CepInputProps) {
  const [value, setValue] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const formatted = formatCep(e.target.value);
    if (sanitizeCep(e.target.value).length <= 8) {
      setValue(formatted);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSearch(value);
  }

  const digits = sanitizeCep(value);
  const isReady = digits.length === 8;

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <MapPin
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="00000-000"
            maxLength={9}
            disabled={loading}
            aria-label="Digite o CEP"
            className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-lg font-mono tracking-widest placeholder:text-slate-300 placeholder:font-sans placeholder:tracking-normal focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          />
        </div>
        <button
          type="submit"
          disabled={loading || !isReady}
          className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 text-white font-semibold text-base hover:bg-sky-700 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 whitespace-nowrap"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Buscando...
            </span>
          ) : (
            <>
              <Search size={18} />
              Consultar
            </>
          )}
        </button>
      </div>
    </form>
  );
}
