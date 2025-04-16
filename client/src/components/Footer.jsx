import React from 'react';
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">EmailMarketer</h2>
            <p className="text-gray-300 mt-2">Эффективные email-маркетинговые кампании</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="mt-4 md:mt-0">
              <h3 className="text-lg font-semibold mb-2">Контакты</h3>
              <p className="text-gray-300">info@emailmarketer.com</p>
              <p className="text-gray-300">+7 (999) 123-45-67</p>
            </div>
            <div className="mt-4 md:mt-0">
              <h3 className="text-lg font-semibold mb-2">Социальные сети</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-primary-500">
                  <span>Twitter</span>
                </a>
                <a href="#" className="text-gray-300 hover:text-primary-500">
                  <span>Facebook</span>
                </a>
                <a href="#" className="text-gray-300 hover:text-primary-500">
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} EmailMarketer. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
