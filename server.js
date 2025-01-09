import http from 'http';
import https from 'https';

const URL = 'https://promalp-lead-server.onrender.com';

const pingServer = () => {
    https.get(URL, (res) => {
        console.log(`Пинг отправлен на ${URL}. Статус ответа: ${res.statusCode}`);
    }).on('error', (e) => {
        console.error(`Ошибка при отправке пинга: ${e.message}`);
    });
};

// Отправлять запрос каждую минуту
setInterval(pingServer, 60000);

console.log('Сервер для пинга запущен. Пингую каждый 1 минуту...');

// Фиктивный сервер
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is a dummy server for Render compatibility.');
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Фиктивный сервер запущен на порту ${PORT}`);
});