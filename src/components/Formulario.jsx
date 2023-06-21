import { useState } from 'react';

const Formulario = ({ setMensajeAlerta, agregarColaborador }) => {

    const [nuevoColaborador, setNuevoColaborador] = useState({
        nombre: '',
        correo:'',
        edad:'',
        cargo: '',
        telefono: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNuevoColaborador((prevColaborador) => ({
            ...prevColaborador,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            nuevoColaborador.nombre === '' ||
            nuevoColaborador.correo === '' ||
            nuevoColaborador.edad === '' ||
            nuevoColaborador.cargo === '' ||
            nuevoColaborador.telefono === '' 
        ) {
            setMensajeAlerta('Error: Todos los campos son obligatorios')
            return;
        }

        agregarColaborador(nuevoColaborador);

        setMensajeAlerta('Colaborador agregado exitosamente');

        setNuevoColaborador({
            nombre: '',
            correo: '',
            edad: '',
            cargo: '',
            telefono: ''
        });
    };
    
    return (
        <form onSubmit={handleSubmit} className="forms-container">
          <input className="input-forms"
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={nuevoColaborador.nombre}
            onChange={handleChange}
          />
          <input className="input-forms"
            type="email"
            name="correo"
            placeholder="Correo"
            value={nuevoColaborador.correo}
            onChange={handleChange}
          />
          <input className="input-forms"
            type="number"
            name="edad"
            placeholder="Edad"
            value={nuevoColaborador.edad}
            onChange={handleChange}
          />
          <input className="input-forms"
            type="text"
            name="cargo"
            placeholder="Cargo"
            value={nuevoColaborador.cargo}
            onChange={handleChange}
          />
          <input className="input-forms"
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={nuevoColaborador.telefono}
            onChange={handleChange}
          />
          <button type="submit" className="btn-submit">Agregar</button>
        </form>
      );
    };
    
export default Formulario;