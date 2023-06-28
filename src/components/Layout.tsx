import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Footer from './Footer'
import { GlobalStyles } from '../globalStyles'


interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

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
					{children}
				</div>	
			</main>
			<Footer siteTitle={data.site.siteMetadata.title} />	
    	</>
  	)
}

export default Layout