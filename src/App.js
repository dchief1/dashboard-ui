import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasketLayout from './components/BasketLayout/BasketLayout';
import LandingLayout from './components/LandingLayout/LandingLayout';

function App() {
  return (
    <div className="App"> 
     <BrowserRouter>
     <Routes>
     <Route path='/' element= {<LandingLayout />} />

     <Route path='/basket'  element={<BasketLayout/>} />
     
   </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App; 
