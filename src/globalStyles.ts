import { createGlobalStyle } from "styled-components"
import { designTokens } from "./components/designTokens"

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	body {
		color: ${designTokens.colors.brandDark};
		font-family: "Open Sans", sans-serif;
		font-size: ${designTokens.fontSizes.small};
		font-weight: ${designTokens.fontWeights.normal};
		line-height: ${designTokens.lineHeights.text};
		margin: 0;
		padding: 0;
	}
`
