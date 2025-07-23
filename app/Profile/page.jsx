// profile page for each user showing thier user name and posts
'use client';  
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';    
import './page.css';
import Layout from '../layout.jsx'; 
// import { fetchUserProfileEmail } from '../api/login/userprofileemailfetch'; 
const ProfilePage = () => {
 
  return (
    <div className='profile'>
       <Layout/>
      <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
      <h1>Your Profile</h1>
    </div>
  );
};
export default ProfilePage;