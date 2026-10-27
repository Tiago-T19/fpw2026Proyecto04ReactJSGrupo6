import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../styles/SaintsRow.css';
import srLogo from '../assets/SR logo.png';

function Dado() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  
  const [jugadorRegistrado, setJugadorRegistrado] = useState(null);
  
  const [valorDado, setValorDado] = useState(1);

  const emojisDados = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

  const handleGuardarJugador = (e) => {
    e.preventDefault();
    if (nombre.trim() && apellido.trim() && edad) {
      setJugadorRegistrado({
        nombre: nombre.trim(),
        apellido: apellido.trim(),
        edad: edad
      });
    }
  };

  const lanzarDado = () => {
    const nuevoValor = Math.floor(Math.random() * 6) + 1;
    setValorDado(nuevoValor);
  };

  const obtenerMensaje = (valor) => {
    if (valor === 1) return "Mala suerte, sacaste 1";
    if (valor >= 2 && valor <= 5) return "¡Buen tiro!";
    if (valor === 6) return "¡FELICIDADES! ¡Sacaste el mayor!";
    return "";
  };

  return (
    <main className="pagina">
      <Container className="tarjeta shadow-sm p-4">
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
        <h1 className="text-center mb-3">🎲 El dado de la suerte</h1>
        
        {!jugadorRegistrado ? (
          <>
            <p className="text-center text-muted mb-4">¡Probá tu suerte registrándote primero!</p>
            <Form onSubmit={handleGuardarJugador} className="formulario">
              <Form.Group className="mb-3">
                <Form.Label>Nombre:</Form.Label>
                <Form.Control
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ingresá tu nombre"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Apellido:</Form.Label>
                <Form.Control
                  type="text"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  placeholder="Ingresá tu apellido"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Edad:</Form.Label>
                <Form.Control
                  type="number"
                  value={edad}
                  onChange={(e) => setEdad(e.target.value)}
                  placeholder="Ingresá tu edad"
                  min="1"
                  max="120"
                  required
                />
              </Form.Group>

              <Button type="submit" className="boton-registro w-100" variant="primary" size="lg">
                Registrar jugador
              </Button>
            </Form>
          </>
        ) : (
          <div className="zona-dado text-center mt-4">
            <section className="resultado-jugador mb-4 p-3 rounded">
              <h4 className="mb-3">Jugador actual</h4>
              <div className="datos-registrados text-start">
                <p className="mb-1"><strong>Nombre:</strong> {jugadorRegistrado.nombre} {jugadorRegistrado.apellido}</p>
                <p className="mb-0"><strong>Edad:</strong> {jugadorRegistrado.edad} años</p>
              </div>
            </section>

            <h3>Tu resultado</h3>
            
            <div className="dado my-3" style={{ fontSize: '4rem' }} aria-label={`Resultado: ${valorDado}`}>
              {emojisDados[valorDado - 1]}
            </div>

            <p className="numero h5">
              Te tocó: <strong>{valorDado}</strong>
            </p>

            <p className="mensaje fw-bold text-primary">{obtenerMensaje(valorDado)}</p>

            <Button 
              onClick={lanzarDado} 
              className="boton-lanzar mt-3 w-100" 
              variant="success" 
              size="lg"
            >
              🎲 Lanzar dado
            </Button>
          </div>
        )}
      </Container>
    </main>
  );
}


export default Dado;