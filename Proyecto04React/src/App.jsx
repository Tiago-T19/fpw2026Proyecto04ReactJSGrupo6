//useState: se utiliza para guardar y actualizar datos
import { useState } from "react";
import "./App.css";

function App() {
  //estado del dado: comienza en 1.
  const [dado, setDado] = useState(1);


  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");

  const [jugador, setJugador] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

//funciones
 function registrarJugador(evento) {
  evento.preventDefault();

  setJugador({
    nombre: nombre.trim(),
    apellido: apellido.trim(),
    edad: edad
  });

  setMostrarFormulario(false);
}

  function lanzarDado() {
    const resultado = Math.floor(Math.random() * 6) + 1;
    setDado(resultado);
  }

  function obtenerMensaje() {
    if (dado === 1) {
      return "Mala suerte, sacaste 1";
    } else if (dado === 6) {
      return "¡FELICIDADES! ¡Sacaste el mayor!";
    } else {
      return "¡Buen tiro!";
    }
  }

  const caras = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

  return (
    <main className="pagina">
      <section className="tarjeta">

        <h1>🎲 El dado de la suerte</h1>
        <p>¡Probá tu suerte!</p>
        <button
        type="button"
        className="btn boton-registro"
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >
         {mostrarFormulario ? "Ocultar formulario" : "Registrar jugador"}
         </button>
         
         {mostrarFormulario && (
          <form onSubmit={registrarJugador} className="formulario">
          <h2>Datos del jugador</h2>
          <label htmlFor="nombre">Nombre:</label>
          <input
          id="nombre"
          type="text"
          className="form-control"
          value={nombre}
          onChange={(evento) => setNombre(evento.target.value)}
          placeholder="Ingresá tu nombre"
          required
          />
          
          <label htmlFor="apellido">Apellido:</label>
          <input
          id="apellido"
          type="text"
          className="form-control"
          value={apellido}
          onChange={(evento) => setApellido(evento.target.value)}
          placeholder="Ingresá tu apellido"
          required
          />
          <label htmlFor="edad">Edad:</label>
          <input
          id="edad"
          type="number"
          className="form-control"
          value={edad}
          onChange={(evento) => setEdad(evento.target.value)}
          placeholder="Ingresá tu edad"
          min="1"
         max="120"
         step="1"
         required
         />
         <button type="submit" className="btn boton-registro">
          Registrar jugador
          </button>
          </form>
        )}


        <div className="zona-dado">
          <h2>Tu resultado</h2>

          <div className="dado" aria-label={`Resultado: ${dado}`}>
            {caras[dado - 1]}
          </div>

          <p className="numero">
            Te tocó: <strong>{dado}</strong>
          </p>

          <p className="mensaje">{obtenerMensaje()}</p>

          <button
            type="button"
            className="btn boton-lanzar"
            onClick={lanzarDado}
          >
            🎲 Lanzar dado
          </button>
        </div>

        <section className="resultado-jugador">
          <h2>Jugador actual</h2>

          {jugador !== null ? (
            <div className="datos-registrados">
              <p>
                <strong>Nombre:</strong> {jugador.nombre}
              </p>

              <p>
                <strong>Apellido:</strong> {jugador.apellido}
              </p>

              <p>
                <strong>Edad:</strong> {jugador.edad} años
              </p>
            </div>
          ) : (
            <p className="ayuda">
              Completá el formulario para mostrar los datos del jugador.
            </p>
          )}
        </section>

      </section>
    </main>
  );
}

export default App;
