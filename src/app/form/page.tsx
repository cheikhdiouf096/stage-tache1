"use client"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";


const StyledContainer = styled.div`
  background-color: #1e1e1e; /* bg-neutral-900 */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 0; /* py-24 sm:py-26 */
`;


const StyledFormContainer = styled.div`
  width: 100%;
  margin-top: 2.5rem; /* my-5 */
  max-width: 36rem; /* max-w-xl */
  background-color: #ffffff; /* bg-white */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
  border-radius: 0.5rem; /* rounded */
  padding: 2rem 1.5rem; /* px-8 pt-3 pb-8 mb-4 p-5 */
`;


const StyledHeader = styled.div`
  display: flex;
  gap: 0.75rem; /* gap-3 */
  padding: 0.75rem; /* p-3 */
  border-bottom: 1px dotted gray; /* borderBottom */
  border-color: gray;
`;


const StyledInput = styled.input`
  width: 100%;
  border: 1px solid #d1d5db; /* border */
  border-radius: 0.25rem; /* rounded */
  padding: 0.5rem 0.75rem; /* py-2 px-3 */
  color: #4b5563; /* text-gray-700 */
  margin-bottom: 1rem; /* mb-4 */
`;


const StyledSelect = styled.select`
  width: 100%;
  border: 1px solid #d1d5db; /* border */
  border-radius: 0.25rem; /* rounded */
  padding: 0.5rem 0.75rem; /* py-2 px-3 */
  color: #4b5563; /* text-gray-700 */
  margin-bottom: 1rem; /* mb-4 */
`;


const StyledFooter = styled.footer`
  width: 100%;
`;


const Form = () => {
  return (
    <>
      <StyledContainer>
        <StyledFormContainer>
          <StyledHeader>
            <span>
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
            <span>Créer un nouveau hôtel</span>
          </StyledHeader>


          <form>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ flex: 1 }}>
                <div className="mb-4">
                  <label htmlFor="text">Nom de l'hotel</label>
                  <StyledInput
                    id="text"
                    type="text"
                    placeholder="CAP Marniane"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email">Email</label>
                  <StyledInput
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="number">Prix par nuit</label>
                  <StyledInput
                    id="number"
                    type="number"
                    placeholder="125.000 XOF"
                  />
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div className="mb-4">
                  <label htmlFor="text">Adress</label>
                  <StyledInput
                    id="text"
                    type="text"
                    placeholder="Les îles de ..."
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="number">Numéro de téléphone</label>
                  <StyledInput
                    id="text"
                    type="text"
                    placeholder="+221 ..."
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="text">Devise</label>
                  <StyledSelect id="text">
                    <option value="FXOF">F X0F</option>
                    <option value="Euro">Euro</option>
                    <option value="Dollard">$</option>
                  </StyledSelect>
                </div>
              </div>
            </div>
          </form>


          <StyledFooter>
            <div className="w-full">
              <label htmlFor="file" className="my-3">
                Ajouter une photo
              </label>
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-slate-200"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </StyledFooter>
        </StyledFormContainer>
      </StyledContainer>
    </>
  );
};


export default Form;








































// import Image from "next/image";
// import iconRed from "@/app/assets/icon.png";
// import vector from "@/app/assets/Vector.png";
// import arrowLeft from "@/app/assets/arrow-left.png";
// import React from "react";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhotoFilm, faPhotoVideo } from "@fortawesome/free-solid-svg-icons";

// export default function Form() {
//     return (
//         <div style={{background:"#494C4F"}} className="w-full  h-screen flex flex-col items-center justify-center py-24 sm:py-22">
            
//             <div className="bg-white rounded w-6/12 ">
                
//                <div>
//                     <p className="p-3  text-left text-sm mb-4 font-bold">
//                         <span> <Image className="inline" src={arrowLeft} alt="logo Red" />CREER UN NOUVEAU HOTEL</span> 
//                     </p>
//                 </div>
//                 <hr className="border-dashed"/>
//                 <form className="bg-white  px-8 pt-6 pb-8 mb-4">
//                     <div className="flex flex-row justify-between">
//                         <div className="left m-2 ">
//                             <div className="mb-4">
//                             <label className="block border-gray-300 text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//                                Nom de l`hôtel 
//                             </label>
//                             <input
//                                     type="text"
//                                     className="w-full p-2 block mt-1 block  rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                     placeholder=""
//                                 />

//                             </div>
//                             <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                                E-mail
//                             </label>
//                             <input
//                                     type="email"
//                                     className="w-full p-2 block mt-1 block  rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                     placeholder="john@example.com"
//                                 />

//                             </div>
//                             <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//                                Prix par nuit
//                             </label>
//                             <input
//                                 type="text"
//                                 className="w-full p-2 block mt-1 block  rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                 placeholder=""
//                             />

//                             </div>
//                         </div>
//                         <div className="right m-2">
//                             <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//                                 Addresse
//                             </label>
//                             <input
//                                 type="text"
//                                 className="w-full p-2 block mt-1 block  rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                 placeholder=""
//                             />

//                             </div>
//                             <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                                 Numero de telephone
//                             </label>
//                             <input
//                                 type="text"
//                                 className="w-full p-2 block mt-1 block  rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                 placeholder=""
//                             />

//                             </div>
//                             <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//                                 Devise
//                             </label>
//                             <select id="countries" className="w-full p-2 block mt-1 block  rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
//                                 <option selected>F XOF</option>
//                                 <option value="US">EUR</option>
//                                 <option value="CA">DOLLAR</option>
//                                 <option value="FR">YEN</option>
//                                 <option value="DE">ROUPIE</option>
//                             </select>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <h1>Ajouter une photo</h1>
//                         <div className="w-full relative border-2 border-gray-300  rounded-lg p-6" id="dropzone">
//                             <input type="file" className="absolute inset-0 w-full h-full opacity-0 z-50" />
//                             <div className="flex justify-center">
//                             <Image src={vector} alt="logo Red" /> 
//                                 <h3 className="mt-2 text-sm font-medium text-gray-900">
//                                     <label htmlFor="file-upload" className="relative cursor-pointer">
//                                         <input id="file-upload" name="file-upload" type="file" className="sr-only" />
//                                     </label>
//                                 </h3>
//                             </div>
//                             <p className="mt-1 text-center text-xs text-gray-500">
//                                     Ajouter une photo
//                             </p>


//                         </div>
//                     </div>
//                     <div className="flex justify-end items-center">
//                     <button className="bg-zinc-700 end-0 mt-2 hover:bg-neutral-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
//                         enregistrer
//                     </button>
//                     </div>
//                 </form>
//             </div>
//         </div>

//     );
// }
