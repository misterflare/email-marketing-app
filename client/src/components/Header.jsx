import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary-600">
          EmailMarketer
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-600 hover:text-primary-600">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/campaigns" className="text-gray-600 hover:text-primary-600">
                Кампании
              </Link>
            </li>
            <li>
              <Link to="/subscribers" className="text-gray-600 hover:text-primary-600">
                Подписчики
              </Link>
            </li>
            <li>
              <Link to="/templates" className="text-gray-600 hover:text-primary-600">
                Шаблоны
              </Link>
            </li>
            <li>
              <Link to="/analytics" className="text-gray-600 hover:text-primary-600">
                Аналитика
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
