import { describe, it, expect, vi, beforeEach } from 'vitest';
import axios from 'axios';
import { fetchCep } from '../services/cepService';

vi.mock('axios');
const mockedAxios = vi.mocked(axios);

const mockCepResponse = {
  cep: '01310-100',
  logradouro: 'Avenida Paulista',
  complemento: 'de 1 a 610 - lado par',
  bairro: 'Bela Vista',
  localidade: 'São Paulo',
  uf: 'SP',
  ddd: '11',
  erro: false,
};

describe('fetchCep', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return address data for a valid CEP', async () => {
    mockedAxios.get = vi.fn().mockResolvedValue({ data: mockCepResponse });

    const result = await fetchCep('01310100');

    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://viacep.com.br/ws/01310100/json/'
    );
    expect(result).toEqual(mockCepResponse);
    expect(result.localidade).toBe('São Paulo');
    expect(result.uf).toBe('SP');
  });

  it('should strip formatting from CEP before calling API', async () => {
    mockedAxios.get = vi.fn().mockResolvedValue({ data: mockCepResponse });

    await fetchCep('01310-100');

    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://viacep.com.br/ws/01310100/json/'
    );
  });

  it('should throw error when CEP is not found (erro: true)', async () => {
    mockedAxios.get = vi.fn().mockResolvedValue({ data: { erro: true } });

    await expect(fetchCep('99999999')).rejects.toThrow(
      'CEP não encontrado. Verifique o número e tente novamente.'
    );
  });

  it('should throw error on network failure', async () => {
    mockedAxios.get = vi.fn().mockRejectedValue(new Error('Network Error'));

    await expect(fetchCep('01310100')).rejects.toThrow('Network Error');
  });

  it('should return correct DDD in response', async () => {
    mockedAxios.get = vi.fn().mockResolvedValue({ data: mockCepResponse });

    const result = await fetchCep('01310100');

    expect(result.ddd).toBe('11');
  });
});
