import { useState } from "react";
import "./App.css";

function App() {
  const [dado, setDado] = useState(1);

  const [jugador, setJugador] = useState({
    nombre: "",
    apellido: "",
    edad: "",
  });

  const [mostrarDatos, setMostrarDatos] = useState(false);

  const lanzarDado = () => {
    if (
      jugador.nombre === "" ||
      jugador.apellido === "" ||
      jugador.edad === ""
    ) {
      alert("Complete todos los datos del jugador");
      return;
    }

    const numeroAleatorio = Math.floor(Math.random() * 6) + 1;

    setDado(numeroAleatorio);
    setMostrarDatos(true);
  };

  const manejarCambio = (e) => {
    setJugador({
      ...jugador,
      [e.target.name]: e.target.value,
    });
  };

  const obtenerMensaje = () => {
    if (dado === 1) return "Mala suerte, sacaste 1";

    if (dado === 6) return "¡FELICIDADES! ¡Sacaste el mayor!";

    return "¡Buen tiro!";
  };

  const obtenerClaseMensaje = () => {
    if (dado === 1) return "rojo";

    if (dado === 6) return "verde";

    return "azul";
  };

  const caras = {
    1: "⚀",
    2: "⚁",
    3: "⚂",
    4: "⚃",
    5: "⚄",
    6: "⚅",
  };

  return (
    <div className="contenedor">
      <div className="card">

        <h1>🎲 Simulador de Dados</h1>

        <div className="formulario">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={jugador.nombre}
            onChange={manejarCambio}
          />

          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={jugador.apellido}
            onChange={manejarCambio}
          />

          <input
            type="number"
            name="edad"
            placeholder="Edad"
            value={jugador.edad}
            onChange={manejarCambio}
          />
        </div>

        <div className="dado">
          {caras[dado]}
        </div>

        <button onClick={lanzarDado}>
          Lanzar Dado
        </button>

        <h2 className={obtenerClaseMensaje()}>
          {obtenerMensaje()}
        </h2>

        {mostrarDatos && (
          <div className="jugador">
            <h3>Jugador</h3>

            <p>
              {jugador.nombre} {jugador.apellido}
            </p>

            <p>
              Edad: {jugador.edad}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;