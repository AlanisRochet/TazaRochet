import './App.css';
import NavBar from './components/NavBar';
import Titulo from './components/Titulo';
import Body from './components/Body';
import Card from './components/Card'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">     
    <Titulo />
    <NavBar />
    <Body><ItemListContainer><Card /></ItemListContainer></Body>

  </div> 
  )
}

export default App;
