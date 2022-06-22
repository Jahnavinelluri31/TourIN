import React from 'react'
import Login from './Login';
import { Route,Routes } from 'react-router-dom';

function Profile() {
  return (
    <div className='container-fluid'>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default Profile;
