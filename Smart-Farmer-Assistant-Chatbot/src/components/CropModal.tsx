import React from 'react';

interface CropModalProps {
  crop: any;
  isOpen: boolean;
  onClose: () => void;
}

const CropModal: React.FC<CropModalProps> = ({ crop, isOpen, onClose }) => {
  if (!isOpen || !crop) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <div className="h-64 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-8">
            <img src={crop.image} alt={crop.name} className="h-full object-contain" />
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors text-2xl"
          >
            ×
          </button>
        </div>
        
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{crop.name}</h2>
          <p className="text-gray-600 mb-6">{crop.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Season</p>
              <p className="font-semibold text-green-700">{crop.season}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Water Requirement</p>
              <p className="font-semibold text-blue-700">{crop.waterReq}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Expected Yield</p>
              <p className="font-semibold text-purple-700">{crop.yield}</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Market Price</p>
              <p className="font-semibold text-orange-700">{crop.price}</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Soil Type:</span>
              <span className="font-semibold">{crop.soilType}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Planting Time:</span>
              <span className="font-semibold">{crop.plantingTime}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Harvest Time:</span>
              <span className="font-semibold">{crop.harvestTime}</span>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CropModal;
