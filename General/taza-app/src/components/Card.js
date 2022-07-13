import './Card.css';
import Container from '../components/container/Container';
import Contador from './Contador';




function Card(props) {
  return (
    <div class ="div1">
      <div class="div2">
        <h3>{props.product}</h3>
        <p>{props.price}</p>
        <div>
          <Container/>
          <Contador stock={6}/>
        </div>
      </div>
    </div>
  );
}


export default Card;