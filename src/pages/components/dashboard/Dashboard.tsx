import Image from 'next/image';
import React from 'react';
import logo from "@/pages/assets/logo.png";
import Navbar from '../navbar/Navbar';





const Dashboard = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased text-gray-800">
                <div className="fixed flex flex-col top-0 left-0 w-64 bg-neutral-900 h-full border-r">
                    <div className="flex items-center justify-center h-14 border-b">
                    <div className="flex items-center justify-center gap-3 py-3">
                        <div className="icon">
                            <Image
                                src={logo}
                                alt='logo Red'
                            />


                        </div>
                        <div className="text-white font-bold text-lg">Red Product</div>
                    </div>
                    </div>
                    <div className="overflow-y-auto overflow-x-hidden flex-grow">
                    <ul className="flex flex-col py-4 space-y-1">
                        <li className="px-5">
                        <div className="flex flex-row items-center h-8">
                            <div className="text-sm font-light tracking-wide text-gray-500">Principale</div>
                        </div>
                        </li>
                        <li>
                        <a href="connexion" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                        </a>
                        </li>
                        <li>
                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">Listes des Hotels</span>
                            <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="navbar">
                    <Navbar/>
                </div>
            </div>
        </div>
    );
};


export default Dashboard;
