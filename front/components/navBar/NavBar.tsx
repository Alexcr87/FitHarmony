import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex justify-between mx-8 p-4 text-white'>
       <div>
        <p className='font-bold'>FitHarMony</p>
       </div>
       <div>
            <ul className='flex gap-6'>
                <li><Link href="#">Inicio</Link></li>
                <li><Link href="#">Acerca de</Link></li>
                <li><Link href="#">Contacto</Link></li>
            </ul>
       </div>
    </nav>
  )
}

export default NavBar
