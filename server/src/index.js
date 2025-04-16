require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

// Инициализация приложения
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Простой маршрут для проверки
app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Обслуживание статических файлов React в production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
  });
}

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
