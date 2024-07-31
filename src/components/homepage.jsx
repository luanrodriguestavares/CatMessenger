import React from 'react';
import cat from './../assets/cat.png';
import cat2 from './../assets/cat2.png';

const HomePage = ({ setNome }) => {
  const [inputNome, setInputNome] = React.useState(''); // Estado para armazenar o nome digitado

  const handleNomeChange = (e) => {
    const novoNome = e.target.value;
    setInputNome(novoNome);
    setNome(novoNome); // Atualiza o estado no App
  };

  return (
    <section className="bg-gray-50">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
              Olá, bem vindo ao CatMessenger! 🐱
            </h2>
            <p className="mb-8 font-light lg:text-xl text-justify">
              Este projeto foi desenvolvido para explorar o funcionamento dos WebSockets em Node.js, com o objetivo de proporcionar uma experiência de chat em tempo real.
            </p>
            <p className="mb-8 font-light lg:text-xl">
              Para que funcione corretamente, por favor informe um nome de usuário!
            </p>
            <input
              type="text"
              placeholder="Nome..."
              value={inputNome}
              onChange={handleNomeChange}
              className="w-full border rounded-full py-2 px-4 mb-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
          <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={cat} alt="dashboard feature image" />
        </div>
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={cat2} alt="feature image 2" />
          <div className="text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
              O projeto foi desenvolvido em
            </h2>
            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 ">
                <li className="flex space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-base font-medium leading-tight text-gray-900 ">React Js</span>
                </li>
                <li className="flex space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-base font-medium leading-tight text-gray-900">Node Js</span>
                </li>
                <li className="flex space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-base font-medium leading-tight text-gray-900 ">Tailwind CSS</span>
                </li>
            </ul>
            <p className="mb-8 font-light text-justify lg:text-xl">
                O frontend foi desenvolvido com React.js, que permite criar interfaces interativas e componentes reutilizáveis. A estilização é feita com Tailwind CSS, oferecendo um design responsivo e estilização rápida através de classes utilitárias.
            </p>
            <p className="font-light text-justify lg:text-xl">
                O backend utiliza Node.js para construir um servidor WebSocket, possibilitando comunicação em tempo real entre cliente e servidor. Essa combinação de tecnologias garante uma experiência de usuário fluida e eficiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
