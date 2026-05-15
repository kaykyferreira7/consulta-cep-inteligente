export interface CepData {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ddd: string;
  erro?: boolean;
}

export interface CepState {
  data: CepData | null;
  loading: boolean;
  error: string | null;
}
