import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import PrivateRoutes from './Pages/PrivateRoutes'
import Chat from './Pages/Chat'
import Register from './Pages/Register'
import Login from './Pages/Login'

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-white">

        <Routes>

          <Route element={<PrivateRoutes />}>
            <Route path='/chat' element={<Chat />}></Route>
          </Route>

          <Route path='/' element={<Register />}></Route>

          <Route path='/login' element={<Login />}></Route>

          <Route path='*' element={<Navigate to="/login" />}></Route>

        </Routes>
      </div>

    </>
  )
}

export default App