// eslint-disable-next-line arrow-body-style
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About.jsx';
import Brand from './components/Brand.jsx';
import BrandContext from './contexts/BrandContext.js';
import Brands from './components/Brands.jsx';
import DashboardAdmin from './components/DashboardAdmin.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Participate from './components/Participate.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Register from './components/Register.jsx';

import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('http://localhost:8000/brands').then((response) => {
      setBrands(response.data);
    });
  };

  return (
    <BrandContext.Provider value={{ brands: brands }}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/brands/" element={<Brands />} />
          <Route exact path="/brands/:slug" element={<Brand />} />
          <Route exact path="/participate" element={<Participate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/admin" element={<ProtectedRoute />}>
            <Route path="/admin" element={<DashboardAdmin />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </BrandContext.Provider>
  );
};

export default App;
