import OpenSansRegularWoff2 from './OpenSans-Regular.woff2';
import OpenSansBoldWoff2 from './OpenSans-Bold.woff2';

const fontFamily = 'Open Sans';
const fontWeights = ['normal', 'bold'];
const systemFontWeights = [`${fontFamily} Regular`, `${fontFamily} Bold`];
const woff2Fonts = [OpenSansRegularWoff2, OpenSansBoldWoff2];

/* eslint-disable no-param-reassign */
const fontFaces = woff2Fonts.reduce((prev, curr, i) => {
  prev += `@font-face {
      font-family: '${fontFamily}';
      src: 
      local('${systemFontWeights[i]}'),
      local('${systemFontWeights[i].replace(/\s/, '')}'),
      url(${curr}) format('woff2'),
      font-weight: ${fontWeights[i]};
      font-style: normal;
    }
  `;
  return prev;
});
/* eslint-enable no-param-reassign */

export default fontFaces;
