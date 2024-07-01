import React from 'react'
import { Link } from 'react-router-dom'

const navData = [
{name:"Home", navLink:"/",id:1},
{name:"Products", navLink:"/products",id:2},
{name:"Account", navLink:"/account",id:5},]
const Navbar = () => {
  return (
    <>
    <div className='container'>
    <div className='navbar'>
        <div className='nav-logo'>
            <Link to="/"><img src="/images/logo.png" width="120px" alt="nav-logo"/></Link>
        </div>
        <nav>
            <ul>
              {navData.map((navItem,i)=>{
                return <li key={navItem.id}> <Link to={navItem.navLink}>{navItem.name}</Link></li>
              })}
            </ul>
        </nav>
        <Link to="/cart"><img src="images/cart.png" alt="cart"  className='cart'/></Link>
        <img src="images/menu.png" alt="menu" className='menu-icon'/>
    </div>
    </div>
    
    </>
  )
}

export default Navbar