import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from '../Utils/Layout'
import Signin from '../Page/Signin'
import Signup from '../Page/Signup'
import Home from '../Page/Home'
import Adddata from '../Page/Adddata'
import Update from '../Page/Update'
import About from '../Page/About'
import Viewuserdetails from '../Component/Viewuserdetails'

function Allroutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />  
                    <Route path="Signup" element={<Signup />} />
                    <Route path="Signin" element={<Signin />} />
                    <Route path="Adddata" element={<Adddata />} />
                    <Route path="Update/:id" element={<Update />} />
                    <Route path='About' element={<About />} />
                    <Route path='Viewuserdetails/:id' element={<Viewuserdetails/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default Allroutes
