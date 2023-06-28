import * as React from "react"

interface BarGraphProps {
    min: number
    max: number
}

const BarGraph: React.FC<BarGraphProps> = ({ min, max }) => {
    const barLength = `${Math.floor((max / 18) * 100)}%`

    return (
        <div className="bar-bg">
            <div className="bar" style={{ width: barLength }}>
                <span>
                    {min} - {max} years
                </span>
            </div>
        </div>
    )
}

export default BarGraph
