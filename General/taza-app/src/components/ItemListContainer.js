import './ItemListContainer.css';
import Card from './Card';
import Contador from './Contador';
import {useEffect, useState}from 'react';



function ItemListContainer() {

  const [info, setInfo] = useState()

  useEffect(()=>{
    fetch('data.json')
    .then((resp)=>resp.json())
    .then((data)=> setInfo(data))
  },[])

  return (
    <div>
      <div>
      {info && info.map(i => <Card product={i.nombre} price={i.precio} />)}
      </div>
    <Contador stock={6}/>
    </div>
  );
}

export default ItemListContainer;