import { MapPin, Home, Map, Phone, Navigation, Building2, Info } from 'lucide-react';
import { CepData } from '../types/cep';

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-slate-100 last:border-0">
      <span className="mt-0.5 text-sky-500 shrink-0">{icon}</span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">{label}</p>
        <p className="text-slate-800 font-medium text-sm leading-snug break-words">
          {value || <span className="text-slate-300 italic font-normal">Não informado</span>}
        </p>
      </div>
    </div>
  );
}

interface CepResultCardProps {
  data: CepData;
}

export function CepResultCard({ data }: CepResultCardProps) {
  return (
    <div className="w-full animate-fadeIn">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100">
          <MapPin size={16} className="text-emerald-600" />
        </div>
        <div>
          <p className="text-xs text-slate-500 font-medium">CEP encontrado</p>
          <p className="text-slate-800 font-bold font-mono tracking-wider text-base leading-tight">{data.cep}</p>
        </div>
        <span className="ml-auto inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
          Válido
        </span>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm divide-y divide-slate-100 overflow-hidden">
        <InfoRow icon={<Home size={16} />} label="Logradouro" value={data.logradouro} />
        <InfoRow icon={<Info size={16} />} label="Complemento" value={data.complemento} />
        <InfoRow icon={<Navigation size={16} />} label="Bairro" value={data.bairro} />
        <InfoRow icon={<Building2 size={16} />} label="Cidade" value={data.localidade} />
        <InfoRow icon={<Map size={16} />} label="Estado (UF)" value={data.uf} />
        <InfoRow icon={<Phone size={16} />} label="DDD" value={data.ddd} />
      </div>
    </div>
  );
}
