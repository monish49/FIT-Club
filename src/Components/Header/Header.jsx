import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false
  const [menu, setmenu] = useState(false)
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="" />
      {
        menu === false && mobile === true ? (
          <div style={{ backgroundColor: 'var(--appColor)', padding: '0.5rem', bordeRadius: '5px' }}
            onClick={() => setmenu(true)}
          ><img src={bars} style={{ width: '1.5rem', height: '1.5rem' }} alt="" /></div>
        ) : (
          <ul className='header-menu' >
            <li  ><Link
              onClick={() => setmenu(false)}
              to='home'
              span={true}
              smooth={true}
            >Home</Link></li>

            <li ><Link
              onClick={() => setmenu(false)}
              to='programs'
              span={true}
              smooth={true}
            >Programs</Link></li>

            <li ><Link
              onClick={() => setmenu(false)}
              to='reasons'
              span={true}
              smooth={true}
            >Why Us</Link></li>

            <li ><Link
              onClick={() => setmenu(false)}
              to='plans'
              span={true}
              smooth={true}
            >Plans</Link></li>

            <li ><Link
              onClick={() => setmenu(false)}
              to='testimonials'
              span={true}
              smooth={true}
            >Testimonials</Link></li>

          </ul>
        )
      }


    </div>
  )
}

export default Header