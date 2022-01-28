import './App.css';
import Home from'./Pages/Home/Home'

import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/Home/Home';
import LienLac from './Pages/LienLac/LienLac';
import CongViec from './Pages/CongViec/CongViec';
import ThongTin from './Pages/ThongTin/ThongTin';
function App() {
  return (
    <>
      <div>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/lienlac" element={<LienLac />} />
        <Route path="/congviec" element={<CongViec />} />
        <Route path="/thongtin" element={<ThongTin />} />
      </Routes>
    </div>
      
    </>
  );
}

export default App;
