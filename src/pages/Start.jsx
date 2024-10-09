import React, { useEffect, useState } from 'react';
// import arkaplan from '../images/schoolbg.jpg';
import abc from '../images/abc.png';
import aka from '../images/aka.png';
import arel from '../images/arel.png';
import bahcesehir from '../images/bahcesehir.png';
import sinav from '../images/sinav.png';
import { useNavigate } from 'react-router-dom';

export default function Start() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState('');
  const [schoolNumber, setSchoolNumber] = useState('');
  const [studentName, setStudentName] = useState('');
  const [schoolYear, setSchoolYear] = useState('');
  const [schoolNumberError, setSchoolNumberError] = useState('');
  const [studentNameError, setStudentNameError] = useState('');
  const [schoolYearError, setSchoolYearError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // School data with name and image
  const schools = [
    { name: 'ABC Koleji', imgSrc: abc },
    { name: 'Aka Koleji', imgSrc: aka },
    { name: 'Arel Koleji', imgSrc: arel },
    { name: 'Bahcesehir Koleji', imgSrc: bahcesehir },
    { name: 'Sinav Koleji', imgSrc: sinav },
  ];

  // Items data structure
  const itemsData = {
    'ABC Koleji': {
    '1': [
      { name: '1.sinif Kitaplari', description: 'İngilizce ve matematik... kitaplar' },
      { name: '1.sinif Defterleri 6 Tane cizgili', description: 'Lorem marka cizgili defter' },
      { name: '1.sinif Defterleri 6 Tane kareli', description: 'Lorem marka kareli defter' },
      { name: '1.sinif Renkli Boyama kitaplari', description: 'Boyama kitabı' },
      { name: '1.sinif suluk ve yemek çantası', description: 'Spiderman suluk ve çanta' },
    ],
    '2': [
      { name: '2.sinif Kitaplari', description: 'İngilizce ve matematik... kitaplar' },
      { name: '2.sinif Defterleri 6 Tane cizgili', description: 'Lorem marka cizgili defter' },
      { name: '2.sinif Defterleri 6 Tane kareli', description: 'Lorem marka kareli defter' },
      { name: '2.sinif Renkli Boyama kitaplari', description: 'Boyama kitabı' },
      { name: '2.sinif suluk ve yemek çantası', description: 'Spiderman suluk ve çanta' },
    ],
    '3': [
      { name: '3.sinif Kitaplari', description: 'Türkçe ve matematik... kitaplar' },
      { name: '3.sinif Defterleri 6 Tane cizgili', description: 'Lorem marka cizgili defter' },
      { name: '3.sinif Defterleri 6 Tane kareli', description: 'Lorem marka kareli defter' },
      { name: '3.sinif Renkli Boyama kitaplari', description: 'Boyama kitabı' },
      { name: '3.sinif suluk ve yemek çantası', description: 'Superman suluk ve çanta' },
    ],
    '4': [
      { name: '4.sinif Kitaplari', description: 'Fen bilimleri ve matematik... kitaplar' },
      { name: '4.sinif Defterleri 6 Tane cizgili', description: 'Lorem marka cizgili defter' },
      { name: '4.sinif Defterleri 6 Tane kareli', description: 'Lorem marka kareli defter' },
      { name: '4.sinif Renkli Boyama kitaplari', description: 'Boyama kitabı' },
      { name: '4.sinif suluk ve yemek çantası', description: 'Batman suluk ve çanta' },
    ],
  },
  'Aka Koleji': {
    '1': [
      { name: '1.sinif Kitaplari', description: 'İngilizce ve matematik... kitaplar' },
      { name: '1.sinif Defterleri 6 Tane cizgili', description: 'Lorem marka cizgili defter' },
      { name: '1.sinif Defterleri 6 Tane kareli', description: 'Lorem marka kareli defter' },
      { name: '1.sinif Renkli Boyama kitaplari', description: 'Boyama kitabı' },
      { name: '1.sinif suluk ve yemek çantası', description: 'Spiderman suluk ve çanta' },
    ],
    '2': [
      { name: '2.sinif Kitaplari', description: 'İngilizce ve matematik... kitaplar' },
      { name: 'cetvel', description: 'Pergel ve birkaç şey dahil' },
      { name: 'kalem', description: 'Mavi ve siyah kalemler' },
      { name: 'polo tshirt', description: 'Yazlık tişört' },
      { name: 'yelek', description: 'Kışlık yelek' },
    ],
    '3': [
      { name: '3.sinif Kitaplari', description: 'Fen bilimleri ve matematik... kitaplar' },
      { name: 'ti hesap makinesi', description: 'Küçük hesap makinesi' },
      { name: 'kalem', description: 'Biyoloji kitabı' },
      { name: 'polo tshirt', description: 'Spor tişörtü' },
      { name: 'yelek', description: 'Kışlık yelek' },
    ],
    '4': [
      { name: '4.sinif Kitaplari', description: 'Coğrafya ve tarihLorem kitaplar' },
      { name: 'ti hesap makinesi', description: 'Büyük hesap makinesi' },
      { name: 'kalem', description: 'İnce kalemler' },
      { name: 'polo tshirt', description: 'Çizgili tişört' },
      { name: 'yelek', description: 'Kışlık yelek' },
    ],
  },
  'Arel Koleji': {
    '1': [
      { name: '1.sinif Kitaplari', description: 'İngilizce ve matematik... kitaplar' },
      { name: '1.sinif Defterleri 6 Tane cizgili', description: 'Lorem marka cizgili defter' },
      { name: '1.sinif Defterleri 6 Tane kareli', description: 'Lorem marka kareli defter' },
      { name: '1.sinif Renkli Boyama kitaplari', description: 'Boyama kitabı' },
      { name: '1.sinif suluk ve yemek çantası', description: 'Spiderman suluk ve çanta' },
    ],
    '2': [
      { name: '2.sinif Kitaplari', description: 'İngilizce ve matematik... kitaplar' },
      { name: 'cetvel', description: 'Pergel ve birkaç şey dahil' },
      { name: 'kalem', description: 'Mavi ve siyah kalemler' },
      { name: 'polo tshirt', description: 'Yazlık tişört' },
      { name: 'yelek', description: 'Kışlık yelek' },
    ],
    '3': [
      { name: '3.sinif Kitaplari', description: 'Fen bilimleri ve matematik... kitaplar' },
      { name: 'ti hesap makinesi', description: 'Küçük hesap makinesi' },
      { name: 'kalem', description: 'Biyoloji kitabı' },
      { name: 'polo tshirt', description: 'Spor tişörtü' },
      { name: 'yelek', description: 'Kışlık yelek' },
    ],
    '4': [
      { name: '4.sinif Kitaplari', description: 'Coğrafya ve tarih... kitaplar' },
      { name: 'ti hesap makinesi', description: 'Büyük hesap makinesi' },
      { name: 'kalem', description: 'İnce kalemler' },
      { name: 'polo tshirt', description: 'Çizgili tişört' },
      { name: 'yelek', description: 'Kışlık yelek' },
    ],
  },
  'Bahcesehir Koleji': {
    '1': [
      { name: '1.sinif Kitaplari', description: 'İngilizce ve matematik... kitaplar' },
      { name: '1.sinif Defterleri 6 Tane cizgili', description: 'Lorem marka cizgili defter' },
      { name: '1.sinif Defterleri 6 Tane kareli', description: 'Lorem marka kareli defter' },
      { name: '1.sinif Renkli Boyama kitaplari', description: 'Boyama kitabı' },
      { name: '1.sinif suluk ve yemek çantası', description: 'Spiderman suluk ve çanta' },
    ],
    '2': [
      { name: '2.sinif Kitaplari', description: 'İngilizce ve matematik... kitaplar' },
      { name: 'cetvel', description: 'Pergel ve birkaç şey dahil' },
      { name: 'kalem', description: 'Mavi ve siyah kalemler' },
      { name: 'polo tshirt', description: 'Yazlık tişört' },
      { name: 'yelek', description: 'Kışlık yelek' },
    ],
    '3': [
      { name: '3.sinif Kitaplari', description: 'Fen bilimleri ve matematik... kitaplar' },
      { name: 'ti hesap makinesi', description: 'Küçük hesap makinesi' },
      { name: 'kalem', description: 'Biyoloji kitabı' },
      { name: 'polo tshirt', description: 'Spor tişörtü' },
      { name: 'yelek', description: 'Kışlık yelek' },
    ],
    '4': [
      { name: '4.sinif Kitaplari', description: 'Coğrafya ve tarih... kitaplar' },
      { name: 'ti hesap makinesi', description: 'Büyük hesap makinesi' },
      { name: 'kalem', description: 'İnce kalemler' },
      { name: 'polo tshirt', description: 'Çizgili tişört' },
      { name: 'yelek', description: 'Kışlık yelek' },
    ],
    },
  'Sinav Koleji': {
    '1': [
      { name: '1.sinif Kitaplari', description: 'İngilizce ve matematik... kitaplar' },
      { name: '1.sinif Defterleri 6 Tane cizgili', description: 'Lorem marka cizgili defter' },
      { name: '1.sinif Defterleri 6 Tane kareli', description: 'Lorem marka kareli defter' },
      { name: '1.sinif Renkli Boyama kitaplari', description: 'Boyama kitabı' },
      { name: '1.sinif suluk ve yemek çantası', description: 'Spiderman suluk ve çanta' },
    ],
    '2': [
      { name: '2.sinif Kitaplari', description: 'İngilizce ve matematik... kitaplar' },
      { name: 'cetvel', description: 'Pergel ve birkaç şey dahil' },
      { name: 'kalem', description: 'Mavi ve siyah kalemler' },
      { name: 'polo tshirt', description: 'Yazlık tişört' },
      { name: 'yelek', description: 'Kışlık yelek' },
    ],
    '3': [
      { name: '3.sinif Kitaplari', description: 'Fen bilimleri ve matematik... kitaplar' },
      { name: 'ti hesap makinesi', description: 'Küçük hesap makinesi' },
      { name: 'kalem', description: 'Biyoloji kitabı' },
      { name: 'polo tshirt', description: 'Spor tişörtü' },
      { name: 'yelek', description: 'Kışlık yelek' },
    ],
    '4': [
      { name: '4.sinif Kitaplari', description: 'Coğrafya ve tarih... kitaplar' },
      { name: 'ti hesap makinesi', description: 'Büyük hesap makinesi' },
      { name: 'kalem', description: 'İnce kalemler' },
      { name: 'polo tshirt', description: 'Çizgili tişört' },
      { name: 'yelek', description: 'Kışlık yelek' },
    ],
    }
    
  };

  useEffect(() => {
    setIsVisible(true); // Trigger the card appearance animation when the component mounts
  }, []);

  const handleSchoolChange = (e) => {
    setSelectedSchool(e.target.value);
    setErrorMessage(''); // Clear any error message when a school is selected
  };

  const handleSchoolNumberChange = (e) => {
    const value = e.target.value;
    setSchoolNumber(value);
    setErrorMessage('');

    // Check if the input contains any non-numeric characters
    if (/[^0-9]/.test(value)) {
      setSchoolNumberError('Okul numarası sadece rakamlardan oluşmalıdır.');
    } else {
      setSchoolNumberError('');
    }
  };

  const handleStudentNameChange = (e) => {
    const value = e.target.value;
    setStudentName(value);
    setErrorMessage('');

    // Check if the input contains any numeric characters
    if (/[^a-zA-Z\sğüşöçıİĞÜŞÖÇ]/.test(value)) {
      setStudentNameError('İsim sadece harflerden oluşmalıdır.');
    } else {
      setStudentNameError('');
    }
  };

  const handleSchoolYearChange = (e) => {
    setSchoolYear(e.target.value);
    setErrorMessage('');

    // Check if a year has been selected
    if (!e.target.value) {
      setSchoolYearError('Lütfen bir yıl seçin.');
    } else {
      setSchoolYearError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!schoolNumber || !studentName || !schoolYear || !selectedSchool) {
      setErrorMessage('Lütfen ilerlemek için bilgileri doldurun.');
    } else {
      setIsLoading(true);
      setTimeout(() => {
        const items = itemsData[selectedSchool][schoolYear];
        const schoolImage = schools.find(school => school.name === selectedSchool)?.imgSrc; // Get the image src
        navigate('/paket', { state: { selectedSchool, schoolYear, items, schoolImage  } });
      }, 1000); // Simulate a short delay before navigating
    }
  };

  return (
    <div
      // style={{  backgroundImage: `url(${arkaplan})` }}
      className="relative flex flex-col items-center justify-center h-screen px-6 lg:px-20"
      
    >
      {isLoading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-0">
          <div className="w-16 h-16 border-8 border-blue-500 border-solid rounded-full loader border-t-transparent animate-spin"></div>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className={`relative z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-700 ease-in-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <h2 className="mb-6 text-2xl font-bold text-center">Lütfen okul bilgilerinizi girin</h2>

        {/* School Dropdown */}
        <div className="mb-4">
          <label htmlFor="schoolSelection" className="block mb-2 font-medium text-gray-700">
            Okul seçin
          </label>
          <select
            id="schoolSelection"
            onChange={handleSchoolChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Lutfen Okul seçin </option>
            {schools.map((school, index) => (
              <option key={index} value={school.name}>
                {school.name}
              </option>
            ))}
          </select>
        </div>
        {/* Show Selected School Image */}
        {selectedSchool && (
          <div className="text-center">
            <p className="mb-4 font-medium text-gray-700">Secili Okul: {selectedSchool}</p>
            <img
              src={schools.find(school => school.name === selectedSchool)?.imgSrc}
              alt={selectedSchool}
              className="w-24 h-24 mx-auto rounded-lg"
            />
          </div>
        )}

        {/* School Number Input */}
        <div className="mb-4">
          <label htmlFor="schoolNumber" className="block mb-2 font-medium text-gray-700">
            Okul Numarası
          </label>
          <input
            type="text"
            id="schoolNumber"
            value={schoolNumber}
            onChange={handleSchoolNumberChange}
            className={`w-full p-3 border ${schoolNumberError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Okul numarası örnek: 537"
          />
          {schoolNumberError && <p className="mt-2 text-sm text-red-600">{schoolNumberError}</p>}
        </div>

        {/* Student Name Input */}
        <div className="mb-4">
          <label htmlFor="studentName" className="block mb-2 font-medium text-gray-700">
            Okul Kaydınızdaki Tam İsminiz
          </label>
          <input
            type="text"
            id="studentName"
            value={studentName}
            onChange={handleStudentNameChange}
            className={`w-full p-3 border ${studentNameError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Tam isminizi girin"
          />
          {studentNameError && <p className="mt-2 text-sm text-red-600">{studentNameError}</p>}
        </div>

        {/* School Year Dropdown */}
        <div className="mb-4">
          <label htmlFor="schoolYear" className="block mb-2 font-medium text-gray-700">
            Okul Yılı
          </label>
          <select
            id="schoolYear"
            value={schoolYear}
            onChange={handleSchoolYearChange}
            className={`w-full p-3 border ${schoolYearError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="">Yıl seçin</option>
            <option value="1">1. Yıl</option>
            <option value="2">2. Yıl</option>
            <option value="3">3. Yıl</option>
            <option value="4">4. Yıl</option>
          </select>
          {schoolYearError && <p className="mt-2 text-sm text-red-600">{schoolYearError}</p>}
        </div>

        {/* Error Message */}
        {errorMessage && <p className="mb-4 text-sm text-red-600">{errorMessage}</p>}

        <button
          type="submit"
          className="w-full p-3 font-bold text-black bg-white border border-gray-300 rounded-lg t hover:bg-slate-800 hover:text-white "
        >
          Devam Et
        </button>
      </form>
    </div>
  );
}
