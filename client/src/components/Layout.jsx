import React from 'react';
import Header from './Header';
import Footer from './Footer';
function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-6">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Layout;
