import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Campaigns from './pages/Campaigns';

// Заглушки для страниц, которые будут реализованы позднее
const Subscribers = () => <div className="text-center py-12"><h1 className="text-3xl font-bold">Подписчики</h1><p className="mt-4">Страница находится в разработке</p></div>;
const Templates = () => <div className="text-center py-12"><h1 className="text-3xl font-bold">Шаблоны</h1><p className="mt-4">Страница находится в разработке</p></div>;
const Analytics = () => <div className="text-center py-12"><h1 className="text-3xl font-bold">Аналитика</h1><p className="mt-4">Страница находится в разработке</p></div>;
const CampaignDetails = () => <div className="text-center py-12"><h1 className="text-3xl font-bold">Детали кампании</h1><p className="mt-4">Страница находится в разработке</p></div>;
const CampaignEdit = () => <div className="text-center py-12"><h1 className="text-3xl font-bold">Редактирование кампании</h1><p className="mt-4">Страница находится в разработке</p></div>;
const CampaignNew = () => <div className="text-center py-12"><h1 className="text-3xl font-bold">Новая кампания</h1><p className="mt-4">Страница находится в разработке</p></div>;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/campaigns/:id" element={<CampaignDetails />} />
          <Route path="/campaigns/:id/edit" element={<CampaignEdit />} />
          <Route path="/campaigns/new" element={<CampaignNew />} />
          <Route path="/subscribers" element={<Subscribers />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
