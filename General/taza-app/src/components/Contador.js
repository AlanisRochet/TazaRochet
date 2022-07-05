import {useEffect, useState} from "react";
import Swal from 'sweetalert2'

function Contador({stock}){
    const [num, setNum]= useState(0);

    useEffect(()=>{
        if(num === stock - 2){
            Swal.fire({
                title: 'Atencion!',
                text: 'Quedan pocas unidades.',
                icon: 'warning',
                timer:2000
              })
        }
    },[num])

    const sumar=() =>{
        if(num < stock){
        setNum(num +1)
        }
        else{
            Swal.fire({
                title: 'Atencion!',
                text: 'Ya ha llegado al stock maximo de este producto',
                icon: 'warning',
                timer:2000
              })
        }
    }

    const resta=() =>{
        if(num>0){
            setNum(num -1)
        }
    }

    const reiniciar =() =>{
        setNum(0)
    }
    const agregar =()=>{
        console.log(num)
    }

    return(
        <>
            <p>{num}</p>
            <button onClick= {sumar}>Agregar</button>
            <button onClick={resta}>Quitar</button>
            <button onClick={reiniciar}>Borrar todo</button>
            <button onClick={agregar}>Agregar al carrito</button>
        </>
    )
}
export default Contador;