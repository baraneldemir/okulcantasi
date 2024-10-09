import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 
import useAnimateOnScroll from '../hooks/AnimateOnScroll';

export default function Paket() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedSchool, schoolYear, items, schoolImage } = location.state || {};
  
  useAnimateOnScroll()
  // State to control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle button click
  const handleOrderClick = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-2 mx-5 bg-gray-100">
      {schoolImage && (
        <img src={schoolImage} alt={selectedSchool} className="w-24 h-24 rounded-lg" />
      )}
      <h2 className="mb-6 text-2xl font-bold text-center">
        {selectedSchool} - {schoolYear}. Yılı Ürünleri
      </h2>
      <div className="w-full max-w-4xl">
        {items && items.map((item, index) => (
          <div key={index} className="p-4 mb-4 bg-white border border-gray-300 rounded-lg shadow-sm notRightAnimated">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="mt-2 text-gray-700">{item.description}</p>
          </div>
        ))}
        <button
          type="button" // Change to button type
          onClick={handleOrderClick} // Attach the click handler
          className="w-full py-3 mb-10 font-semibold text-black transition duration-300 bg-white border rounded-lg border-slate-300 hover:bg-slate-700 hover:text-white"
        >
          Siparis ver
        </button>
      </div>

      {/* Modal for order confirmation */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Sipariş Onaylandı!</h3>
            <p className="mt-2">Siparişiniz başarıyla alınmıştır.</p>
            <div className="mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Tamam
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
