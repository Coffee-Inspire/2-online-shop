import React from 'react'

function TitleBodyDashboard(props) {

    return (
        <div className={props.center ? "ps-3 text-center" : "ps-3"}>
            <div className="fw-bold">
                {props.text}
                {props.number !== null && 
                    <span className="ml-3 circleNotification">{props.number}</span>
                }
            </div>
        </div>
    )
}

export default TitleBodyDashboard
