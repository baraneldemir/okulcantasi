import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import '../App.css'; 
import useAnimateOnScroll from '../hooks/AnimateOnScroll';
import FormatCurrency from '../utilities/FormatCurrency';

export default function Paket() {
  const location = useLocation();
//   const navigate = useNavigate();
  const { selectedSchool, schoolYear, items, schoolImage } = location.state || {};

  const [loading, setLoading] = useState(false)
  
  useAnimateOnScroll()
  // State to control the modal visibility
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Function to handle button click
//   const handleOrderClick = () => {
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     navigate('/');
//   };

  function handleCheckout() {
    setLoading(true);
    console.log(items)

    fetch(`${process.env.REACT_APP_BACKEND_URL}/create-checkout-session`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            items: items,
        }),
    })
    .then(res => {
        if (!res.ok) {
            return res.json().then(json => {
                throw new Error(json.error || "Failed to create checkout session");
            });
        }
        return res.json();
    })
    .then(({ url }) => {
        if (url) {
            window.location = url;
        } else {
            throw new Error("URL not provided by Stripe.");
        }
    })
    .catch(e => {
        console.error("Checkout error:", e);
        alert(e.message || "An error occurred during checkout.");
    })
    .finally(() => {
        setLoading(false); // Reset loading state
    });
}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-2 mx-5 bg-gray-100">
        {loading && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-gray-100 bg-opacity-0">
          <div className="relative w-16 h-16 animate-rotate360">
            {/* Apple Body */}
            <div className="relative w-16 h-16 bg-red-500 border-4 border-red-600 rounded-full"></div>
            {/* Apple Stem */}
            <div className="absolute top-0 w-2 h-6 transform -translate-x-1/2 -translate-y-3 rounded-t-full left-1/2 bg-brown-500"></div>
            {/* Apple Leaf */}
            <div className="absolute top-0 left-2/3 transform -translate-x-1/2 -translate-y-3 w-4 h-8 bg-green-500 rounded-full rotate-[30deg]"></div>
          </div>
          <h1 className='relative px-1 text-center text-white bg-black bg-opacity-50 rounded-lg'>Urunleriniz yükleniyor...</h1>
        </div>
      )}
      {schoolImage && (
        <img src={schoolImage} alt={selectedSchool} className="w-24 h-24 rounded-lg" />
      )}
      <h2 className="mb-6 text-2xl font-bold text-center">
        {selectedSchool} - {schoolYear}. Yılı Ürünleri
      </h2>
      <div className="w-full max-w-4xl">
        {items && items.map((item, index) => (
          <div key={index} className="relative p-4 mb-4 bg-white border border-gray-300 rounded-lg shadow-sm notRightAnimated">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="mt-2 text-gray-700">{item.description}</p>
            <p className='absolute right-2 top-10'>{FormatCurrency(item.price)}</p>
          </div>
        ))}
        <button
          type="button" // Change to button type
          onClick={handleCheckout} // Attach the click handler
          className="w-full py-3 mb-10 font-semibold text-black transition duration-300 bg-white border rounded-lg border-slate-300 hover:bg-slate-700 hover:text-white"
        >
          Siparis ver
        </button>
      </div>

      {/* Modal for order confirmation */}
      {/* {isModalOpen && (
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
      )} */}
    </div>
  );
}
