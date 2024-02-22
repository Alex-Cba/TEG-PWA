import * as signalR from "@microsoft/signalr";

const baseUrl = "https://localhost:7123/api/SignalR";
const hubUrl = "https://localhost:7123/PrincipalHub";
let connection = null;
let connectionId = null;

const StartConnection = async() => {
  try {
    connection = new signalR.HubConnectionBuilder().withUrl(hubUrl).build();

    await connection.start();
    console.log("SignalR connection established.");

    connectionId = connection.connectionId;
    console.log("Initial connectionId:", connectionId);

    connection.on("SendMessageAllPlayeres", (message) => {
      console.log("Received message:", message);
    });
  } catch (error) {
    console.error("Error establishing SignalR connection:", error);
    throw error;
  }
}

const StopConnection = async() => {
  if (connection) {
    return connection.stop();
  }
}
const SendAllPlayersMessage = async (message) => {
  try {
    const response = await fetch(baseUrl + "/SendMessageAllPlayers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      throw new Error("SendMessageAllPlayers response was not ok");
    }
  } catch (error) {
    console.error("Error creating post:", error);
  }
};

const SendPlayerMessage = async (message) => {
  try {
    const response = await fetch(baseUrl + "/SendMessagePlayer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      throw new Error("SendMessagePlayer response was not ok");
    }
  } catch (error) {
    console.error("Error creating post:", error);
  }
};

const SendDicesData = async (body) => {
  try {
    const response = await fetch(baseUrl + "/ReceiveDicesData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "connectionId": connectionId,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("SendDicesData response was not ok");
    }
  } catch (error) {
    console.error("Error creating post:", error);
  }
};



export { SendAllPlayersMessage, SendPlayerMessage, StartConnection, StopConnection, SendDicesData };
