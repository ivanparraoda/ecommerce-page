import './navbar.css'
import PropTypes from 'prop-types'
import { useState } from 'react'

const NavBar = ({ setIsComponentVisible, count }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleVisibility = () => {
    setIsComponentVisible((prev) => !prev)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-10'
          onClick={toggleMenu}
        ></div>
      )}
      <nav className='flex justify-between md:px-20 md:py-8 p-4 items-center md:w-full relative z-20'>
        <div className='flex gap-4 items-center'>
          <button className='md:hidden' onClick={toggleMenu}>
            <img src='/public/media/images/icon-menu.svg' alt='menu icon' />
          </button>
          <a href='#'>
            <img src='/public/media/images/logo.svg' alt='logo' />
          </a>
          <ul
            className={`flex flex-col md:flex-row gap-4  md:gap-8 text-black md:text-gray-500 fixed left-0 top-0 p-4 h-full w-2/3 bg-white transition-transform transform font-bold md:font-normal ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } md:relative md:translate-x-0 md:w-auto md:bg-transparent`}
          >
            <li className='hover:text-black mb-6 md:hidden'>
              <button onClick={toggleMenu}>✕</button>
            </li>
            <li
              className={`hover:text-gray-600 ${
                isMenuOpen ? '' : 'hover-effect'
              }  `}
            >
              <a href='#'>Collections</a>
            </li>
            <li
              className={`hover:text-gray-600 ${
                isMenuOpen ? '' : 'hover-effect'
              }  `}
            >
              <a href='#'>Men</a>
            </li>
            <li
              className={`hover:text-gray-600 ${
                isMenuOpen ? '' : 'hover-effect'
              }  `}
            >
              <a href='#'>Women</a>
            </li>
            <li
              className={`hover:text-gray-600 ${
                isMenuOpen ? '' : 'hover-effect'
              }  `}
            >
              <a href='#'>About</a>
            </li>
            <li
              className={`hover:text-gray-600 ${
                isMenuOpen ? '' : 'hover-effect'
              }  `}
            >
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='flex gap-2 md:gap-8 items-center'>
          <div className='relative'>
            <button onClick={handleVisibility}>
              <img src='/public/media/images/icon-cart.svg' alt='cart icon' />
            </button>
            {count > 0 && (
              <span className='absolute -top-2 -right-2 bg-orange-400 text-white w-5 h-5 rounded-full flex justify-center items-center text-xs'>
                {count}
              </span>
            )}
          </div>
          <button className='w-10 h-10 rounded-full border-transparent border-2 hover:border-orange-400'>
            <img
              src='/public/media/images/image-avatar.png'
              alt='avatar image'
            />
          </button>
        </div>
        <span className=' md:absolute hidden md:block -z-10 bottom-2 left-12 w-11/12 border-gray-300'></span>
      </nav>
    </>
  )
}

NavBar.propTypes = {
  setIsComponentVisible: PropTypes.func,
  count: PropTypes.number
}

export default NavBar
