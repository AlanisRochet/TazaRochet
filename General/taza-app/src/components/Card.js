import './Card.css';



function Card(props) {
  return (
    <div>
        <div>
        <h3>{props.product}</h3>
        <p>{props.price}</p>
        </div>
        <div>
          <button>Ver detalles del producto</button>
        </div>
    </div>
  );
}

export default Card;