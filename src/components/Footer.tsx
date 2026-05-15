export function Footer() {
  return (
    <footer className="mt-10 text-center">
      <p className="text-xs text-slate-400">
        Dados fornecidos pela API pública{' '}
        <a
          href="https://viacep.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 hover:text-sky-700 font-medium underline underline-offset-2 transition-colors"
        >
          ViaCEP
        </a>
        {' '}· Cobertura nacional de CEPs dos Correios
      </p>
    </footer>
  );
}
