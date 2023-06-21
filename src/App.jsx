import { useState } from 'react';
import { BaseColaboradores } from './assets/js/BaseColaboradores';
import Alert from './components/Alert';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Buscador from './components/Buscador';
import './main.css' 

const App = () => {
  const [mensajeAlerta, setMensajeAlerta] = useState('');
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const agregarColaborador = (nuevoColaborador) => {
    const id = colaboradores.length + 1;
    const colaboradorConId = { id, ...nuevoColaborador };
    setColaboradores([...colaboradores, colaboradorConId]);
  };

  return (
    <>
      <Buscador/>
      <Formulario className="formulario-container"
        agregarColaborador={agregarColaborador}
        setMensajeAlerta={setMensajeAlerta}
      />
      <Alert mensaje={mensajeAlerta} className="alert-container" />
      <Listado colaboradores={colaboradores} className="listado-container" />  
    </>
  );
};

export default App;
