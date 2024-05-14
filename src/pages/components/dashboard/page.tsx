import Image from 'next/image';
import React from 'react';
import logo from "@/pages/assets/logo.png";
import Navbar from '../navbar/Navbar';
import Sidebare from '../sidebare/page';
import Hotel from '../hotel/pages';
import Card from '../card/page';





const Dashboard = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 col-lg-2 col-md-3">
                        <Sidebare/>
                    </div>
                    <div className="col-10 col-lg-10 col-md-9">
                        <Navbar/>
                        <Card/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Dashboard;
