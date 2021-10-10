// (오류) Could not find a declaration file for module 'react' 뜬다면,
// npm install --save @types/react @types/react-dom 재설치 해야함
// 출처 : https://hpoption.tistory.com/m/1129?category=0

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
