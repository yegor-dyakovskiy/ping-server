const http = require('http');
const url = require('url');

// Функция для обработки запросов
const requestHandler = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const method = req.method;
    const pathname = parsedUrl.pathname;

    res.setHeader('Content-Type', 'application/json');

    // 1. Главная страница
    if (pathname === '/' && method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Добро пожаловать на сервер!' }));
    }
    // 2. Получение списка пользователей
    else if (pathname === '/users' && method === 'GET') {
        const users = [
            { id: 1, name: 'Егор' },
            { id: 2, name: 'Иван' },
            { id: 3, name: 'Анна' },
        ];
        res.writeHead(200);
        res.end(JSON.stringify(users));
    }
    // 3. Получение информации о пользователе по ID
    else if (pathname.startsWith('/users/') && method === 'GET') {
        const id = pathname.split('/')[2];
        if (id) {
            res.writeHead(200);
            res.end(JSON.stringify({ id, name: `Пользователь ${id}` }));
        } else {
            res.writeHead(400);
            res.end(JSON.stringify({ error: 'ID пользователя не указан' }));
        }
    }
    // 5. Страница 404 для любых других маршрутов
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Ресурс не найден' }));
    }
};

// Создание сервера
const server = http.createServer(requestHandler);

// Запуск сервера на порту 3000
server.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000');
});