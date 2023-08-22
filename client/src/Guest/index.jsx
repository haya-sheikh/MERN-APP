import React from 'react'
import Home from './Pages/Home'
import SignUp from './Pages/SignnUp'
import Login from './Pages/Login'
import GuestNav from './Components/GuestNav'
import GuestFooter from './Components/GuestFooter'

import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

function index() {
  return (
    <>
    <GuestNav />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to='/login' replace={true} />} />
    </Routes>
    <GuestFooter/>
</>
  )
}

export default index
