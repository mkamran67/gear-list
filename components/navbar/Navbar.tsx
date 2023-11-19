import './navbar.css'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import React from 'react'

type Props = {}

function Navbar({ }: Props) {
  return (
    <div className='sticky top-0 left-0 w-full h-16 flex justify-between items-center'>
      <button className='nav-pills'>Logo</button>
      <ul className='nav-pills flex justify-evenly items-center gap-4'>
        <li>home</li>
        <li>about</li>
        <li>profile</li>
      </ul>
      <div className='nav-pills'>
        <input type="text" className='' placeholder='Search' />
        <button className='hover:text-gray-900 cursor-pointer hover:shadow-md rounded-md p-2'><MagnifyingGlassIcon className='h-6 w-6' /></button>
      </div>

    </div>
  )
}

export default Navbar