import './navbar.css';
import { useState,useRef,useEffect } from 'react';
import {signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { auth } from '../firebase-config';

function NavBar(props) {

    let navigate = useNavigate()
    function logOut(){
        signOut(auth).then(()=>{
          localStorage.clear()
          props.setAuth(false)
          
          navigate("/login")
    
        }) }
    const [menuClass,setMenuClass] = useState(true);
    const menuRef = useRef();
    function showNavBar(){
        setMenuClass(prevClass=> !prevClass)
        menuRef.current.classList.toggle("open")
        console.log(menuRef.current.classList[1])
    }

  
    useEffect(() => {
        const closeMenu = event => {
            if(menuRef.current.classList[1] === "open"){
            menuRef.current.classList.remove("open")
            setMenuClass(prevClass => !prevClass)
        }
        };
        
        document.addEventListener('mousedown', closeMenu);
        return () => {
        document.removeEventListener('mousedown', closeMenu);
          
        };
      }, []);

      useEffect(() => {
        const closeMenuOnScroll = event => {
            if(menuRef.current.classList[1] === "open"){
            menuRef.current.classList.remove("open") 
            setMenuClass(prevClass => !prevClass)
        }
        };
        document.addEventListener('scroll', closeMenuOnScroll);
        return () => {
        document.removeEventListener('scroll', closeMenuOnScroll);
          
        };
      }, []);

    //   useEffect(() => {
    //     const closeMenu = event => {
    //         if(!menuRef.current.contains(event.target)){
    //             setMenuClass(false)  
    //         }
    //         menuRef.current.classList.remove("open")
    //        console.log("scrolled")
    //         // setMenuClass(prevClass => !prevClass)
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
          
    //     };
    //   }, []);

    return (
        <header>
            <div className="logo"> 
          
            </div>
            <nav>
            <ul className='nav-items' ref={menuRef}>
                <li><Link to="/" className='links'> Home </Link></li>
            
                <li><Link to="/posts" className='links'> Posts</Link></li>
                <Link to="/"> <img src="./images/logo.png" alt="logo" 
             className="nav-logo" /></Link>
               {!props.auth ? <li><Link to="/login" className='links'> Login </Link></li>:
               <>
               <li><Link  to="/createpost" className='links'> Create a Post </Link></li>
               <li><Link  onClick={logOut} className='links'> Logout </Link></li>
               </>}
                <li><Link to="/portfolio" className='links'>Portfolio </Link></li>
            </ul>
            </nav>

     <div className="h-icons">
    <Link to="/cart" >
        <i className='bx bx-search'></i></Link>

    <Link to="/cart" >
        <i className='bx bx-cart'></i></Link>

    <i className={`bx ${menuClass ? "bx-menu": "bx-x"}`} id="menu-icon" 
    onClick={showNavBar} ></i>
    </div>
           
        </header>

    )
}

export default NavBar;