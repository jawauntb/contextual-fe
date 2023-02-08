import React, { useState } from 'react';
import axios from 'axios';
import ylang_logo from '../public/ylang.jpg'

const Message: React.FC<{ user: string; message: string; time: string; image: string }> = ({
  user,
  message,
  time,
  image,
}) => {
  return (
    <div className="flex items-start px-3 py-2">
      <img className="w-10 h-10 rounded-full" src={image} alt={user} />
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-600">{user}</p>
        <p className="text-sm text-gray-600">{message}</p>
        <p className="text-xs text-gray-400">{time}</p>
      </div>
    </div>
  );
};


const MessageInput: React.FC<{ input: string, setInput: (value: string) => void, handleSubmit: () => void }> = ({ input, setInput, handleSubmit }) => {
  return (
    <div className="h-full flex items-center px-3 py-2 mt-3 bg-gray-100 border-t border-gray-300">
      <input
        type="text"
        className="w-full h-full px-3 py-2 text-sm border border-transparent rounded focus:outline-none"
        placeholder="Type a message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="ml-2 px-3 py-2 text-sm bg-gray-600 text-white rounded hover:bg-gray-700"
        onClick={handleSubmit}
      >
        Send
      </button>
    </div>
  );
};



const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      user: "Blossom",
      message: "Hey, How are you?",
      time: new Date().toLocaleTimeString(),
      image: ylang_logo.src,
    }
  ]);
  const [input, setInput] = useState('');
  const api = "https://ylangylang.jawaunbrown.repl.co/"

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();
    }
    try {
      const response = await axios.post(
        `${api}ylang`,
        JSON.stringify({ query: input }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const myMsg = {
        user: "You",
        message: input,
        time: new Date().toLocaleTimeString(),
        image: ylang_logo.src
      };

      const blossomMsg = {
        user: "Blossom",
        message: response.data,
        time: new Date().toLocaleTimeString(),
        image: ylang_logo.src
      }
      setMessages([...messages, myMsg, blossomMsg]);
      setInput('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="px-3 py-2">
      <h2 className="m-7 text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">Contextual: <i className="text-blue-600">Blossom AI</i></h2>
      <div className="flex flex-col h-32rem overflow-auto">
        {messages.map(({ user, message, time, image }, index) => (
          <Message
            key={index}
            user={user}
            message={message}
            time={time}
            image={image}
          />
        ))}
      </div>
      <MessageInput input={input} setInput={setInput} handleSubmit={handleSubmit} />
    </div>
  );
};

export default ChatWindow;