import React, { useEffect, useState } from 'react';
import abc from '../images/abc.png';
import aka from '../images/aka.png';
import arel from '../images/arel.png';
import bahcesehir from '../images/bahcesehir.png';
import sinav from '../images/sinav.png';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import itemsData from '../data/data.json'; // Import the JSON data

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
        const items = itemsData[selectedSchool]?.[schoolYear] || []; // Fetch specific items based on school and year
        const schoolImage = schools.find((school) => school.name === selectedSchool)?.imgSrc; // Get the image src
        navigate('/paket', { state: { selectedSchool, schoolYear, items, schoolImage, } });
      }, 3000); // Simulate a short delay before navigating
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen px-6 lg:px-20">
      {isLoading && (
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
            <option value="">Lütfen bir yıl seçin</option>
            <option value="1">1. Yıl</option>
            <option value="2">2. Yıl</option>
            <option value="3">3. Yıl</option>
            <option value="4">4. Yıl</option>
            {/* Add more years as needed */}
          </select>
          {schoolYearError && <p className="mt-2 text-sm text-red-600">{schoolYearError}</p>}
        </div>

        {/* Error Message */}
        {errorMessage && <p className="mt-4 text-sm text-red-600">{errorMessage}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Devam Et
        </button>
      </form>
    </div>
  );
}
