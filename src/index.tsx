import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Menu from './components/header/Menu';
import Whats from './components/whats/Whats';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function App() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="App">
      <Header handleOpenModal={() => setOpenModal(true)}/>
      <Menu isOpen={openModal} onRequestClose={() => setOpenModal(false)}/>
      <Main/>
      <Whats/>
      <Footer/>
    </div>
  );
}


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
