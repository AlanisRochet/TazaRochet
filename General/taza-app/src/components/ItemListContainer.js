import './ItemListContainer.css';
import Card from './Card';
import Contador from './Contador';


function ItemListContainer() {
  return (
    <div>
        <section>
        <Card product='taza' price='$900'/>
        <Card product='taza + plato' price='1300'/>
        <Card product='taza para sopa' price='$1500'/>
    </section>
    <Contador/>
    </div>
  );
}

export default ItemListContainer;