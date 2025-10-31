import React from 'react';
import DashboardCard from './DashboardCard';

const Dashboard: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Live Farm Dashboard</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Current Temperature"
            value="28°C"
            subtitle="Feels like 30°C"
            icon={<span>☀️</span>}
            color="text-orange-600"
          />
          
          <DashboardCard
            title="Soil Moisture"
            value="65%"
            subtitle="Optimal range"
            icon={<span>💧</span>}
            color="text-blue-600"
          />
          
          <DashboardCard
            title="Soil pH Level"
            value="6.5"
            subtitle="Slightly acidic"
            icon={<span>🌱</span>}
            color="text-green-600"
          />
          
          <DashboardCard
            title="Humidity"
            value="72%"
            subtitle="Good for crops"
            icon={<span>💨</span>}
            color="text-cyan-600"
          />
          
          <DashboardCard
            title="Next Rainfall"
            value="3 Days"
            subtitle="Expected 15mm"
            icon={<span>🌧️</span>}
            color="text-indigo-600"
          />
          
          <DashboardCard
            title="NPK Levels"
            value="Good"
            subtitle="N:45 P:38 K:52"
            icon={<span>⚗️</span>}
            color="text-purple-600"
          />
          
          <DashboardCard
            title="Pest Alert"
            value="Low"
            subtitle="No threats detected"
            icon={<span>🐛</span>}
            color="text-green-600"
          />
          
          <DashboardCard
            title="Crop Health"
            value="95%"
            subtitle="Excellent condition"
            icon={<span>🌾</span>}
            color="text-emerald-600"
          />
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">7-Day Weather Forecast</h3>
          <div className="grid grid-cols-7 gap-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
              <div key={day} className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <p className="text-sm font-semibold text-gray-700">{day}</p>
                <p className="text-2xl my-2">☀️</p>
                <p className="text-sm font-bold text-gray-800">{28 + idx}°C</p>
                <p className="text-xs text-gray-600">{idx === 2 ? '15mm' : '0mm'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
