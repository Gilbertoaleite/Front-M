# Credenciais de Teste para o Frontend

## 🔐 Usuários Disponíveis para Teste

Este projeto inclui um sistema de autenticação mock que permite testar o frontend mesmo sem backend rodando.

### Usuários Configurados:

| Usuário | Senha | Perfil |
|---------|-------|---------|
| `admin` | `admin123` | Administrador |
| `teste` | `123456` | Usuário de teste |
| `demo` | `demo123` | Demonstração |

## 🚀 Como usar:

1. Execute o projeto com `npm start`
2. Acesse a tela de login
3. Use qualquer uma das credenciais acima
4. O sistema tentará conectar com a API real primeiro
5. Se não houver backend disponível, usará a autenticação mock automaticamente

## 🔧 Funcionamento:

- **Com Backend**: Usa a API real em `REACT_APP_BACKEND_URL`
- **Sem Backend**: Usa autenticação local (mock) automaticamente
- **Token Mock**: Cada usuário tem um token único para simulação

## 📝 Notas:

- As credenciais mock são apenas para desenvolvimento/teste
- Em produção, remova o sistema mock e use apenas a API real
- Os tokens mock são válidos apenas na sessão atual do browser