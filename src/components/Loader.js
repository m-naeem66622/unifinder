import React from 'react'
import Spinner from '../assets/Spinner.svg'

function Loader(props) {
    return (
        <div className="text-center"><img width="100px" src={Spinner} alt="" /></div>
    )
}

export default Loader