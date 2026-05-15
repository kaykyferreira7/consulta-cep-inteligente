import { AlertCircle, X } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onDismiss?: () => void;
}

export function ErrorMessage({ message, onDismiss }: ErrorMessageProps) {
  return (
    <div
      role="alert"
      className="flex items-start gap-3 w-full px-4 py-3.5 rounded-xl bg-red-50 border border-red-200 animate-fadeIn"
    >
      <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
      <p className="flex-1 text-red-700 text-sm font-medium leading-snug">{message}</p>
      {onDismiss && (
        <button
          onClick={onDismiss}
          aria-label="Fechar erro"
          className="text-red-400 hover:text-red-600 transition-colors shrink-0"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
