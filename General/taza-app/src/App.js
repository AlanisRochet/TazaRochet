import './App.css';
import{Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Titulo from './components/Titulo';
import Body from './components/Body';
import Card from './components/Card'
import ItemListContainer from './components/ItemListContainer';
import Container from './components/container/Container';
import Inicio from './components/inicio/Inicio'
import Products from './components/products/Products'



function App() {
  return (
    <div className="App">     
      <Titulo />
      <NavBar />
      <Routes>
        <Route path="/inicio">element ={<Inicio/>} </Route>
        <Route path="/products">element ={<Products/>} </Route>
      </Routes>
      <Body><ItemListContainer><Card><Container/></Card></ItemListContainer></Body>
    </div> 
  )
}

export default App;
