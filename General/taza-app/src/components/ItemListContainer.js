import './ItemListContainer.css';
import Card from './Card';


function ItemListContainer() {
  return (
    <section>
        <Card product='taza' price='$900'/>
        <Card product='taza + plato' price='1300'/>
        <Card product='taza para sopa' price='$1500'/>
    </section>
  );
}

export default ItemListContainer;