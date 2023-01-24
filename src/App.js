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
    <div className='text-center'>
     <form onSubmit={handleSubmit(onSubmit)}>
      <input className='d-block mx-auto'
        type="text"
        {...register("name", {
          required: "Required",
        })} placeholder='stock'
      />

      <input className='d-block mx-auto'
        {...register("limit", {
          required: "Required",
          
        })} placeholder='limit'
      />
      {errors.username && errors.username.message}

      <button className='d-block mx-auto' type="submit">Submit(app)</button>
   </form> 


       <Report search={[values1.name,values1.limit]}/> 
    </div>

            <Card1></Card1>

    </div>
  );
  }

export default App;
