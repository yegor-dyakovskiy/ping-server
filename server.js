import https from 'https';

// URL для пинга
const URL = 'https://promalp-lead-server.onrender.com';

// Функция для отправки запроса
const pingServer = () => {
    https.get(URL, (res) => {
        console.log(`Пинг отправлен на ${URL}. Статус ответа: ${res.statusCode}`);
    }).on('error', (e) => {
        console.error(`Ошибка при отправке пинга: ${e.message}`);
    });
};

// Отправлять запрос каждую минуту
setInterval(pingServer, 60000); // 60000 миллисекунд = 1 минута

console.log('Сервер для пинга запущен. Пингую каждый 1 минуту...');
