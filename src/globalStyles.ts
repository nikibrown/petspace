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

	p {
		font-size: ${designTokens.fontSizes.small};
		font-weight: ${designTokens.fontWeights.normal};
		line-height: ${designTokens.lineHeights.text};
	}

	h1 {
		font-size: ${designTokens.fontSizes.xlarge};
		font-weight: ${designTokens.fontWeights.semibold};
		line-height: ${designTokens.lineHeights.heading};
	}

	h2 {
		font-size: ${designTokens.fontSizes.large};
		font-weight: ${designTokens.fontWeights.semibold};
		line-height: ${designTokens.lineHeights.heading};
	}

	h3 {
		font-size: ${designTokens.fontSizes.medium};
		font-weight: ${designTokens.fontWeights.semibold};
		line-height: ${designTokens.lineHeights.heading};
	}
`
