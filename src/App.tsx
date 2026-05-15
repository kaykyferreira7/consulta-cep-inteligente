import { useCepSearch } from './hooks/useCepSearch';
import { CepInput } from './components/CepInput';
import { CepResultCard } from './components/CepResultCard';
import { ErrorMessage } from './components/ErrorMessage';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  const { data, loading, error, search, reset } = useCepSearch();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100 flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        <Header />

        <main className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-6 sm:p-8">
          <CepInput onSearch={search} loading={loading} />

          <div className="mt-6 space-y-4">
            {loading && <LoadingSpinner />}

            {error && !loading && (
              <ErrorMessage message={error} onDismiss={reset} />
            )}

            {data && !loading && !error && (
              <CepResultCard data={data} />
            )}

            {!data && !loading && !error && (
              <div className="flex flex-col items-center gap-2 py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-slate-400">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-slate-500 text-sm font-medium">Nenhuma consulta realizada</p>
                <p className="text-slate-400 text-xs max-w-xs">Digite um CEP acima e clique em Consultar para ver o endereço completo</p>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
