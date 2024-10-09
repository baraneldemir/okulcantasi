
// import arkaplan from '../images/schoolbg.jpg'
// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import React from 'react'
import Schools from './Schools'
// import Footer from './Footer'
// import Start from '../pages/Start'

export default function Landing() {
    return (
        <>
        
        <div
        // style={{ backgroundImage: `url(${arkaplan})` }} 
        className="relative flex flex-col items-center h-screen px-6 lg:flex-row lg:px-20">
            <div
                    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50 "></div>
            {/* Left: Hero Section */}
            <div className="z-10 mt-10 mb-12 text-center lg:text-left lg:w-1/2 lg:mb-0">
            
                <h1 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
                    Yeni doneme hazir ol!
                </h1>
                <p className="mx-4 mb-6 text-sm text-white lg:text-lg lg:mx-0">
                    Proje kapsamında öğrenci ihtiyaçları eksiksiz olarak tek bir pakette temin edilmiş olur. En önemli avantajı ise veliler liste peşinde koşmazlar ve zamandan tasarruf sağlarlar. Ürün paketleri siparişinizi takiben 3 iş günü içerisinde (okul açılış haftası bu süre uzayabilir) kayıtlı teslimat adresinize ücretsiz olarak kargo ile teslim edilir. Kargo adresi Türkiye’nin herhangi bir yeri olabilir. 
    
                </p>
                <Link to='/start' className="px-6 py-3 mt-6 font-semibold text-black transition bg-white rounded-full hover:bg-black hover:text-white">
                    Siparis ver
                </Link>
                
            </div>

            {/* Right: Solar System Animation */}
            <div className="relative flex items-center justify-center w-full lg:w-1/2 h-80 lg:h-auto">
                <div className="relative flex items-center justify-center text-xl font-bold text-white bg-yellow-500 rounded-full shadow-2xl w-36 h-36"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Orbiting Planets */}
                    <div className="absolute w-2 h-2 bg-gray-400 rounded-full orbit animate-orbit-mercury"></div>
                    <div className="absolute w-4 h-4 bg-yellow-600 rounded-full orbit animate-orbit-venus"></div>
                    <div className="absolute w-6 h-6 bg-blue-500 rounded-full orbit animate-orbit-earth"></div>
                    <div className="absolute w-4 h-4 bg-red-600 rounded-full orbit animate-orbit-mars"></div>
                    <div className="absolute w-10 h-10 bg-orange-500 rounded-full orbit animate-orbit-jupiter"></div>
                    <div className="absolute w-8 h-8 bg-yellow-300 rounded-full orbit animate-orbit-saturn"></div>
                    <div className="absolute w-6 h-6 bg-blue-300 rounded-full orbit animate-orbit-uranus"></div>
                    <div className="absolute w-6 h-6 bg-blue-700 rounded-full orbit animate-orbit-neptune"></div>
                </div>
            </div>
        </div>
        <Schools/>
      
        
        </>
    )
}

