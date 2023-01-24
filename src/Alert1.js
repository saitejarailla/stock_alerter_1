import React from 'react';

function Alert1() {
    for(let i=0;i<100;i++){
        
        setTimeout(() => {  console.log("World!"); }, 100000);

    }

    return (
        <div>
            
        </div>
    );
}

export default Alert1;