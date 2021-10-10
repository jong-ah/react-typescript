import React from 'react';
import GlobalStyle from './styles/global';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// return() 쓰는거 잊지말자
// FC는 function의 약자
const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Footer />
    </>
  );
};

export default App;
