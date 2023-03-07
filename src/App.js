import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Posts from './Pages/Posts';
import Login from './Pages/Login';
import CreatePost from './Pages/CreatePost';



function App() {


  const [isAuth,setIsAuth] = useState(localStorage.getItem("isAuth"))


  return (
    <div className="App">

    <Navbar auth={isAuth} setAuth={setIsAuth}/>

        <Routes>
     <Route  path='/' element={<Home auth={isAuth}/>} />
     <Route  path='/posts' element={<Home/>} />
     <Route  path='/login' element={<Login setIsAuth={setIsAuth} />} />
     <Route  path='/portfolio' element={<Login />} />
     <Route  path='/createpost' element={<CreatePost auth={isAuth}/>} />

        </Routes>
   <Footer/>
    </div>
  );
}

export default App;
