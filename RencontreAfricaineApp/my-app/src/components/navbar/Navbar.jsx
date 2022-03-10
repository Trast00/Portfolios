import React from 'react'
import './logo.png'
import './Navbar.scss'
import {ArrowDropDown, Search} from '@material-ui/icons'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <img src="./logo.png" alt="logo" />
        <div className="seekbar">
          <Search />
          <span>Looking for some thing ?</span> 

        </div>

      </div>
      <div className="center">
        <span>Discovery</span>
        <span>Publication</span>
        <span>Discussion</span>
      </div>
      <div className="right">
        <img src="https://scontent.forn3-1.fna.fbcdn.net/v/t39.30808-6/273705726_1120001282168258_6228290758840196750_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH6wyT9KAMMlL0X55g7cpR-qQ8xig4rugapDzGKDiu6BqCKOzn8tKA4A2_kttRpnFU6KJStzrQh0Dy1QxE4XcrW&_nc_ohc=oD2QCZa7EKwAX_GMrgl&_nc_oc=AQng6hzqTMAiAguHnwoWY-X7apZEA5ixJ0b6X38eqLM-IIxszLj8FTZq-fintbQNIj8&_nc_ht=scontent.forn3-1.fna&oh=00_AT_ueofF2gF-6p7UV-fXTzdnLLl21Qd9jho5WrJJnC33Ig&oe=621168B2" alt="profile" />
        <ArrowDropDown className='icons' />
      </div>


      

    </div>
  )
}

export default Navbar