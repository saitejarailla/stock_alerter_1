import './App.css';
import { useEffect,useState } from 'react';
import {useForm } from 'react-hook-form'
import Card1 from './components/Card';
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Prediction from './components/Prediction';

function App() {

  return (
    <div>
      <Navbar />
      <Routes >
        <Route  path='/'  element={<Card1 />}></Route>
        <Route  path='/prediction' element={<Prediction />} ></Route>
      </Routes>
    </div>
  );
  }

export default App;
