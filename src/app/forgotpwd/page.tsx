import React from 'react'
import  Image  from "next/image";
import  logo  from "@/pages/assets/logo.png";
import Link from "next/link";



export default function Forgotpwd() {
  return (
    <div className="bg-neutral-700 h-screen flex flex-col items-center justify-center py-32 sm:py-32">
        <div className="flex items-center justify-center gap-3 py-3">
                <div className="icon">
                    <Image
                        src={logo}
                        alt='logo Red'
                    />


                </div>
                <div className="text-white font-bold">Red Product</div>
         </div>
    <div className="w-full max-w-sm">
    
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className='p-2'>
         <p className="mt-2 text-lg  font-bold ">
            Mot de passe oublié
         </p>
     </div>
        <div className="mb-6">
          <p className="inline-block align-baseline font-bold text-sm  hover:text-blue-800" >
          Entrez votre adresse e-mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe.
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="border-b-2 appearance-none   w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" />
        </div>
        <div className="flex mb-4 items-center justify-between">
          <button className="bg-gray-500 mt-4 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Envoyer
          </button>
        </div>
      </form>
      <p className="text-center text-white text-xs">
        Revenir a la <Link href="/connexion" className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-blue-800" >
           connexion
          </Link>
      </p>
    </div>
  </div>
  )
}
