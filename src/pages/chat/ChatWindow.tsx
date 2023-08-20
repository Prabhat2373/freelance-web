import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [socket, setSocket] = useState(null);
  const currentUser = "643156358efa0488dc0de449";
  const selectedUser = "643ba0ebc0d527b6b0d86a95";
  useEffect(() => {
    // Connect to the Socket.io server
    const newSocket = io("http://localhost:8001");
    setSocket(newSocket);

    // Fetch messages between current user and selected user from the backend API
    axios
      .get(`http://localhost:8001/api/v2/chat/${currentUser}/${selectedUser}`)
      .then((response) => {
        console.log("response", response);

        setMessages(response.data);
      });

    return () => {
      // Disconnect the socket when the component unmounts
      newSocket.disconnect();
    };
  }, [currentUser, selectedUser]);

  useEffect(() => {
    if (!socket) return;

    // Listen for incoming messages
    socket.on("message", (message) => {
      console.log("message", message);

      setMessages([...messages, message]);
    });
  }, [socket, messages]);

  const sendMessage = () => {
    if (messageInput.trim() !== "") {
      // Send message to the Socket.io server
      console.log("sending the message", messageInput);

      socket.emit("message", {
        sender: currentUser,
        receiver: selectedUser,
        content: messageInput,
      });

      setMessageInput("");
    }
  };

  return (
    <div>
      <h2>Chat with {selectedUser}</h2>
      <div>
        {messages.map((message) => (
          <div key={message._id}>
            <strong>{message.sender?.name}: </strong>
            {message.content}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
