import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Campaigns() {
  // В будущем это будет приходить с сервера
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Промо-акция на лето',
      status: 'sent',
      sentDate: '2023-06-15',
      openRate: 42,
      clickRate: 12,
    },
    {
      id: 2,
      name: 'Еженедельный дайджест',
      status: 'scheduled',
      scheduledDate: '2023-07-01',
      recipientsCount: 1250,
    },
    {
      id: 3,
      name: 'Приветственное письмо',
      status: 'draft',
      lastUpdated: '2023-06-25',
    },
  ]);
  const getStatusBadge = (status) => {
    switch (status) {
      case 'sent':
        return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Отправлено</span>;
      case 'scheduled':
        return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">Запланировано</span>;
      case 'draft':
        return <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">Черновик</span>;
      default:
        return null;
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Кампании</h1>
        <Link
          to="/campaigns/new"
          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md font-medium"
        >
          Создать кампанию
        </Link>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Название
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Статус
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Информация
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Статистика
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Действия
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {campaigns.map((campaign) => (
              <tr key={campaign.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{campaign.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(campaign.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {campaign.status === 'sent' && (
                    <div>Отправлено: {new Date(campaign.sentDate).toLocaleDateString('ru-RU')}</div>
                  )}
                  {campaign.status === 'scheduled' && (
                    <div>Запланировано на: {new Date(campaign.scheduledDate).toLocaleDateString('ru-RU')}</div>
                  )}
                  {campaign.status === 'draft' && (
                    <div>Последнее обновление: {new Date(campaign.lastUpdated).toLocaleDateString('ru-RU')}</div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {campaign.status === 'sent' && (
                    <div>
                      <div>Open rate: {campaign.openRate}%</div>
                      <div>Click rate: {campaign.clickRate}%</div>
                    </div>
                  )}
                  {campaign.status === 'scheduled' && <div>Получателей: {campaign.recipientsCount}</div>}
                  {campaign.status === 'draft' && <div>—</div>}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link to={} className="text-primary-600 hover:text-primary-900 mr-4">
                    Просмотр
                  </Link>
                  <Link to={} className="text-indigo-600 hover:text-indigo-900">
                    Редактировать
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Campaigns;
