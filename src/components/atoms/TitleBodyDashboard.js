import React from 'react'

function TitleBodyDashboard(props) {
    return (
        <div className={props.center ? "ps-3 text-center" : "ps-3"}>
            <div className="fw-bold">{props.text}</div>
        </div>
    )
}

export default TitleBodyDashboard
