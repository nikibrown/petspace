import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"

export const Head: HeadFC = () => <title>FourOhFour not found! Oh No!</title>

const FourOhFour: React.FC<PageProps> = () => {
    return (
        <main>
            <h1>404: Not Found</h1>
            <h1>🐱 🐶 🐸 🐦</h1>
            <p>
                Try going back to the <Link to="/">homepage</Link>
            </p>
        </main>
    )
}

export default FourOhFour
