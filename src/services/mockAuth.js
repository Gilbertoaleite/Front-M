// Mock de usuários para teste local
export const mockUsers = [
    {
        username: 'admin',
        password: 'admin123',
        token: 'mock-token-admin-123456789'
    },
    {
        username: 'teste',
        password: '123456',
        token: 'mock-token-teste-987654321'
    },
    {
        username: 'demo',
        password: 'demo123',
        token: 'mock-token-demo-456789123'
    }
];

// Simula autenticação local para testes
export const mockAuthenticate = (username, password) => {
    const user = mockUsers.find(u =>
        u.username === username && u.password === password
    );

    if (user) {
        return Promise.resolve({
            data: {
                token: user.token
            }
        });
    } else {
        return Promise.reject(new Error('Credenciais inválidas'));
    }
};