import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

interface HeaderProps {
    siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
    const [showNotifications, setShowNotifications] = useState(true)

    return (
        <header>
            <div className="container">
                <div className="header-content">
                    <h1>
                        <Link to="/">{siteTitle}</Link>
                    </h1>

                    <div
                        className="avatar"
                        onClick={() => setShowNotifications(false)}
                    >
                        <StaticImage alt="Avatar" src="../images/paw.svg" />
                        {showNotifications ? (
                            <span className="badge">1</span>
                        ) : null}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
