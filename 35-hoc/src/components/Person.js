import React from 'react'

const Person = props => {
    const {name, age, home} = props
    return (
        <div>
            <h3>{name}</h3>
            <div>
                <p>Age: {age}, Home: {home}</p>
            </div>
        </div>
    )
}

export default Person