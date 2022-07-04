import './Card.css';



function Card(props) {
  return (
    <div>
        <h3>{props.product}</h3>
        <p>{props.price}</p>
    </div>
  );
}

export default Card;