import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <section className="py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Создавайте эффективные email-кампании
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Простой и удобный инструмент для создания, отправки и анализа email-рассылок
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/campaigns/new"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium"
            >
              Создать кампанию
            </Link>
            <Link
              to="/templates"
              className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 px-6 py-3 rounded-md font-medium"
            >
              Шаблоны писем
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Преимущества нашего сервиса
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Простота использования</h3>
              <p className="text-gray-600">
                Интуитивно понятный интерфейс для создания и отправки email-кампаний без специальных навыков.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Детальная аналитика</h3>
              <p className="text-gray-600">
                Отслеживайте открытия, клики и конверсии для оптимизации ваших кампаний.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Удобные шаблоны</h3>
              <p className="text-gray-600">
                Выбирайте из множества готовых шаблонов или создавайте свои собственные.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
