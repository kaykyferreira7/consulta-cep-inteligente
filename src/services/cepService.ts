import axios from 'axios';
import { CepData } from '../types/cep';
import { sanitizeCep } from '../utils/cepValidator';

const VIACEP_BASE_URL = 'https://viacep.com.br/ws';

export async function fetchCep(cep: string): Promise<CepData> {
  const digits = sanitizeCep(cep);
  const response = await axios.get<CepData>(`${VIACEP_BASE_URL}/${digits}/json/`);

  if (response.data.erro) {
    throw new Error('CEP não encontrado. Verifique o número e tente novamente.');
  }

  return response.data;
}
