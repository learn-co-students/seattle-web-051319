import React from 'react'

const TourDate = (props) => {
    let {city, date, band} = props.date
    return <div>
        <p>{`${band} is playing in ${city} on ${date}`}</p>
    </div>
}

export default TourDate