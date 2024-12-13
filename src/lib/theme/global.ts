import { createGlobalStyle } from 'styled-components';
import InterVarRegular from '../fonts/Inter-VariableFont_opsz,wght.ttf';
import InterVarItalic from '../fonts/Inter-Italic-VariableFont_opsz,wght.ttf';
import RobotoVarRegular from '../fonts/RobotoSerif-VariableFont_GRAD,opsz,wdth,wght.ttf';
import RobotoVarItalic from '../fonts/RobotoSerif-Italic-VariableFont_GRAD,opsz,wdth,wght.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
		font-family: 'Roboto';
		font-style: normal;
		src: url(${RobotoVarRegular}) format('truetype');
	}

	@font-face {
		font-family: 'Roboto';
		font-style: italic;
		src: url(${RobotoVarItalic}) format('truetype');
	}
  @font-face {
		font-family: 'Inter';
		font-style: normal;
		src: url(${InterVarRegular}) format('truetype');
	}

	@font-face {
		font-family: 'Inter';
		font-style: italic;
		src: url(${InterVarItalic}) format('truetype');
	}

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

	body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
            -webkit-overflow-scrolling: touch;
			/* font-family: Roboto; */
			
			/* :active {
				color: aqua;
			} */
				
				
            background: ${(props) => props.theme.colors.bg.default.page};
            color: ${(props) => props.theme.colors.fg.default.primary};
            }
	
            `;
