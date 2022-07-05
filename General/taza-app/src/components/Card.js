import './Card.css';
import Container from '../components/container/Container';




function Card(props) {
  return (
    <div>
        <div>
        <h3>{props.product}</h3>
        <p>{props.price}</p>
        </div>
        <div>
        <Container/>
        </div>
    </div>
  );
}

export default Card;