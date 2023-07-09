// Card.js
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Report from '../FetchPrice/Report';
import './Card.css';

function Card(props) {
  const [values1, setValues] = useState('');
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = values => setValues(values);

  return (
    <div className='col-sm-12 col-md-6 col-xl-4'>
      <div className="card4">
        <div className="face4 front4">
          <img className="img4" src={props.photo} alt="img1" />
          <h1 className="heading4">{props.title}</h1>
        </div>
        <div className="face4 back4">
          <h1 className="heading4">{props.title}</h1>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id={`inlineRadio${props.id}1`} {...register("purpose")} value="sell" />
            <label className="form-check-label" htmlFor={`inlineRadio${props.id}1`}>sell</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id={`inlineRadio${props.id}2`} {...register("purpose")} value="buy" />
            <label className="form-check-label" htmlFor={`inlineRadio${props.id}2`}>buy</label>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p>
              <u><b><i>Set Your Price</i></b></u><br />
              <input
                className='d-block mx-auto'
                type="text"
                {...register("price", { required: "Required" })}
                placeholder='price'
              />
            </p>
            <p>
              <u><b><i>Enter Your EmailID</i></b></u>
              <input
                className='d-block mx-auto'
                type="text"
                {...register("Email", { required: "Required" })}
                placeholder='Email'
              />
            </p>
            {errors.username && errors.username.message}
            <button className='btn2 d-block mx-auto' type="submit">Submit</button>
          </form>
          <Report search={[props.sym, values1.price, values1.Email, props.title]} purpose={values1.purpose} />
          <br />
          <p id="alerttext1"> </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
