import { useEffect,useState } from 'react';
import './Report.css'
import React from 'react';
import './ContactUs'
import { ContactUs } from './ContactUs';
const Report =(props)=>{

    const[price1,setPrice]=useState(null);
    const[symbol,setSymbol]=useState(null)
    let [code,setCode] = useState(0);
    let api = [
        'b914ebe8009ab25dd00ce856a8923288',
        '98097d44f41b16a6972fec2f14334972',
        '43eb754c0bd794db430baa9837e04977',
        '664f0277b2201619256a9fa8475b301f']
        let [apiKey,setApiKey] = useState(api[1]);
    useEffect(()=>{
        const fetchApi=async()=>{

            const url="https://financialmodelingprep.com/api/v3/quote-short/"+props.search[0]+"?apikey="+apiKey;
            const response=await fetch(url);
            const resJson=await response.json();
            if(resJson !== undefined){
            setPrice(resJson[0].price)
            setSymbol(resJson[0].symbol)
            } 
            if(response.status === '429'){
                setCode(code+1);
                setApiKey(api[code]);
                console.log(code);
            }
            console.log(code)
        };
        fetchApi();
    //    if(props.search[1]<price1){
    //    setInterval(fetchApi,1000);
    },[props])
    console.log(props.purpose)

    return (
    <div >     <p>price:{price1} </p>
                {
                    props.purpose&&  
                    props.purpose==="buy"&&
                    props.search[1]>=price1 && <ContactUs sent={[props.search[0],price1,props.search[2]]} />  
                }
                {
                    props.purpose&&  
                    props.purpose==="sell"&&
                    props.search[1]<=price1 && <ContactUs sent={[props.search[0],price1,props.search[2]]} />  
                }
    </div>
);
}

export default Report;