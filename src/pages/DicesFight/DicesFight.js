import { useState } from "react";

import {
  SendAllPlayersMessage,
  SendPlayerMessage,
  StartConnection,
  StopConnection,
  SendDicesData,
} from "../../services/DicesService";

import "./DicesFight.css";

const DicesFight = () => {
  const [typePlayer, setTypePlayer] = useState("");
  const [color, setColor] = useState("");
  const [numberDices, setNumberDices] = useState(0);

  async function connectConnection() {
    StartConnection();
  }

  async function closeConnection() {
    StopConnection();
  }

  async function SendData() {
    try {
      const response = await SendDicesData({
        TypePlayer: typePlayer,
        Color: color,
        NumberDices: numberDices,
      });

      console.log(response);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  return (
    <div className="global-container">
      <div>
        <div>
          <label htmlFor="color">Tipo de rival:</label>
          <input
            type="text"
            id="typePlayer"
            value={typePlayer}
            onChange={(event) => setTypePlayer(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="color">Color:</label>
          <input
            type="text"
            id="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="numberDices">Número de Dados:</label>
          <input
            type="number"
            id="numberDices"
            value={numberDices}
            onChange={(event) => setNumberDices(event.target.value)}
          />
        </div>
        <button onClick={SendData}>Enviar</button>
      </div>

      <div>
        <button onClick={connectConnection}>Establecer Conexion</button>
        <button onClick={closeConnection}>Desconectarce</button>
      </div>
    </div>
  );
};

export default DicesFight;
