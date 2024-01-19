import { useState } from "react";

export const ConterApp = ()=>{

    const [counter, setCounter] = useState(0);


    const counterincrement =()=>{setCounter(counter + 1);
        //console.log('click!' + counter)

    }
    
    return <>

        <h2>El valor del contador { counter } </h2>
        <button onClick= { () => counterincrement() } >Incrementar Contador +1 </button>

    </>


}
