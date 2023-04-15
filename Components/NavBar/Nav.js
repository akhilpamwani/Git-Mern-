import React,{useEffect} from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router'
export const Nav = () => {
  let history=useRouter()
useEffect(() => {
if (localStorage.getItem('token')) {
  document.getElementById('login').style.display='none'
  document.getElementById('signup').style.display='none'
}else{
  document.getElementById('logout').style.display='none'
}
}, )
  
  const handleLogout=()=>{
    localStorage.removeItem('token')
   window.location.href='/login'
  }
  return (
    
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">iNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        
      </ul>




<form className="d-flex justify-content-end w-100">
<Link className="btn btn-primary mx-2" role="button" href="/login" id="login">Login</Link>
<Link className="btn btn-primary mx-2" role="button" href="/signup" id="signup">Signup</Link>
<Link className="btn btn-primary mx-2" onClick={handleLogout} href="/login"  id="logout">Logout</Link>
</form>



   
  
        
    </div>
  </div>
</nav>
    </>
  )
}
