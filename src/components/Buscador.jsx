import { useState } from 'react';

const Buscador = ({ colaboradores, setColaboradoresFiltrados }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  const handleBusqueda = (event) => {
    const valor = event.target.value;
    setTerminoBusqueda(valor);

    const colaboradoresFiltrados = colaboradores.filter((colaborador) =>
      Object.values(colaborador)
        .join(' ')
        .toLowerCase()
        .includes(valor.toLowerCase())
    );

    setColaboradoresFiltrados(colaboradoresFiltrados);
  };

  return (
    <div>
      <input className="btn-buscador"
        type="text"
        placeholder="Buscar colaborador..."
        value={terminoBusqueda}
        onChange={handleBusqueda}
      />
      <button onClick={() => setColaboradoresFiltrados(colaboradores)}>
        Buscar
      </button>
    </div>
  );
};

export default Buscador;
