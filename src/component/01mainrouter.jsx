import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Mainfile from './02mainfile'
import Home from './04home.jsx'
import About01 from './05about'
import Apiexample01 from './06apiexample01'
import Login from './07 login '
import Login02 from './09 login 02 '
import Register from './Register.jsx';
import '../component/login.css'


const Mainrouter = () => {
  const AdminPanel = React.lazy(() => import("../Admin/01 AdminRouter"))

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Mainfile />}>     */}
        <Route path="/">    
          <Route index element={<Navigate to="home" replace />}/>
          <Route path="home" element={<Home />} />
          <Route path="aboutus" element={<About01/>} />
          <Route path="apicall" element={<Apiexample01/>} />        
          <Route path="login" element={<Login/>} />        
          <Route path="login02" element={<Login02 />} />      
          <Route path="/registration" element={<Register />} />
          <Route path="admin/*" element={<React.Suspense fallback={<h1>Loding...</h1>}> <AdminPanel /></React.Suspense>} />

        </Route>
      </Routes>
    </>
  );
}
export default Mainrouter
