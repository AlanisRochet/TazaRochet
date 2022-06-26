import './Card.css';



function Card( {product , price}) {
  return (
    <div>
        <h3>{product}</h3>
        <p>{price}</p>
    </div>
  );
}

export default Card;