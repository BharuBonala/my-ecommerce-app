import React,{useState} from 'react'
import Navbar from './Navbar'
import FooterSection from './FooterSection'

 const LoginForm=()=>(
    <form id="loginForm">
        <input type="text" placeholder='Username'/>
        <input type="password" placeholder='Password'/>
        <button type="submit" className='button'>Login</button>
        <a href="">Forgot Password</a>
    </form>
 )
 const RegistrationForm=()=>(
    <form id="RegistrationForm">
        <input type="text" placeholder='Username'/>
        <input type="email" placeholder='email'/>
        <input type="password" placeholder='Password'/>
        <button type="submit" className='button'>Register</button>
    </form>                         

 )

const AccountPage = () => {
    const [showLoginForm,setShowLoginForm]=useState(false)

    const toggleForm=(type)=>{
   if(type == 'login'){
    setShowLoginForm(true)
   }else{
    setShowLoginForm(false)
   }     
    }
  return (
    <>
    <Navbar/>
    <div className='account-page'>
        <div className='container'>
            <div className='row'>
                <div className='col-2'>
                    <img src="images/image1.png" width="100%" alt=""/>
                </div>
                <div className='col-2'>
                    <div className='form-container'>
                        <div className='form-btn'>
                            <span onClick={()=>{toggleForm('login')}}>Login</span>
                            <span onClick={()=>{toggleForm('signup')}}>Register</span>
                            <hr id="indicator" style={{marginLeft:showLoginForm? "-50%":"0"}} />
                            {showLoginForm?<LoginForm/>:<RegistrationForm/>}
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterSection/>
    </>
  )
}

export default AccountPage