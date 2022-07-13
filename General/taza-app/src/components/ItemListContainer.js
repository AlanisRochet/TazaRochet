import './ItemListContainer.css';
import Card from './Card';

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

    </div>
  );
}

export default ItemListContainer;