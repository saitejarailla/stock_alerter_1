import React from 'react';
import { useState } from 'react';
import {useForm } from 'react-hook-form'
import  Report  from '../Report'

function Card3(props) {
    const  [values1,setValues]=useState("");
    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = values => setValues(values) ;
    // console.log(values1)
  
    return (
        <div>
             <div className="card4">
                    <div className="face4 front4">
                        <img className="img4" src={props.obj[0]} alt="img1"/>
                        <h1 className="heading4">{props.obj[1]}</h1>
                    </div>
                    <div className="face4 back4">
                        <h1 className="heading4">{props.obj[1]}</h1>
                        <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" {...register("purpose")} value="sell" />
  <label className="form-check-label" htmlFor="inlineRadio1">sell</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="buy" />
  <label className="form-check-label" htmlFor="inlineRadio2">buy</label>
</div>
                        <form onSubmit={handleSubmit(onSubmit )}>
                        <p><u><b><i>Set Your Price</i></b></u><br/>
                            <input className='d-block mx-auto'
                            type="text"
                            {...register("price", {
                             required: "Required",
                            })} placeholder='price'
                        /></p>
                        <p><u><b><i>Enter Your EmailID</i></b></u>
                        <input className='d-block mx-auto'
                            type="text"
                            {...register("Email", {
                             required: "Required",
                            })} placeholder='Email'
                        /></p>
                              {errors.username && errors.username.message}
                                <button className='btn2 d-block mx-auto' type="submit">Submit</button>
                                </form>
                                <Report search={[props.obj[2],values1.price,values1.Email,props.obj[1]]} purpose={values1.purpose}/>

                        
                        <p id="alerttext1"> </p>
                    </div>
                </div>
        </div>
    );
}

export default Card3;