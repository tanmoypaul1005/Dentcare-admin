import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Doctor from './components/Doctor/Doctor';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctor" element={<Doctor />} />
      </Routes>
    </BrowserRouter >
    </div>
  );
}

export default App;
