import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Footer from './Footer'
import { GlobalStyles } from '../globalStyles'


interface LayoutProps {
  pageTitle: string
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
  	return (
            <>
            <GlobalStyles />
			<Header siteTitle={data.site.siteMetadata.title} />
			<main>
				<div className="container">
					<h1>{pageTitle}</h1>
					{children}
				</div>	
			</main>
			<Footer siteTitle={data.site.siteMetadata.title} />	
    	</>
  	)
}

export default Layout