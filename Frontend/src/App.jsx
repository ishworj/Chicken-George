import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Routes>
          <Route path='*' element={<LandingPage />}></Route>
        </Routes>
    </div>
    </BrowserRouter>
    
  )
}

export default App
