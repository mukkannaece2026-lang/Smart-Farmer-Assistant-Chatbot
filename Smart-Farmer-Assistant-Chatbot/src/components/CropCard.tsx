import React from 'react';

interface CropCardProps {
  name: string;
  image: string;
  season: string;
  waterReq: string;
  yield: string;
  price: string;
  soilType: string;
  onClick: () => void;
}

const CropCard: React.FC<CropCardProps> = ({ name, image, season, waterReq, yield: yieldVal, price, soilType, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden"
    >
      <div className="h-48 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
        <img src={image} alt={name} className="h-full w-full object-contain" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <div className="space-y-2 text-sm">
          <p className="text-green-700"><span className="font-semibold">Season:</span> {season}</p>
          <p className="text-blue-600"><span className="font-semibold">Water:</span> {waterReq}</p>
          <p className="text-purple-600"><span className="font-semibold">Yield:</span> {yieldVal}</p>
          <p className="text-orange-600"><span className="font-semibold">Price:</span> {price}</p>
          <p className="text-gray-600 text-xs mt-2">Soil: {soilType}</p>
        </div>
      </div>
    </div>
  );
};

export default CropCard;
