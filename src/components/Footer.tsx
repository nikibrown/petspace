import * as React from 'react'
import { Link } from 'gatsby'


interface FooterProps {
  siteTitle: string
}

const Footer: React.FC<FooterProps> = ({ siteTitle }) => {

    return (
            
        <footer>
            <div className="container">
                <div className="footer-content">
                    <p>&copy; <Link to="/">{siteTitle}</Link> 2023</p>
                    <p>Woof, Meow, Ribbit, Squeak</p>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer