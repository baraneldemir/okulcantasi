import React from 'react';
import abc from '../images/abc.png';
import aka from '../images/aka.png';
import arel from '../images/arel.png';
import bahcesehir from '../images/bahcesehir.png';
import sinav from '../images/sinav.png';
// import arkaplan from '../images/schoolbg.jpg';
import How from './How';

export default function Schools() {
  return (
    <>
      <div 
        // style={{ backgroundImage: `url(${arkaplan})` }} 
        className="relative z-20 flex flex-col items-center px-6 pb-20 lg:px-20"
      >
        <div className='my-4 mt-10 text-2xl text-white'>Çalıştığımız Okullar</div>

        {/* Image grid for schools */}
        <div className='flex flex-row flex-wrap justify-center gap-8 rounded-lg'>
          <img className='w-20 h-20 transition-transform duration-300 transform bg-cover md:w-24 md:h-24 lg:w-28 lg:h-28 hover:scale-125' src={abc} alt="School 1" />
          <img className='object-cover w-20 h-20 transition-transform duration-300 transform bg-cover md:w-24 md:h-24 lg:w-28 lg:h-28 hover:scale-125' src={aka} alt="School 2" />
          <img className='object-cover w-20 h-20 transition-transform duration-300 transform bg-cover md:w-24 md:h-24 lg:w-28 lg:h-28 hover:scale-125' src={arel} alt="School 3" />
          <img className='object-cover w-20 h-20 transition-transform duration-300 transform bg-cover md:w-24 md:h-24 lg:w-28 lg:h-28 hover:scale-125' src={bahcesehir} alt="School 4" />
          <img className='w-20 h-20 transition-transform duration-300 transform bg-cover md:w-24 md:h-24 lg:w-28 lg:h-28 hover:scale-125' src={sinav} alt="School 5" />
        </div>

        {/* Dark overlay */}
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-black opacity-50 -z-10"></div>
      </div>
      <How/>
    </>
  );
}
