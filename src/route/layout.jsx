import React, { lazy, Suspense } from 'react'
import { Routes,Route} from 'react-router-dom';
const Home=lazy(()=>import("../page/home"));
const Dashboard=lazy(()=>import("../page/dashboard"));

const Layout = () => {
  return (
    <Suspense fallback={()=>{return(<>Hi</>)}}>

   
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/dash" element={<Dashboard/>}/>
   </Routes>
   </Suspense>
  )
}

export default Layout
