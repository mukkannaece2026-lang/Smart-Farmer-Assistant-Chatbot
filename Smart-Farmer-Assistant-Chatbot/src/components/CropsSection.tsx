import React, { useState } from 'react';
import CropCard from './CropCard';
import CropModal from './CropModal';
import { cropsData } from '../data/cropsData';

const CropsSection: React.FC = () => {
  const [selectedCrop, setSelectedCrop] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const seasons = ['All', 'Summer', 'Winter', 'Monsoon', 'Year-round'];

  const filteredCrops = cropsData.filter(crop => {
    const matchesFilter = filter === 'All' || crop.season.includes(filter);
    const matchesSearch = crop.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleCropClick = (crop: any) => {
    setSelectedCrop(crop);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Crop Recommendations</h2>
          <p className="text-gray-600 text-lg">Discover the best crops for your farm based on season and soil type</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="Search crops..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-96 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          
          <div className="flex gap-2 flex-wrap justify-center">
            {seasons.map(season => (
              <button
                key={season}
                onClick={() => setFilter(season)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === season
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {season}
              </button>
            ))}
          </div>
        </div>

        {/* Crops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCrops.map(crop => (
            <CropCard
              key={crop.id}
              name={crop.name}
              image={crop.image}
              season={crop.season}
              waterReq={crop.waterReq}
              yield={crop.yield}
              price={crop.price}
              soilType={crop.soilType}
              onClick={() => handleCropClick(crop)}
            />
          ))}
        </div>

        {filteredCrops.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No crops found matching your criteria</p>
          </div>
        )}
      </div>

      <CropModal crop={selectedCrop} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default CropsSection;
