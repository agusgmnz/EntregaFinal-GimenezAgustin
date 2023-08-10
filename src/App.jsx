import './App.css'
import NavBarComponent from './components/NavBarComponent'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

const App =() => {
  

  return (
    <div>
      <ItemListContainer greeting="¡Las mejores zapatillas del pais!" />
      <NavBarComponent/>
    </div>
  )
}

export default App
