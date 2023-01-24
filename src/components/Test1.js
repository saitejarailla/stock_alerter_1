import { useState ,useEffect} from "react";

function Test1(){
    
    useEffect(()=>{
        const fetchApi=async()=>{
            const url="https://api.wheretheiss.at/v1/satellites/25544"
            const response=await fetch(url);
            const resJson=await response.json();
            console.log(resJson)
       };
       fetchApi();
    },[])
    return (
<div>
    
</div>
    );
}
export default Test1;