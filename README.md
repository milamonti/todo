# ToDo List

Aplicação de gerenciamento de tarefas desenvolvida com React, TypeScript e Tailwind CSS, com persistência de dados no localStorage.

## Sobre o Projeto

Uma aplicação web para criação, edição e controle de tarefas. O projeto foi desenvolvido com foco em componentização, reutilização de código e uma arquitetura organizada usando custom hooks e Context API.

## Tecnologias

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript 5** - Tipagem estática para JavaScript
- **Vite 7** - Build tool e dev server
- **Tailwind CSS 4** - Framework CSS utility-first
- **React Router 7** - Roteamento da aplicação
- **Class Variance Authority** - Gerenciamento de variantes de componentes
- **use-local-storage** - Hook para persistência no localStorage

## Funcionalidades

- Criar novas tarefas
- Editar tarefas existentes
- Marcar tarefas como concluídas
- Excluir tarefas
- Visualizar resumo de tarefas (total e concluídas)
- Persistência de dados no localStorage
- Estados de loading para operações assíncronas
- Página de demonstração de componentes

## Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd todo

# Instale as dependências
npm install
# ou
pnpm install
```

## Scripts

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Preview do build
npm run preview

# Linting
npm run lint
```

## Estrutura do Projeto

```
src/
├── assets/
│   ├── icons/          # Ícones SVG
│   └── images/         # Imagens (logo)
├── components/         # Componentes reutilizáveis
│   ├── badge.tsx
│   ├── button.tsx
│   ├── button-icon.tsx
│   ├── card.tsx
│   ├── checkbox-input.tsx
│   ├── container.tsx
│   ├── icon.tsx
│   ├── input-text.tsx
│   ├── skeleton.tsx
│   └── text.tsx
├── core-components/    # Componentes da aplicação
│   ├── footer.tsx
│   ├── header.tsx
│   ├── main-content.tsx
│   ├── task-item.tsx
│   ├── tasks-list.tsx
│   └── tasks-summary.tsx
├── hooks/             # Custom hooks
│   ├── use-task.tsx   # Operações individuais de tarefas
│   └── use-tasks.tsx  # Gerenciamento da lista de tarefas
├── models/            # Tipos e enums
│   └── task.tsx
├── pages/             # Páginas da aplicação
│   ├── layout-main.tsx
│   ├── page-home.tsx
│   └── page-components.tsx
└── helpers/           # Funções auxiliares
    └── utils.ts
```

## Arquitetura e Padrões

### Componentização

Os componentes foram desenvolvidos seguindo o padrão de composição e variants com **Class Variance Authority**, permitindo múltiplas variações de estilo através de props:

```tsx
// Exemplo de uso
<Button variant="primary" size="md" icon={PlusIcon}>
  Nova Tarefa
</Button>
```

### Custom Hooks

Dois hooks principais gerenciam o estado da aplicação:

- **`useTask`**: Operações CRUD de tarefas individuais (criar, editar, excluir, alterar status)
- **`useTasks`**: Carregamento e cálculos sobre a lista de tarefas (total, concluídas)

### Estados de Loading

Componentes possuem prop `loading` para exibir skeletons durante carregamento de dados, e `handling` para indicar processamento de ações (ex: salvando, deletando).

### Persistência de Dados

Utiliza `use-local-storage` para sincronizar automaticamente o estado das tarefas com o localStorage do navegador.

### Gerenciamento de Estado

O estado das tarefas possui controle de ciclo de vida através do enum `TaskState`:
- `Creating`: Tarefa em modo de criação (editing inline)
- `Created`: Tarefa salva e disponível

## Componentes Principais

### Button e ButtonIcon
Botões com variantes de estilo, tamanhos e estados (disabled, loading, handling).

### CheckboxInput
Checkbox customizado com suporte a estados de loading e disabled.

### Card
Container com bordas, sombra e padding configurável.

### Skeleton
Componente de loading state com animação de pulso.

### TaskItem
Componente de tarefa com modo de visualização e edição inline, incluindo ações de editar, concluir e excluir.

## Rotas

- `/` - Página principal com lista de tarefas
- `/components` - Página de demonstração dos componentes do design system

## Plugins Vite

- `@vitejs/plugin-react-swc` - Compilação rápida do React com SWC
- `@tailwindcss/vite` - Integração do Tailwind CSS v4
- `vite-plugin-svgr` - Importação de SVGs como componentes React

## Build e Deploy

O projeto utiliza Vite para build otimizado. Os arquivos gerados ficam na pasta `dist/` e podem ser servidos por qualquer servidor estático.

```bash
npm run build
npm run preview
```
