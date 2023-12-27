import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './Components/aboutus';
import ContactUs from './Components/contactus';
import ETFInformation from './Components/etf_information';
import EducationalResources from './Components/educational_resources';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import './app.css'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/etf" element={<ETFInformation />} />
          <Route path="/resources" element={<EducationalResources />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
