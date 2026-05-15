import { useState, useCallback } from 'react';
import { CepData, CepState } from '../types/cep';
import { fetchCep } from '../services/cepService';
import { isValidCep } from '../utils/cepValidator';

export function useCepSearch() {
  const [state, setState] = useState<CepState>({
    data: null,
    loading: false,
    error: null,
  });

  const search = useCallback(async (cep: string) => {
    if (!isValidCep(cep)) {
      setState({ data: null, loading: false, error: 'CEP inválido. Digite um CEP com 8 dígitos.' });
      return;
    }

    setState({ data: null, loading: true, error: null });

    try {
      const data: CepData = await fetchCep(cep);
      setState({ data, loading: false, error: null });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erro ao consultar o CEP. Tente novamente.';
      setState({ data: null, loading: false, error: message });
    }
  }, []);

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return { ...state, search, reset };
}
