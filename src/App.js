import './App.css';
import { useEffect,useState } from 'react';
import Report from './components/Report'
import {useForm } from 'react-hook-form'
import { ContactUs } from './components/ContactUs';
import Card1 from './components/Card1';
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Prediction from './components/Prediction';
import Footer from './components/Footer';
import Test from './components/Cards/Test';

function App() {
  const  [values1,setValues]=useState("");
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = values => setValues(values);


  return (
    <div>
      <Navbar />
      <Routes >
        <Route  path='/'  element={<Card1 />}></Route>
        <Route  path='/prediction' element={<Prediction />} ></Route>
      </Routes>
      <Footer />
      <Test />
    </div>
  );
  }

export default App;
