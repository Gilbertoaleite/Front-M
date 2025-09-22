# 🔧 Resolução do Mixed Content Error

## 🚨 Problema
Quando o projeto é deployado em plataformas HTTPS (como Vercel), você pode ver este erro no console:

```
Mixed Content: The page at 'https://seu-app.vercel.app' was loaded over HTTPS, 
but requested an insecure XMLHttpRequest endpoint 'http://sua-api.com/api/endpoint'. 
This request has been blocked; the content must be served over HTTPS.
```

## ✅ Soluções

### 1. Configure uma API HTTPS (Recomendado)

Deploy sua API backend em uma plataforma que fornece HTTPS automático:

- **Heroku**: `https://sua-api.herokuapp.com`
- **Railway**: `https://sua-api.up.railway.app`
- **AWS**: Use ALB com certificado SSL
- **DigitalOcean**: App Platform com SSL automático
- **Vercel**: Para APIs serverless

### 2. Configure a Variável de Ambiente

```bash
# No Vercel (recomendado)
vercel env add REACT_APP_BACKEND_URL
# Valor: https://sua-api-backend.herokuapp.com

# No arquivo .env.production
REACT_APP_BACKEND_URL=https://sua-api-backend.com

# No arquivo .env para desenvolvimento local
REACT_APP_BACKEND_URL=http://localhost:8080
```

### 3. Verifique a Configuração

O arquivo `src/services/api.js` está configurado para usar:

```javascript
const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080',
  // ... outras configurações
});
```

### 4. Sistema de Fallback Automático

O projeto tem fallback automático para dados mock quando a API não responde:

```javascript
try {
  // Tenta usar a API real (HTTPS)
  const response = await api.get('/api/endpoint');
  return response.data;
} catch (error) {
  console.log('API não disponível, usando dados mock');
  // Usa dados mock automaticamente
  return mockAPI.getData();
}
```

## 🧪 Testando a Solução

### 1. Local (HTTP - OK)
```bash
npm start
# Acesse: http://localhost:3000
```

### 2. Produção (HTTPS - Corrigido)
```bash
npm run build
# Deploy para Vercel com REACT_APP_BACKEND_URL configurado
```

## 💡 Alternativas Rápidas

### Para testes rápidos:
1. **Heroku Free** (desativado) → Use **Railway** ou **Render**
2. **JSON Server**: Deploy no Railway/Render
3. **Mock completo**: Desative a API e use apenas dados mock

### Para produção:
1. **AWS Lambda** + API Gateway (HTTPS automático)
2. **Google Cloud Run** (HTTPS por padrão)
3. **Azure Functions** (HTTPS nativo)

## 🔍 Debug

Para verificar se está funcionando:

```javascript
// No console do navegador
console.log('API URL:', process.env.REACT_APP_BACKEND_URL);

// Verificar requisições
// Network tab → Verificar se as chamadas são HTTPS
```

## ⚡ Solução Imediata

Se precisar de uma solução imediata, temporariamente desative as chamadas de API:

1. Comente as chamadas `api.get()` nos componentes
2. Use apenas `mockDashboardAPI` 
3. O sistema funcionará 100% offline com dados realistas

```javascript
// Temporariamente, para bypass completo:
// const response = await api.get('/endpoint');
const response = { data: mockDashboardAPI.getData() };
```