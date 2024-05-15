import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from '@/pages/sidebar/Sidebar';
import Navbar from '@/pages/navbar/Navbar';
import Card from '@/pages/card/Card';



export default function page() {
       return (
        <div className='tailwind'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 col-lg-2 col-md-3">
                        <Sidebar/>
                    </div>
                    <div className="col-10 col-lg-10 col-md-9">
                        <Navbar/>
                        <Card/>
                    </div>
                </div>
            </div>
        </div>
  )
}




