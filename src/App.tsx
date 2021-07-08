import React from 'react';

import GlobalStyle from './styles/global';

import LadingPage from './pages/Lading';

const App: React.FC = () => {
  return(
    <>
      <LadingPage />
      <GlobalStyle />
    </>
  )
};

export default App;
