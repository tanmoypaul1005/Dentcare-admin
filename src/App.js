import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Doctor from './components/Doctor/Doctor';
import Appointment from './components/Appointment/Appointment';
import DentalCheckup from './components/DentalCheckup/DentalCheckup.js';
import CheckupAppointment from './components/CheckupAppointment/CheckupAppointment.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/dentalcheckup" element={<DentalCheckup />} />
      <Route path="/checkup/appointment" element={<CheckupAppointment />} />
      </Routes>
    </BrowserRouter >
    </div>
  );
}

export default App;
