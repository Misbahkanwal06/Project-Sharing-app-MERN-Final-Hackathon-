

import React, { useState } from 'react';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import { Routes, Route,useLocation } from 'react-router-dom';
import Form from './components/Form';
import Table from './components/Table';
import Nav from './components/Nav';

function App() {
  const [formData, setFormData] = useState([]);
  const [userName, setUserName] = useState("");

  const handleFormSubmit = (data) => {
    console.log("dataaaa",data);
    setFormData(prevList => [...prevList, data]);
  }
  const location = useLocation();
  return (
    <>
      
      {location.pathname !== '/SignIn' && location.pathname !== '/' && <Nav userName={userName} />}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/SignIn" element={<SignIn setUserName={setUserName} />} />
        <Route path="/Home" element={<Table formDataList={formData} />} />
        <Route path="/Form" element={<Form onSubmit={handleFormSubmit} />} />
        {/* {formData && <Route path="/Table" element={<Table formData={formData} />} />} */}
      </Routes>
      
    </>
  );
}

export default App;
