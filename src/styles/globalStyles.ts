import { createGlobalStyle } from 'styled-components';

import FontsFreeNetSFProTextBold from './fonts/FontsFree-Net-SFProText-Bold.ttf';
import FontsFreeNetSFProTextBoldItalic from './fonts/FontsFree-Net-SFProText-BoldItalic.ttf';
import FontsFreeNetSFProTextHeavy from './fonts/FontsFree-Net-SFProText-Heavy.ttf';
import FontsFreeNetSFProTextLight from './fonts/FontsFree-Net-SFProText-Light.ttf';
import FontsFreeNetSFProTextMedium1 from './fonts/FontsFree-Net-SFProText-Medium-1.ttf';
import FontsFreeNetSFProTextMedium from './fonts/FontsFree-Net-SFProText-Medium.ttf';
import FontsFreeNetSFProTextSemibold1 from './fonts/FontsFree-Net-SFProText-Semibold-1.ttf';
import 'antd/dist/antd.css'

export const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: FontsFreeNetSFProTextBold;
    src: local('FontsFreeNetSFProTextBold'), url(${FontsFreeNetSFProTextBold});
  }

  @font-face {
    font-family: FontsFreeNetSFProTextBoldItalic;
    src: local('FontsFreeNetSFProTextBoldItalic'), url(${FontsFreeNetSFProTextBoldItalic});
  }

  @font-face {
    font-family: FontsFreeNetSFProTextHeavy;
    src: local('FontsFreeNetSFProTextHeavy'), url(${FontsFreeNetSFProTextHeavy});
  }

  @font-face {
    font-family: FontsFreeNetSFProTextLight;
    src: local('FontsFreeNetSFProTextLight'), url(${FontsFreeNetSFProTextLight});
  }

  @font-face {
    font-family: FontsFreeNetSFProTextMedium1;
    src: local('FontsFreeNetSFProTextMedium1'), url(${FontsFreeNetSFProTextMedium1});
  }

  @font-face {
    font-family: FontsFreeNetSFProTextMedium;
    src: local('FontsFreeNetSFProTextMedium'), url(${FontsFreeNetSFProTextMedium});
  }

  @font-face {
    font-family: FontsFreeNetSFProTextSemibold1;
    src: local('FontsFreeNetSFProTextSemibold1'), url(${FontsFreeNetSFProTextSemibold1});
  }

  :root {
    --greenText: #21E270;
    --backgroundHeader: #EFEFF4;
    --light-gray: #C7C7CC;
    --gray: #707070;
    --medium-gray: #747474;
    --descripionText: #8E8E93;
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