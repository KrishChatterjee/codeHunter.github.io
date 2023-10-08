import Link from 'next/link'
import React from 'react'


const Navbar = () => {
    return (
        <nav className='mainNav'>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar