import {BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import React from 'react';
import Home from './page/Home';
import Profile from './page/Profile';
import About from './page/About';


const App =()=>{
  return (
    <BrowserRouter>

      <nav>
        <Link to={'/'}>Home</Link><br></br>
        <Link to={'/about'}>About</Link><br></br>
        <Link to={"/profile/velopert"}>velopert Profile</Link><br></br>
        <Link to={"/profile/gildong"}>gildong Profile</Link><br></br>
      </nav>

      <Routes>
        < Route path='/' element={<Home />}/>
        < Route path='/about' element={<About />}/>
        < Route path='/profile/:username' element={<Profile />}/>

      </Routes>
     
    </BrowserRouter>
  );
}

//nav는 a태그와 다르다. a쓰면 새로고침 됨
export default App;
