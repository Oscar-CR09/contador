export const ConterApp = ()=>{

    let counter = 0;
    const counterincrement =()=>{
        counter = counter + 1;
        console.log('click' + counter)
    }
    
    return <>

        <h2>El valor del contador { counter } </h2>
        <button onClick= {() => {counterincrement()}} >Incrementar Contador +1 </button>

    </>


}
