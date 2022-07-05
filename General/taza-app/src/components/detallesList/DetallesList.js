import Detalles from '../detalles/Detalles';

function DetallesList(props){
    return(
        <div>
            {props.detalles.map((detalle)=>(
                <Detalles 
                nombre={detalle.nombre}
                precio={detalle.precio}
                />
            ))}
        </div>
    );
}

export default DetallesList;