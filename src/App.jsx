
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing';
import NavBar from './Components/NavBar';
import Schools from './Components/Schools';
import Start from './pages/Start';
import Info from './pages/Info'
import Paket from './pages/Paket';

function App() {
  return (
    <>
    <NavBar />
    
    <Routes>
      <Route path="/start" element={<Start/>}/>
      <Route path="/" element={<Landing/>}/>
      <Route path="/okullarimiz" element={<Schools/>}/>
      <Route path="/dogrulama" element={<Info/>}/>
      <Route path="/paket" element={<Paket/>}/>
      
    </Routes>
    
    </>
  );
}

export default App;
