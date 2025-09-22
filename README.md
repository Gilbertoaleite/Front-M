# Dashboard de Vulnerabilidades - Frontend

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-purple.svg)
![Status](https://img.shields.io/badge/Status-Produção-brightgreen.svg)

Um dashboard moderno e responsivo para visualização e gerenciamento de vulnerabilidades de segurança em ativos de rede.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Melhorias Implementadas](#melhorias-implementadas)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Desenvolvimento Offline](#desenvolvimento-offline)
- [Responsividade](#responsividade)
- [API Mock](#api-mock)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Deploy](#deploy)

## 🎯 Visão Geral

Este projeto é um dashboard completo para monitoramento de vulnerabilidades em ativos de rede, oferecendo visualizações interativas, tabelas de dados e uma experiência totalmente responsiva. O sistema inclui autenticação, gráficos dinâmicos e um robusto sistema de fallback para desenvolvimento offline.

## 🚀 Tecnologias

### Core
- **React 18.2.0** - Biblioteca JavaScript para interfaces
- **TypeScript 4.9.5** - Tipagem estática
- **React Router 6.x** - Roteamento SPA
- **React Scripts 5.0.1** - Toolchain de build

### UI/UX
- **Bootstrap 5.x** - Framework CSS responsivo
- **ApexCharts** - Biblioteca de gráficos interativos
- **CSS Modules** - Estilos componetizados
- **Google Fonts** - Tipografia Ubuntu

### Desenvolvimento
- **Axios** - Cliente HTTP
- **Date-fns** - Manipulação de datas
- **Cross-env** - Variáveis de ambiente multiplataforma
- **ESLint** - Linting de código

## ✨ Funcionalidades

### 🔐 Autenticação
- ✅ Sistema de login com validação
- ✅ Autenticação por token JWT
- ✅ Sistema de mock para testes offline
- ✅ Redirecionamento automático
- ✅ Validação de formulários

### 📊 Dashboard
- ✅ Gráfico de barras (Taxa de vulnerabilidades)
- ✅ Gráfico donut (Distribuição de vulnerabilidades)
- ✅ Tabela de dados paginada
- ✅ Indicadores visuais de risco
- ✅ Métricas em tempo real

### 📱 Responsividade
- ✅ Layout adaptativo para todos os dispositivos
- ✅ Tabela responsiva com modo cards (mobile)
- ✅ Gráficos otimizados por tela
- ✅ Navegação touch-friendly
- ✅ Breakpoints: Mobile (< 768px), Tablet (768-1024px), Desktop (> 1024px)

### 🎨 Interface
- ✅ Design moderno e limpo
- ✅ Paleta de cores consistente
- ✅ Indicadores visuais de severidade
- ✅ Animações suaves
- ✅ Estados de loading e erro

## 🛠️ Melhorias Implementadas

### 📦 Modernização de Dependências
```diff
- React 17.0.2 → React 18.2.0
- react-scripts 4.0.3 → 5.0.1
- React Router v5 → v6
- TypeScript 4.9.5 (atualizado)
- Axios 1.12.2 (atualizado)
```

### 🔧 Correções Técnicas
- ✅ **Vulnerabilidades**: Reduzidas de 137 para 1
- ✅ **Build**: Compatibilidade com Node.js 22
- ✅ **OpenSSL**: Problema resolvido
- ✅ **Yarn**: Dependência removida
- ✅ **TypeScript**: Erros de tipo corrigidos

### 🎯 Migração React Router v6
```javascript
// Antes (v5)
<Switch>
  <Redirect from="/" to="/home" />
  <Route path="/signin" component={SignIn} />
</Switch>

// Depois (v6)
<Routes>
  <Route path="/" element={<Navigate to="/home" />} />
  <Route path="/signin" element={<SignIn />} />
</Routes>
```

### 🔄 Modernização de Componentes
- ✅ **SignIn**: Class → Functional Component com hooks
- ✅ **useNavigate**: Substituiu `withRouter`
- ✅ **React 18**: Migração para `createRoot`
- ✅ **Hooks**: useState, useEffect, useNavigate

### 🗄️ Sistema de Mock Avançado
- ✅ **287 assets** fictícios para testes
- ✅ **Paginação real** com 3 páginas
- ✅ **Dados temporais** consistentes
- ✅ **Fallback automático** quando API indisponível
- ✅ **Multiple endpoints** simulados

## 📥 Instalação

```bash
# Clone o repositório
git clone https://github.com/Gilbertoaleite/Front-M.git
cd Front-M

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

## ⚙️ Configuração

### Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:

```env
REACT_APP_API_URL=http://localhost:8080
REACT_APP_VERSION=1.0.0
```

### Configuração da API
O projeto está configurado para funcionar com fallback automático:

```javascript
// Tenta API real primeiro
const response = await axios.get(`${api}/endpoint`);

// Fallback para dados mock
catch (error) {
  const mockResponse = await mockAPI.getData();
}
```

## 🧪 Desenvolvimento Offline

### Credenciais de Teste
O sistema inclui usuários mock para desenvolvimento:

```javascript
// Usuário Admin
Email: admin@empresa.com
Senha: admin123

// Usuário Comum  
Email: user@empresa.com
Senha: user123

// Usuário Análise
Email: analyst@empresa.com
Senha: analyst123
```

### Mock APIs Disponíveis
- `mockDashboardAPI.getAssets()` - Estatísticas gerais
- `mockDashboardAPI.getTopAssets()` - Top vulnerabilidades
- `mockDashboardAPI.getAssetsPaginated(page)` - Dados paginados
- `mockDashboardAPI.getVulnerabilityTrends()` - Tendências históricas
- `mockDashboardAPI.getRiskDistribution()` - Distribuição de risco

## 📱 Responsividade

### Breakpoints
```css
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
```

### Layouts por Dispositivo

#### 📱 Mobile
- **Tabela**: Layout em cards verticais
- **Gráficos**: Stack vertical
- **Paginação**: Apenas inferior (economia de espaço)
- **Botões**: Touch-friendly (44px mínimo)

#### 📟 Tablet
- **Tabela**: Colunas essenciais visíveis
- **Gráficos**: 2 colunas side-by-side
- **Paginação**: Superior e inferior

#### 🖥️ Desktop
- **Tabela**: Todas as colunas visíveis
- **Gráficos**: Layout otimizado
- **Hover**: Effects e tooltips
- **Scroll**: Horizontal quando necessário

## 🎨 Sistema de Design

### Cores Principais
```css
:root {
  --color-primary: #ff8400;  /* Laranja principal */
  --color-success: #28a745;  /* Verde - Risco baixo */
  --color-warning: #ffc107;  /* Amarelo - Risco médio */
  --color-danger: #dc3545;   /* Vermelho - Risco alto/crítico */
}
```

### Indicadores de Risco
- 🟢 **Baixo (1)**: Verde - #28a745
- 🟡 **Médio (2)**: Amarelo - #ffc107  
- 🟠 **Alto (3)**: Laranja - #fd7e14
- 🔴 **Crítico (4)**: Vermelho - #dc3545

## 🏗️ Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── BarChart/        # Gráfico de barras
│   ├── DataTable/       # Tabela de dados responsiva
│   ├── Dashboard/       # Container principal
│   ├── DonutChart/      # Gráfico donut
│   ├── Footer/          # Rodapé
│   ├── NavBar/          # Barra de navegação
│   └── Pagination/      # Controles de paginação
├── pages/               # Páginas da aplicação
│   ├── Home/           # Página inicial
│   ├── SignIn/         # Página de login
│   └── SignUp/         # Página de cadastro
├── services/           # Serviços e APIs
│   ├── api.js          # Configuração base da API
│   ├── auth.js         # Serviços de autenticação
│   ├── mockAuth.js     # Mock de autenticação
│   └── mockDashboard.js # Mock de dados do dashboard
├── types/              # Definições TypeScript
├── utils/              # Utilitários
├── assets/             # Assets estáticos
│   ├── css/           # Estilos globais
│   └── img/           # Imagens
└── Routes.js          # Configuração de rotas
```

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm start          # Servidor de desenvolvimento (localhost:3000)
npm run build      # Build de produção
npm run test       # Executar testes
npm run eject      # Ejetar configuração (irreversível)

# Linting e Formatação
npm run lint       # Verificar código
npm run lint:fix   # Corrigir problemas automaticamente
```

## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

Cria uma pasta `build/` com os arquivos otimizados para produção.

### Servidor Estático
```bash
# Instalar serve globalmente
npm install -g serve

# Servir build
serve -s build
```

### Docker (Opcional)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npx", "serve", "-s", "build"]
```

## 📊 Métricas de Performance

### Bundle Size (Gzipped)
- **JavaScript**: ~246KB
- **CSS**: ~41KB
- **Total**: ~287KB

### Lighthouse Score
- **Performance**: 95+
- **Accessibility**: 90+
- **Best Practices**: 95+
- **SEO**: 90+

## 🔧 Troubleshooting

### Problemas Comuns

**1. Erro de Node.js/OpenSSL:**
```bash
# Usar Node.js 18+ ou adicionar flag
export NODE_OPTIONS="--openssl-legacy-provider"
```

**2. Dependências não encontradas:**
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

**3. Build falhando:**
```bash
# Verificar versão do Node
node --version  # Deve ser 16+
npm run build
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**Gilberto Aleite**
- GitHub: [@Gilbertoaleite](https://github.com/Gilbertoaleite)

## 📞 Suporte

Para suporte e questões:
- 🐛 **Issues**: [GitHub Issues](https://github.com/Gilbertoaleite/Front-M/issues)
- 📧 **Email**: [contato através do GitHub]
- 📖 **Documentação**: [GitHub Wiki](https://github.com/Gilbertoaleite/Front-M/wiki)

---

⭐ **Se este projeto foi útil para você, considere dar uma estrela!**

![Footer](https://img.shields.io/badge/Made%20with-❤️-red.svg)
![Footer](https://img.shields.io/badge/Powered%20by-React-blue.svg)
![Footer](https://img.shields.io/badge/Built%20with-TypeScript-blue.svg)