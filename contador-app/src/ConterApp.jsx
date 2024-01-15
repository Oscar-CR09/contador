export const ConterApp = ()=>{

    const counterincrement =()=>{
        console.log('click')
    }
    
    return <>

        <button onClick= {() => {counterincrement()}} >Incrementar Contador +1 </button>

    </>

}
