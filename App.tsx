import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Fleet } from './components/Fleet';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { Terms } from './components/Terms';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { UserAgreement } from './components/UserAgreement';
import { Home } from './pages/Home';
import { Admin } from './pages/Admin';
import { Car } from './types';
import { CARS } from './constants';

function App() {
  const [cars, setCars] = useState<Car[]>(CARS);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleBookCar = (car: Car) => {
    setSelectedCar(car);
  };

  const handleCloseModal = () => {
    setSelectedCar(null);
  };

  // Admin handlers
  const handleAddCar = (newCar: Car) => {
    setCars([...cars, newCar]);
  };

  const handleUpdateCar = (updatedCar: Car) => {
    setCars(cars.map(c => c.id === updatedCar.id ? updatedCar : c));
  };

  const handleDeleteCar = (id: string) => {
    if (window.confirm('Вы уверены, что хотите удалить этот автомобиль?')) {
      setCars(cars.filter(c => c.id !== id));
    }
  };

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 selection:text-black">
      {!isAdminRoute && <Navbar />}
      
      <main>
        <Routes>
          <Route path="/" element={<Home cars={cars} onBookCar={handleBookCar} />} />
          <Route path="/fleet" element={<Fleet cars={cars} onBookCar={handleBookCar} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/user-agreement" element={<UserAgreement />} />
          
          <Route 
            path="/admin" 
            element={
              <Admin 
                cars={cars} 
                onAddCar={handleAddCar}
                onUpdateCar={handleUpdateCar}
                onDeleteCar={handleDeleteCar}
              />
            } 
          />
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
      
      {selectedCar && (
        <BookingModal car={selectedCar} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;