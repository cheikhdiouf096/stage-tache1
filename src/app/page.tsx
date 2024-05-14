import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebare from '@/pages/components/sidebare/page';
import Navbar from '@/pages/components/navbar/Navbar';
import Dashboard from '@/pages/components/dashboard/page';
import Connexion from './connexion/page';






export default function page() {
       return (
        <div className='tailwind'>
            <Connexion/>
        </div>
  )
}




