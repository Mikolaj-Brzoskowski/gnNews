import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import { Route, Routes } from "react-router-dom"
import { Container } from 'react-bootstrap';
import Country from './pages/Country';

function App() {
  return (
    <div className="d-flex flex-column app h-100" style={{backgroundColor: "#f3f3f3"}}>
    <Container>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/country/:country_code" element={<Country/>} />
      </Routes>
    </Container>
    <Footer/>
    </div>
  );
}

export default App;
