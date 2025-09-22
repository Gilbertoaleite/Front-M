# Dashboard de Vulnerabilidades - Frontend

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-purple.svg)
![Status](https://img.shields.io/badge/Status-Produção-brightgreen.svg)

🌐 **Demo Online:** [https://front-5acc7elxl-gilbertoaleites-projects.vercel.app](https://front-5acc7elxl-gilbertoaleites-projects.vercel.app)

Um dashboard moderno e responsivo para visualização e gerenciamento de vulnerabilidades de segurança em ativos de rede.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Deploy](#deploy)

## 🎯 Visão Geral

Dashboard completo para monitoramento de vulnerabilidades em ativos de rede, oferecendo visualizações interativas, tabelas de dados e experiência totalmente responsiva. O sistema inclui autenticação, gráficos dinâmicos e sistema de fallback para desenvolvimento offline.

## 🚀 Tecnologias

**Core:**
- React 18.2.0, TypeScript 4.9.5, React Router 6.x

**UI/UX:**
- Bootstrap 5.x, ApexCharts, CSS Modules

**Desenvolvimento:**
- Axios, Date-fns, ESLint

**🔐 Autenticação:** Login com JWT, mock para testes, validação de formulários

**📊 Dashboard:** Gráfico de barras, donut, tabela paginada, indicadores de risco

**📱 Responsividade:** Layout adaptativo (Mobile/Tablet/Desktop), tabela em cards

**🎨 Interface:** Design moderno, paleta consistente, animações suaves

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
# Para desenvolvimento local
REACT_APP_BACKEND_URL=http://localhost:8080

# Para produção (HTTPS obrigatório)
REACT_APP_BACKEND_URL=https://sua-api.herokuapp.com
```

### ⚠️ Mixed Content Error (HTTPS)

Se você vê erro "Mixed Content" no Vercel:

1. **Configure uma API HTTPS:** Use Heroku, Railway, ou AWS
2. **Variável de ambiente:** Configure `REACT_APP_BACKEND_URL` com URL HTTPS  
3. **Fallback automático:** Sistema usa dados mock quando API não responde

```bash
# Configure no Vercel
vercel env add REACT_APP_BACKEND_URL

# Ou no arquivo .env.production
echo "REACT_APP_BACKEND_URL=https://sua-api.com" > .env.production
```

### Credenciais de Teste

```javascript
// Usuário Admin
Email: admin@empresa.com
Senha: admin123

// Usuário Comum
Email: user@empresa.com  
Senha: user123
```

## 🚀 Deploy

# Inicie o servidor de desenvolvimento
npm start
```

## ⚙️ Configuração

### Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:

```env
# Para desenvolvimento local
REACT_APP_BACKEND_URL=http://localhost:8080

# Para produção (HTTPS obrigatório)
REACT_APP_BACKEND_URL=https://sua-api.herokuapp.com
```

### ⚠️ Solucionando Mixed Content Error

**Erro comum**: "Mixed Content" em plataformas HTTPS (Vercel, Netlify)

**Causa**: Navegadores bloqueiam requisições HTTP em sites HTTPS por segurança.

**🔧 Soluções:**

1. **API HTTPS**: Configure uma API com certificado SSL
   - Heroku, Railway, AWS, Google Cloud
   - Configure `REACT_APP_BACKEND_URL=https://sua-api.com`

2. **Vercel Environment Variables**:
   ```bash
   vercel env add REACT_APP_BACKEND_URL
   # Valor: https://sua-api-backend.herokuapp.com
   ```

3. **Arquivo .env.production**:
   ```bash
   echo "REACT_APP_BACKEND_URL=https://sua-api.com" > .env.production
   ```

4. **Fallback Automático**: 
   - Sistema detecta quando API não responde
   - Ativa automaticamente dados mock para demonstração
   - Usuário vê dashboard funcionando normalmente

**✅ Resultado**: Dashboard funciona em HTTPS com dados mock enquanto API não estiver disponível.

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

### 🔐 Credenciais de Teste

O sistema inclui usuários mock para desenvolvimento local:

```javascript
// 👤 Usuário Administrador
Email: admin@empresa.com
Senha: admin123
Permissões: Acesso completo ao dashboard

// 👤 Usuário Comum  
Email: user@empresa.com
Senha: user123
Permissões: Visualização básica

// 👤 Usuário Análise
Email: analyst@empresa.com
Senha: analyst123
Permissões: Relatórios avançados
```

> 💡 **Dica**: Estas credenciais funcionam apenas em desenvolvimento com dados mock.

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