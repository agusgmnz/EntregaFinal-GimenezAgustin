import './App.css'
import NavBarComponent from './components/NavBarComponent'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

const App =() => {
  

  return (
    <div>
      <NavBarComponent/>
      <ItemListContainer greeting="¡Las mejores zapatillas del pais!" />
    </div>
  )
}

export default App
