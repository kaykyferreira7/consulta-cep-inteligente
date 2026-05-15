# Consulta Inteligente de CEP

## Deploy Online
https://consulta-cep-inteligente.vercel.app

Aplicação web profissional para consulta...

Aplicação web profissional para consulta de endereços brasileiros a partir do CEP, utilizando a API pública [ViaCEP](https://viacep.com.br).

## Tecnologias

| Tecnologia | Finalidade |
|---|---|
| React 18 | Interface do usuário |
| Vite 5 | Build tool e dev server |
| TypeScript | Tipagem estática |
| Axios | Requisições HTTP |
| Tailwind CSS | Estilização |
| Vitest | Framework de testes |
| React Testing Library | Testes de componentes |
| GitHub Actions | CI/CD pipeline |
| Vercel | Deploy em produção |

## Funcionalidades

- Consulta de CEP em tempo real via API ViaCEP
- Exibição de: logradouro, bairro, cidade, estado, complemento e DDD
- Validação e formatação automática do CEP
- Loading state durante requisição
- Mensagens de erro claras para CEP inválido ou não encontrado
- Interface responsiva para todos os dispositivos

## Como Executar

### Pré-requisitos

- Node.js >= 18
- npm >= 9

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/consulta-cep.git
cd consulta-cep

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

## Como Rodar os Testes

```bash
# Rodar todos os testes uma vez
npm test

# Rodar testes em modo watch (desenvolvimento)
npm run test:watch
```

Os testes cobrem:
- Serviço de consulta à API ViaCEP (mock HTTP)
- Utilitários de validação e formatação de CEP
- Componentes React (renderização e comportamento)

## Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## Estrutura do Projeto

```
src/
├── components/         # Componentes React reutilizáveis
│   ├── CepInput.tsx    # Campo de entrada com formatação
│   ├── CepResultCard.tsx # Card de exibição do endereço
│   ├── ErrorMessage.tsx  # Componente de erro
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── LoadingSpinner.tsx
├── hooks/
│   └── useCepSearch.ts # Hook para gerenciar estado da consulta
├── services/
│   └── cepService.ts   # Integração com a API ViaCEP
├── tests/
│   ├── setup.ts
│   ├── cepService.test.ts
│   ├── cepValidator.test.ts
│   └── CepResultCard.test.tsx
├── types/
│   └── cep.ts          # Tipos TypeScript
└── utils/
    └── cepValidator.ts # Validação e formatação de CEP
```

## CI/CD

O pipeline de integração contínua é executado automaticamente no GitHub Actions para cada push nas branches `main` e `entrega-intermediaria`, e para Pull Requests.

Etapas do pipeline:
1. Checkout do repositório
2. Setup do Node.js 20
3. Instalação de dependências (`npm ci`)
4. Lint (`eslint`)
5. Testes (`vitest`)
6. Build (`vite build`)

## Deploy

O projeto está configurado para deploy automático na [Vercel](https://vercel.com) via `vercel.json`.

Para fazer deploy manual:

```bash
npm install -g vercel
vercel --prod
```

## API

Este projeto utiliza a API pública gratuita **ViaCEP**:

```
GET https://viacep.com.br/ws/{cep}/json/
```

Não requer autenticação nem chave de API.

## Fluxo Git

```
main
└── entrega-intermediaria  ← branch de desenvolvimento
    └── feature/xxx        ← features individuais
```

Processo:
1. Criar Issue descrevendo a funcionalidade
2. Criar branch a partir de `entrega-intermediaria`
3. Desenvolver e commitar
4. Abrir Pull Request para `main`
5. Revisão e merge
