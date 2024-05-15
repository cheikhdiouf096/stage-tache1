import Image from "next/image";
import iconRed from "@/app/assets/icon.png";
import vector from "@/app/assets/Vector.png";
import arrowLeft from "@/app/assets/arrow-left.png";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoFilm, faPhotoVideo } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
    return (
        <div style={{background:"#494C4F"}} className="w-full  h-screen flex flex-col items-center justify-center py-24 sm:py-22">
            
            <div className="bg-white rounded w-6/12 ">
                
               <div>
                    <p className="p-3  text-left text-sm mb-4 font-bold">
                        <span> <Image className="inline" src={arrowLeft} alt="logo Red" />CREER UN NOUVEAU HOTEL</span> 
                    </p>
                </div>
                <hr className="border-dashed"/>
                <form className="bg-white  px-8 pt-6 pb-8 mb-4">
                    <div className="flex flex-row justify-between">
                        <div className="left m-2 ">
                            <div className="mb-4">
                            <label className="block border-gray-300 text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                               Nom de l`hôtel 
                            </label>
                            <input
                                    type="text"
                                    className="w-full p-2 block mt-1 block  rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder=""
                                />

                            </div>
                            <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                               E-mail
                            </label>
                            <input
                                    type="email"
                                    className="w-full p-2 block mt-1 block  rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="john@example.com"
                                />

                            </div>
                            <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                               Prix par nuit
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 block mt-1 block  rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder=""
                            />

                            </div>
                        </div>
                        <div className="right m-2">
                            <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Addresse
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 block mt-1 block  rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder=""
                            />

                            </div>
                            <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Numero de telephone
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 block mt-1 block  rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder=""
                            />

                            </div>
                            <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Devise
                            </label>
                            <select id="countries" className="w-full p-2 block mt-1 block  rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                <option selected>F XOF</option>
                                <option value="US">EUR</option>
                                <option value="CA">DOLLAR</option>
                                <option value="FR">YEN</option>
                                <option value="DE">ROUPIE</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Ajouter une photo</h1>
                        <div className="w-full relative border-2 border-gray-300  rounded-lg p-6" id="dropzone">
                            <input type="file" className="absolute inset-0 w-full h-full opacity-0 z-50" />
                            <div className="flex justify-center">
                            <Image src={vector} alt="logo Red" /> 
                                <h3 className="mt-2 text-sm font-medium text-gray-900">
                                    <label htmlFor="file-upload" className="relative cursor-pointer">
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                </h3>
                            </div>
                            <p className="mt-1 text-center text-xs text-gray-500">
                                    Ajouter une photo
                            </p>


                        </div>
                    </div>
                    <div className="flex justify-end items-center">
                    <button className="bg-zinc-700 end-0 mt-2 hover:bg-neutral-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        enregistrer
                    </button>
                    </div>
                </form>
            </div>
        </div>

    );
}
