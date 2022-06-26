import {useState} from "react";

function Contador(){
    const [num, setNum]= useState(0);

    const sumar=() =>{
        setNum(num +1)
    }

    const resta=() =>{
        if(num>0){
            setNum(num -1)
        }
    }

    const reiniciar =() =>{
        setNum(0)
    }

    return(
        <>
            <p>{num}</p>
            <button onClick= {sumar}>Agregar</button>
            <button onClick={resta}>Quitar</button>
            <button onClick={reiniciar}>Borrar todo</button>
        </>
    )
}
export default Contador;