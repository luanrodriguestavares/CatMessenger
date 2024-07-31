import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, SendHorizontal } from 'lucide-react';

const Chat = ({ nome }) => {
  const [mensagem, setMensagem] = useState('');
  const [chat, setChat] = useState([]);
  const [estaAberto, setEstaAberto] = useState(false);
  
  const containerChatRef = useRef(null);
  const wsRef = useRef(null);

  useEffect(() => {
    const socket = new WebSocket('https://catmessengerws.onrender.com');
    wsRef.current = socket;

    socket.onopen = () => {
      console.log('Conexão WebSocket estabelecida');
    };

    socket.onmessage = async (evento) => {
      let dados = evento.data;

      if (dados instanceof Blob) {
        dados = await dados.text();
      }

      if (typeof dados === 'string') {
        console.log('Mensagem recebida do servidor:', dados);
        setChat(prevChat => [...prevChat, dados]);
      } else {
        console.error('Mensagem recebida não é uma string:', dados);
      }
    };

    socket.onclose = () => {
      console.log('Conexão WebSocket fechada');
    };

    socket.onerror = (erro) => {
      console.error('Erro WebSocket:', erro);
    };

    return () => socket.close();
  }, []);

  const enviarMensagem = () => {
    if (!nome) {
      console.log('Nome não fornecido. Não é possível enviar a mensagem.');
      return;
    }

    if (wsRef.current && mensagem) {
      if (wsRef.current.readyState === WebSocket.OPEN) {
        const mensagemCompleta = `${nome}: ${mensagem}`;
        console.log('Enviando mensagem:', mensagemCompleta);
        wsRef.current.send(mensagemCompleta);
        setMensagem('');
      } else {
        console.error('WebSocket não está aberto. Estado:', wsRef.current.readyState);
      }
    }
  };

  const alternarChat = () => {
    setEstaAberto(!estaAberto);
  };

  useEffect(() => {
    if (containerChatRef.current) {
      containerChatRef.current.scrollTop = containerChatRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4">
      {!estaAberto ? (
        <button onClick={alternarChat} className="bg-rose-600 text-white p-4 rounded-full hover:bg-rose-700 transition-transform duration-300 transform hover:scale-105 shadow-md flex items-center">
            <MessageCircle className="w-7 h-7 text-zinc-200" strokeWidth="2" />
        </button>
      ) : (
        <div className="bg-white shadow-md rounded-lg max-w-lg w-96">
          <div className="p-4 border-b bg-rose-600 text-white rounded-t-lg flex justify-between items-center">
            <p className="text-lg font-semibold">Chat</p>
            <button onClick={alternarChat} className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400">
                <X className="w-7 h-7 text-zinc-200" strokeWidth="2" />
            </button>
          </div>
          <div ref={containerChatRef} className="p-4 h-80 overflow-y-auto">
            {chat.map((msg, index) => (
              <div key={index} className={msg.startsWith(`${nome}:`) ? "mb-2 text-right" : "mb-2"}>
                <p className={`rounded-full py-2 px-4 inline-block ${msg.startsWith(`${nome}:`) ? "bg-rose-500 text-white" : "bg-gray-200 text-gray-700"}`}>
                  {msg.startsWith(`${nome}:`) ? msg.split(': ')[1] : msg}
                </p>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Digite sua mensagem..."
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        className="flex-1 border rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-rose-500"/>
                    <button
                        onClick={enviarMensagem}
                        className="bg-rose-600 text-white p-2 rounded-full hover:bg-rose-700 transition-transform duration-300 transform hover:scale-105 flex items-center justify-center">
                        <SendHorizontal className="w-6 h-6 text-zinc-200" strokeWidth="2" />
                    </button>
                </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
