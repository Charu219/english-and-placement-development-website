// src/ChatWindow.jsx
import React from "react";

export default function ChatWindow({ messages, onPlay }) {
  return (
    <div className="chat-window">
      {messages.map((msg, idx) => {
        // choose CSS class based on speaker
        const cls =
          msg.speaker === "User"
            ? "msg user"
            : msg.speaker === "Bot"
            ? "msg bot"
            : "msg system";
        return (
          <div key={idx} className={cls}>
            <strong>{msg.speaker}:</strong> {msg.text}
            <button
              onClick={() => onPlay(msg.text)}
              style={{ marginLeft: "8px" }}
            >
              🔊
            </button>
          </div>
        );
      })}
    </div>
  );
}
