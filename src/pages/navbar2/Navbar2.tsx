import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPlus, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import ProfileAdmin from "@/app/assets/img-2.jpg"
import Image from "next/image";
import '../navbar/navbar.scss'

export default function Navbar2() {
 
      return (
        <div className="Navbar">
            <nav className="border-bottom">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-14 w-full items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>
                   
                        <FontAwesomeIcon icon={faUser} />
                   
                        <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            <Link href="/" className="text-dark rounded-md px-3 py-2 text-sm font-bold" aria-current="page">Dashboard</Link>
                        </div>
                        </div>
                    </div>
                    <div className="flex gap-3 absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="search">
                            <input type="text" className="border border-sky-200 outline-none rounded-full p-1" placeholder="🔎 rechercher"/>
                        </div>
                        <div className="search">
                            <Link href="/notification" className="pointer-events-auto text-black">
                                <FontAwesomeIcon icon={faBell} />
                            </Link>
                        </div>
                        <div className="search">
                            <div className="shrink-0">
                                <Image className="h-10 w-10 object-cover rounded-full" src={ProfileAdmin} alt='Profile Admin'/>
                            </div>
                        </div>
                        <div className="logOut">
                            <Link href="/" className="pointer-events-auto text-black">
                                <FontAwesomeIcon icon={faRightToBracket} />
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
            <header className='border-bottom'>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-14 w-full items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            <div className="text-xl px-3">
                                <span className="">Hôtels</span>
                                <span className="text-xl text-gray-400 font-bold"> 8</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="flex gap-3 absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="buttonAdd">
                            <Link href="#" className="border border-sky-200 outline-none rounded-full p-2">
                                <span className="p-1"><FontAwesomeIcon icon={faPlus}/></span>
                                <span className="p-1 text-black">Creer un nouveau hotel</span>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
