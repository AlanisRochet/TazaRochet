import{useState}from 'react'
import DetallesList from '../detallesList/DetallesList'

function Container(){
    const[detallesFetch, setDetallesFetch]= useState([])
    const [isLoading, setIsLoading]= useState(false)

    const fetchDetalles = () =>{
        setIsLoading(true)
        fetch('data.json')
        .then((response)=> {return response.json()})
        .then((data)=> setDetallesFetch (data.result) )
        setIsLoading(false)
    }
    return(
        <div>
            <button onClick={fetchDetalles}>Ver Detalles</button>
            {isLoading && <p>Cargando...</p>}
            <DetallesList detalles={detallesFetch}/>
        </div>
    )
}
export default Container;