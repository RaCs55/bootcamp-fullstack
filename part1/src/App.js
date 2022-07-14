import './App.css';
import Mensaje from './Mensjae.js'
  


const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

const App = () => {

  return (
    <div className="App">
      <Mensaje msg='Estamos trabajado en un curso de React' />
      <Description></Description>
    </div>
  );
}

export default App;
