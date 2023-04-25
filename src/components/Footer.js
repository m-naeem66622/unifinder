import React from 'react'
import Heart from '../assets/heart-solid.svg'

function Footer() {
    return (
        <footer className='text-center'>
            <strong className='fs-5 text-muted'>Made with
                <img className='mx-1' width="20px" src={Heart} alt="heart-emoji" />
                by Naeem
            </strong>
        </footer>
    )
}

export default Footer