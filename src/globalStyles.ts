import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
	* {
	box-sizing: border-box;
	}
	html {
		scroll-behavior: smooth;
	}

	html, body {
		font-family: sans-serif;
		margin: 0;
		padding: 0;
	}
`
