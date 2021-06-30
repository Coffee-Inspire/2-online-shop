import React from 'react'

function TitleDashboard(props) {
    return (
        <div className={props.center ? "p-4 text-center" : "p-4"}>
            <h3>{props.text}</h3>
        </div>
    )
}

export default TitleDashboard
