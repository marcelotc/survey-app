import { createGlobalStyle } from 'styled-components';

import FontsFreeNetSFProTextBold from './fonts/FontsFree-Net-SFProText-Bold.ttf';
import FontsFreeNetSFProTextLight from './fonts/FontsFree-Net-SFProText-Light.ttf';
import 'antd/dist/antd.css'

export const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: FontsFreeNetSFProTextBold;
    src: local('FontsFreeNetSFProTextBold'), url(${FontsFreeNetSFProTextBold});
  }

  @font-face {
    font-family: FontsFreeNetSFProTextLight;
    src: local('FontsFreeNetSFProTextLight'), url(${FontsFreeNetSFProTextLight});
  }

  body{
    font-family: 'FontsFreeNetSFProTextBold';
  }

  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
`;