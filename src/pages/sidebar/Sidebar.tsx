"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "./sidebar.scss"
import Link from 'next/link';
import Image from 'next/image';
import iconRed from "@/app/assets/icon.png";




export default function Sidebar() {
    const [isSidebarActive, setSidebarActive] = useState(false);
    const [chevron, setChevron] = useState(false)


    const toggleSidebar = () => {
        setSidebarActive(!isSidebarActive);
        setChevron(prevChange => !prevChange) 
    };


    return (
        <div className="Sidebar">
            <nav className={`fixed flex flex-col top-0 left-0 z-40 w-64 bg-neutral-900 h-full border-r ${isSidebarActive ? 'active' : ''}`}>
                <div className="flex items-center justify-center h-14 border-b">
                    <div className="flex items-center justify-center gap-3 py-3">
                        <div className="icon"> <Image src={iconRed} alt='logo Red'/></div>
                        <div className="text-white font-bold text-md max-[768px]:text-xs max-[1024px]:text-xs">Red Product</div>
                        <div className="relative toggle ms-md-3 ml-2 d-flex gap-3">
                            <div className='chevron'>
                                <button onClick={toggleSidebar} className='relative left-9 max-[768px-567px]:left-12'>
                                    {chevron ? <FontAwesomeIcon icon={faChevronLeft} size="2x" color='white' className='relative right-4'/> :
                                    <FontAwesomeIcon icon={faChevronRight} size="2x" color='black'/>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overflow-y-auto overflow-x-hidden flex-grow sidebar">
                <ul className="flex flex-col py-4 space-y-1">
                        <li className="px-3">
                        <div className="flex flex-row items-center h-8">
                            <div className="text-sm font-light tracking-wide text-gray-500">Principale</div>
                        </div>
                        </li>
                        <li>
                            <Link href="/dashboard" className="relative px-3 flex flex-row items-center h-11 text-gray-400 focus:outline-none hover:bg-gray-50 hover:text-black border-l-4 border-transparent">
                                <span className="inline-flex justify-center items-center ml-4">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                </span>
                                <span className="p-2 text-sm tracking-wide truncate max-[1024px]:text-xs">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                        <Link href="./cardHotel" className="relative px-3 flex flex-row items-center h-11 text-gray-400 focus:outline-none hover:bg-gray-50 hover:text-black border-l-4 border-transparent">
                            <span className="inline-flex justify-center items-center ml-4">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                            </span>
                            <span className="p-2 text-sm tracking-wide truncate max-[1024px]:text-xs">Listes des Hotels</span>
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}





























// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import Image from 'next/image';
// import iconRed from "@/app/assets/icon.png";
// import Link from 'next/link';
// import styled, { css } from 'styled-components';

// const SidebarContainer = styled.div`
//   position: relative;
// `;

// const StyledNav = styled.nav`
//   position: fixed;
//   display: flex;
//   flex-direction: column;
//   top: 0;
//   left: 0;
//   z-index: 40;
//   width: 64px;
//   background-color: var(--bg-neutral-900);
//   height: 100%;
//   border-right: 1px solid var(--border-color);
  
//   ${({ active }) => active && css`
//     width: 230px;
//     transition: .4s;
//   `}

//   @media only screen and (min-width: 320px) {
//     width: 12rem;
//     left: -190px;
//     transition: .4s;

//     ${({ active }) => active && css`
//       left: 0px;
//       width: 14rem;
//     `}
//   }

//   @media only screen and (min-width: 768px) {
//     width: 12rem;
//     left: -190px;
//     transition: .4s;

//     ${({ active }) => active && css`
//       left: 0px;
//       width: 14rem;
//     `}
//   }

//   @media only screen and (min-width: 820px) {
//     width: 11rem;
//     left: 0px;

//     .chevron {
//       display: none;
//     }

//     ${({ active }) => active && css`
//       left: 0px;
//       width: 11rem;
//     `}
//   }

//   @media only screen and (min-width: 1280px) {
//     width: 15rem;
//     left: 0px;

//     .chevron {
//       display: none;
//     }

//     ${({ active }) => active && css`
//       left: 0px;
//       width: 15rem;
//     `}
//   }

//   @media only screen and (min-width: 1536px) {
//     width: 11rem;
//     left: 0px;

//     .chevron {
//       display: none;
//     }

//     ${({ active }) => active && css`
//       left: 0px;
//       width: 11rem;
//     `}
//   }
// `;

// const LogoContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 56px;
//   border-bottom: 1px solid var(--border-color);
// `;

// const ToggleButton = styled.button`
//   position: relative;
//   left: 9px;

//   @media (max-width: 768px) {
//     left: 12px;
//   }
// `;

// const Sidebar = () => {
//   const [isSidebarActive, setSidebarActive] = useState(false);
//   const [chevron, setChevron] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarActive(!isSidebarActive);
//     setChevron(prevChange => !prevChange);
//   };

//   return (
//     <SidebarContainer>
//       <StyledNav active={isSidebarActive ? 1 : 0}>
//         <LogoContainer>
//           <div className="icon"><Image src={iconRed} alt='logo Red' /></div>
//           <div className="text-white font-bold text-md max-[768px]:text-xs max-[1024px]:text-xs">Red Product</div>
//           <ToggleButton onClick={toggleSidebar} className="relative ml-2 d-flex gap-3">
//             <div className='chevron'>
//               {chevron ? <FontAwesomeIcon icon={faChevronLeft} size="2x" color='white' className='relative right-4' /> :
//                 <FontAwesomeIcon icon={faChevronRight} size="2x" color='black' />}
//             </div>
//           </ToggleButton>
//         </LogoContainer>
//         <div className="overflow-y-auto overflow-x-hidden flex-grow sidebar">
//           <ul className="flex flex-col py-4 space-y-1">
//             <li className="px-3">
//               <div className="flex flex-row items-center h-8">
//                 <div className="text-sm font-light tracking-wide text-gray-500">Principale</div>
//               </div>
//             </li>
//             <li>
//               <Link href="/dashboard" className="relative px-3 flex flex-row items-center h-11 text-gray-400 focus:outline-none hover:bg-gray-50 hover:text-black border-l-4 border-transparent">
//                 <span className="inline-flex justify-center items-center ml-4">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
//                 </span>
//                 <span className="p-2 text-sm tracking-wide truncate max-[1024px]:text-xs">Dashboard</span>
//               </Link>
//             </li>
//             <li>
//               <Link href="./cardHotel" className="relative px-3 flex flex-row items-center h-11 text-gray-400 focus:outline-none hover:bg-gray-50 hover:text-black border-l-4 border-transparent">
//                 <span className="inline-flex justify-center items-center ml-4">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
//                 </span>
//                 <span className="p-2 text-sm tracking-wide truncate max-[1024px]:text-xs">Listes des Hotels</span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </StyledNav>
//     </SidebarContainer>
//   );
// }

// export default Sidebar;


