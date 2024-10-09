import React from 'react';
// import arkaplan from '../images/schoolbg.jpg'

export default function Footer() {
  return (
    <div 
    //   style={{ backgroundImage: `url(${arkaplan})` }} 
      className="relative flex flex-col items-center -z-20"
    >
    <footer className="py-6 text-white ">
      <div className="container mx-auto text-center">
        <p className="mb-2 text-sm">© {new Date().getFullYear()} Okul Cantasi. Tum haklari saklidir. Baraneldemir</p>
       
      </div>
    </footer>
    <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-black opacity-50 -z-10"></div>
    </div>
  );
}
