import React, { useEffect, useState } from 'react';
import arkaplan from '../images/schoolbg.jpg';
import { useNavigate } from 'react-router-dom';

export default function Start() {
  const [isVisible, setIsVisible] = useState(false);
  const [schoolNumber, setSchoolNumber] = useState('');
  const [studentName, setStudentName] = useState('');
  const [schoolYear, setSchoolYear] = useState('');
  const [schoolNumberError, setSchoolNumberError] = useState('');
  const [studentNameError, setStudentNameError] = useState('');
  const [schoolYearError, setSchoolYearError] = useState('');
  
  const navigate = useNavigate(); // Initialize the navigate hook

  useEffect(() => {
    setIsVisible(true); // Trigger the card appearance animation when the component mounts
  }, []);

  // Function to handle school number input and validate it
  const handleSchoolNumberChange = (e) => {
    const value = e.target.value;
    setSchoolNumber(value);

    // Check if the input contains any non-numeric characters
    if (/[^0-9]/.test(value)) {
      setSchoolNumberError('Okul numarası sadece rakamlardan oluşmalıdır.');
    } else {
      setSchoolNumberError('');
    }
  };

  // Function to handle student name input and validate it
  const handleStudentNameChange = (e) => {
    const value = e.target.value;
    setStudentName(value);

    // Check if the input contains any numeric characters
    if (/[^a-zA-Z\sğüşöçıİĞÜŞÖÇ]/.test(value)) {
      setStudentNameError('İsim sadece harflerden oluşmalıdır.');
    } else {
      setStudentNameError('');
    }
  };

  // Function to handle school year selection
  const handleSchoolYearChange = (e) => {
    setSchoolYear(e.target.value);

    // Check if a year has been selected
    if (!e.target.value) {
      setSchoolYearError('Lütfen bir yıl seçin.');
    } else {
      setSchoolYearError('');
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Additional checks before submitting
    if (!schoolNumber || !studentName || !schoolYear) {
      alert('Lütfen gerekli bilgileri doldurun.');
    } else if (schoolNumberError || studentNameError || schoolYearError) {
      alert('Lütfen geçerli bilgileri girin.');
    } else {
      // Proceed with submission logic
      // Here you can add any logic you want to handle before navigating
      // For example, you can log the user data or save it
      navigate('/paket'); // Navigate to the next page
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${arkaplan})` }}
      className="relative flex flex-col items-center justify-center h-screen px-6 bg-fixed bg-cover bg-slate-300 lg:px-20"
    >
      {/* Form Wrapper */}
      <form
        onSubmit={handleSubmit}
        className={`relative z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-700 ease-in-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <h2 className="mb-6 text-2xl font-bold text-center">Lütfen doğrulama için okul bilgilerinizi girin</h2>

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

        {/* Submit Button */}
        <button
          type="submit" // Ensure this is a submit button
          className="w-full py-3 font-semibold text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {/* Dark Overlay */}
      <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"></div>
    </div>
  );
}
