import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import { Navigate, Route, Routes } from "react-router-dom"
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="d-flex flex-column app">
    <Container>
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to="/country/EN" replace={true} />}/>
        <Route path="/country/:country_code" element={<Main/>} />
      </Routes>
    </Container>
    <Footer/>
    </div>
  );
}

export default App;
