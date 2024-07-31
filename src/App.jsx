import React, { useState } from 'react'; // Adicione aqui
import Navbar from './components/navbar.jsx';
import Chat from './components/chat.jsx';
import HomePage from './components/homepage.jsx';

function App() {
  const [nome, setNome] = useState('');
  return (
    <>
      <Navbar />
      <div className="pt-12 md:pt-0">
        <HomePage setNome={setNome} />
        <Chat nome={nome} />
      </div>
    </>
  );
}

export default App;
