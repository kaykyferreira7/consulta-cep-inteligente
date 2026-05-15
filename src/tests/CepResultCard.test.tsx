import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CepResultCard } from '../components/CepResultCard';
import { CepData } from '../types/cep';

const mockData: CepData = {
  cep: '01310-100',
  logradouro: 'Avenida Paulista',
  complemento: 'de 1 a 610 - lado par',
  bairro: 'Bela Vista',
  localidade: 'São Paulo',
  uf: 'SP',
  ddd: '11',
};

describe('CepResultCard', () => {
  it('renders all address fields', () => {
    render(<CepResultCard data={mockData} />);

    expect(screen.getByText('01310-100')).toBeInTheDocument();
    expect(screen.getByText('Avenida Paulista')).toBeInTheDocument();
    expect(screen.getByText('de 1 a 610 - lado par')).toBeInTheDocument();
    expect(screen.getByText('Bela Vista')).toBeInTheDocument();
    expect(screen.getByText('São Paulo')).toBeInTheDocument();
    expect(screen.getByText('SP')).toBeInTheDocument();
    expect(screen.getByText('11')).toBeInTheDocument();
  });

  it('renders field labels', () => {
    render(<CepResultCard data={mockData} />);

    expect(screen.getByText('Logradouro')).toBeInTheDocument();
    expect(screen.getByText('Bairro')).toBeInTheDocument();
    expect(screen.getByText('Cidade')).toBeInTheDocument();
    expect(screen.getByText('Estado (UF)')).toBeInTheDocument();
    expect(screen.getByText('DDD')).toBeInTheDocument();
  });

  it('shows "Não informado" for empty fields', () => {
    const dataWithEmpty: CepData = { ...mockData, complemento: '' };
    render(<CepResultCard data={dataWithEmpty} />);

    expect(screen.getAllByText('Não informado')).toHaveLength(1);
  });

  it('shows valid badge', () => {
    render(<CepResultCard data={mockData} />);
    expect(screen.getByText('Válido')).toBeInTheDocument();
  });
});
