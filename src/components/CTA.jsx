import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
    return (
        <section className='cta'>
            <p className='cta-text'>Looking for a Frontend Engineer?
                <br className='sm:block hidden' />
            </p>
            <Link to='/contact' className='btn'>
                Contact
            </Link>

        </section>
    )
}

export default CTA