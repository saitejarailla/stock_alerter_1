import './App.css';
import { useEffect,useState } from 'react';
import Report from './components/Report'
import {useForm } from 'react-hook-form'
import { ContactUs } from './components/ContactUs';
import Card1 from './components/Card1';

function App() {
  const  [values1,setValues]=useState("");
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = values => setValues(values);


  return (
    <div>
   

            <Card1></Card1>

    </div>
  );
  }

export default App;
