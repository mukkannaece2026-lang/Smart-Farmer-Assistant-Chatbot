import React, { useState } from 'react';

const KnowledgeBase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const guides = [
    { id: 1, title: 'Soil Testing Guide', category: 'Soil Health', duration: '5 min read', description: 'Learn how to test and improve your soil quality' },
    { id: 2, title: 'Organic Fertilizers 101', category: 'Fertilizers', duration: '7 min read', description: 'Natural alternatives to chemical fertilizers' },
    { id: 3, title: 'Pest Management', category: 'Pest Control', duration: '10 min read', description: 'Identify and control common crop pests' },
    { id: 4, title: 'Water Conservation', category: 'Irrigation', duration: '6 min read', description: 'Efficient irrigation techniques for your farm' },
    { id: 5, title: 'Crop Rotation Benefits', category: 'Best Practices', duration: '8 min read', description: 'Maximize yields with proper crop rotation' },
    { id: 6, title: 'Monsoon Preparation', category: 'Seasonal', duration: '5 min read', description: 'Prepare your farm for the rainy season' },
    { id: 7, title: 'Seed Selection Guide', category: 'Planting', duration: '7 min read', description: 'Choose the right seeds for maximum yield' },
    { id: 8, title: 'Harvest Timing', category: 'Harvesting', duration: '6 min read', description: 'Know the perfect time to harvest each crop' },
    { id: 9, title: 'Storage Best Practices', category: 'Post-Harvest', duration: '8 min read', description: 'Prevent crop loss with proper storage' },
    { id: 10, title: 'Market Price Analysis', category: 'Economics', duration: '10 min read', description: 'Understanding agricultural market trends' },
    { id: 11, title: 'Drip Irrigation Setup', category: 'Irrigation', duration: '12 min read', description: 'Step-by-step drip irrigation installation' },
    { id: 12, title: 'Composting at Home', category: 'Soil Health', duration: '9 min read', description: 'Create nutrient-rich compost for your farm' },
  ];

  const categories = ['All', 'Soil Health', 'Fertilizers', 'Pest Control', 'Irrigation', 'Best Practices', 'Seasonal'];

  const filteredGuides = selectedCategory === 'All' 
    ? guides 
    : guides.filter(guide => guide.category === selectedCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Knowledge Base</h2>
          <p className="text-gray-600 text-lg">Expert guides and tutorials for modern farming</p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map(guide => (
            <div
              key={guide.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 cursor-pointer hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {guide.category}
                </span>
                <span className="text-gray-500 text-xs">{guide.duration}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{guide.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
              <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBase;
