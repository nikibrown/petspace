import { createGlobalStyle } from "styled-components"
import { designTokens } from "./components/designTokens"

export const GlobalStyles = createGlobalStyle`
	* {
	box-sizing: border-box;
	}
	html {
		scroll-behavior: smooth;
	}

	html, body {
		color: ${designTokens.colors.brandDark};
		font-family: "Open Sans", sans-serif;
		margin: 0;
		padding: 0;
	}
`
