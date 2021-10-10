// 파일추가에서 styles/global.ts 입력하면 폴더 안에 파일이 생성된다.

import { createGlobalStyle } from 'styled-components';
import BackgroundImage from '../assets/background.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  #root {
    margin: 0 auto;
  }
  html {
    background: url(${BackgroundImage}) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;    
  }
`;
