import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../styles/SaintsRow.css';
import srLogo from '../assets/SR logo.png';

export function DadoSuerte() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [jugadorRegistrado, setJugadorRegistrado] = useState(null);
  const [valorDado, setValorDado] = useState(1);

  const emojisDados = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'nombre') setNombre(value);
    if (name === 'apellido') setApellido(value);
    if (name === 'edad') setEdad(value);
  };

  const handleGuardarJugador = (e) => {
    e.preventDefault();
    if (nombre && apellido && edad) {
      setJugadorRegistrado({ nombre, apellido, edad });
    }
  };

  const lanzarDado = () => {
    const nuevoValor = Math.floor(Math.random() * 6) + 1;
    setValorDado(nuevoValor);
  };

  const obtenerMensaje = (valor) => {
    if (valor === 1) return "Mala suerte, sacaste 1";
    if (valor >= 2 && valor <= 5) return "Buen tiro!";
    if (valor === 6) return "¡FELICIDADES! ¡Sacaste el mayor!";
    return "";
  };

  return (
    <Container className="sr-container my-5">
      <div className="text-center mb-4 d-flex align-items-center justify-content-center gap-2">
        <img 
          src={srLogo} 
          alt="Saints Row Logo" 
          style={{ width: '45px', height: '45px', objectFit: 'contain' }} 
        />
        <h2 className="sr-title m-0">Dado de la Suerte</h2>
        <img 
          src={srLogo} 
          alt="Saints Row Logo" 
          style={{ width: '45px', height: '45px', objectFit: 'contain' }} 
        />
      </div>

      {!jugadorRegistrado ? (
        <Form onSubmit={handleGuardarJugador}>
          <h4 className="text-center mb-3" style={{ color: '#d17bff' }}>REGISTRO DE JUGADOR</h4>
          
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={nombre}
              onChange={handleInputChange}
              required
              className="sr-input"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={apellido}
              onChange={handleInputChange}
              required
              className="sr-input"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              name="edad"
              placeholder="Edad"
              value={edad}
              onChange={handleInputChange}
              required
              className="sr-input"
            />
          </Form.Group>

          <Button type="submit" className="sr-btn w-100 mt-2">
            Registrar Jugador
          </Button>
        </Form>
      ) : (
        <div className="text-center">
          <div className="sr-jugador-info mb-3">
            <p className="mb-1"><strong>Jugador:</strong> {jugadorRegistrado.nombre} {jugadorRegistrado.apellido}</p>
            <p className="mb-0"><strong>Edad:</strong> {jugadorRegistrado.edad} años</p>
          </div>

          <div className="sr-display">
            {emojisDados[valorDado - 1]}
          </div>

          <p className="sr-subtexto">Te tocó: {valorDado}</p>
          <p className="sr-mensaje">{obtenerMensaje(valorDado)}</p>

          <Button onClick={lanzarDado} className="sr-btn px-4 py-2 mt-2">
            Lanzar Dado
          </Button>
        </div>
      )}
    </Container>
  );
}