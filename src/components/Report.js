import { useEffect,useState } from 'react';
import './Report.css'
import React from 'react';
import './ContactUs'
import { ContactUs } from './ContactUs';
const Report =(props)=>{

    const[price1,setPrice]=useState(null);
    const[symbol,setSymbol]=useState(null)
//    console.log(price1)

    useEffect(()=>{
        const fetchApi=async()=>{
              let api_key = 'b914ebe8009ab25dd00ce856a8923288';
            // let api_key ='98097d44f41b16a6972fec2f14334972'
            // let api_key ='43eb754c0bd794db430baa9837e04977'
            // let api_key ='664f0277b2201619256a9fa8475b301f'
            const url="https://financialmodelingprep.com/api/v3/quote-short/"+props.search[0]+"?apikey="+api_key;
            const response=await fetch(url);
            const resJson=await response.json();
           if(resJson!==undefined){
           // console.log(resJson[0])
            setPrice(resJson[0].price)
            setSymbol(resJson[0].symbol)
           } 
        //    if(price1!==null)
        //    alert("price of "+props.search[4]+" is "+price1)

       };
       fetchApi();
    //    if(props.search[1]<price1){
    //    setInterval(fetchApi,1000);
    },[props])






    return (
    <div >     <p>price:{price1} </p>

                {/* {
                    props.purpose&&  
                    props.purpose==="buy"? 
                    props.search[1]<=price1 &&  <ContactUs sent={[props.search[0],price1,props.search[2]]}/> :
                    props.search[1]>=price1 &&   <ContactUs sent={[props.search[0],price1,props.search[2]]}/>
                } */}



{
                    props.purpose&&  
                    props.purpose==="buy"? 
                    props.search[1]<=price1 &&  <p>buy</p> :
                    props.search[1]>=price1 &&   <p>sell</p>
                }


                    { props.search[1]>=price1 ?   <ContactUs sent={[props.search[0],price1,props.search[2]]} />:<h1></h1>}

        
    </div>
            );
}

export default Report;