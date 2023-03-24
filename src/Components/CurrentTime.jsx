import React, {useEffect, useState} from "react";


const Timer = () => {

      var [date,setDate] = useState(new Date());


    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return (
          <div className= 'd-flex justify-content-between align-items-center'>
              <div>{date.toLocaleTimeString('fa-IR')}</div>
             <div className='ms-2'> {date.toLocaleDateString('fa-IR')} </div>
        </div>
    )
};

export default Timer

