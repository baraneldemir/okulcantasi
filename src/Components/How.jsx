import React from 'react';
// import arkaplan from '../images/schoolbg.jpg';
import { Link } from 'react-router-dom';

export default function How() {
  return (
    <div 
    //   style={{ backgroundImage: `url(${arkaplan})` }} 
      className="relative z-10 flex flex-col items-center px-6 pb-20 "
    >
      <div className="flex flex-col items-center min-h-screen p-6 ">
        <h1 className="mb-6 text-3xl text-white">Nasil Calisiyoruz</h1>
        <div className="relative">
          {/* Başlangıç */}
          <div className="p-4 mb-4 text-center bg-white border-2 rounded-lg">
            <h2 className="font-semibold">1. Başlangıç</h2>
            <p className="text-sm">Ana sayfamıza giderek yolculuğunuza başlayın.</p>
          </div>
          
          {/* Seçim Sayfası */}
          <div className="p-4 mb-4 text-center bg-green-100 border-2 rounded-lg">
            <h2 className="font-semibold">2. Okul Seçimi</h2>
            <p className="text-sm">Mevcut paketleri görmek için okulunuzu seçin.</p>
          </div>
          
          {/* Yıl Seçim Sayfası */}
          <div className="p-4 mb-4 text-center bg-yellow-100 border-2 rounded-lg">
            <h2 className="font-semibold">3. Yıl Seçimi</h2>
            <p className="text-sm">Görmek istediğiniz paketler için akademik yılı seçin.</p>
          </div>
          
          {/* Paket Sayfası */}
          <div className="p-4 mb-4 text-center bg-red-100 border-2 rounded-lg">
            <h2 className="font-semibold">4. Paket Sayfası</h2>
            <p className="text-sm">Okulunuz ve yılınız için mevcut paketleri görüntüleyin.</p>
          </div>
          
          {/* Ödeme Sayfası */}
          <div className="p-4 mb-4 text-center bg-purple-100 border-2 rounded-lg">
            <h2 className="font-semibold">5. Ödeme Sayfası</h2>
            <p className="text-sm">Seçimlerinizi gözden geçirin ve ödemeye geçin.</p>
          </div>
        </div>
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-black opacity-50 -z-10"></div>

      {/* Button */}
      <div className='z-20'>
        <Link to='/start' className="px-6 py-3 font-semibold text-black transition bg-white rounded-full hover:bg-slate-800 hover:text-white">
          Siparis ver
        </Link>
      </div>
    </div>
  );
}
