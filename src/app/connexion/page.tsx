import React from 'react'
import Image  from "next/image";
import logo  from "@/pages/assets/logo.png";
import Link from "next/link";



export default function Connexion() {
  return (
    <div className="bg-neutral-700 h-screen flex flex-col items-center justify-center py-24 sm:py-32">
         <div className="flex items-center justify-center gap-3 py-3">
                <div className="icon">
                    <Image src={logo}  alt="logo" />
                </div>
                <div className="text-white font-bold">Red Product</div>
         </div>
    <div className="w-full max-w-sm">
    
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="p-2">
         <p className="mt-2 text-lg  font-bold ">
            Connectez-vous en tant que`admin
         </p>
     </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="border-b-2 appearance-none   w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Mot de passe
          </label>
          <input className="border-b-2 appearance-none    w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          
        </div>
        <div className="mb-6">
        <input className="m-2"  name="checkbox" value="check" id="check" type="checkbox" placeholder="" />
        
          <p className="inline-block align-baseline font-bold text-sm  hover:text-blue-800" >Gardez-moi connecter</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-gray-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Connection 
          </button>
        </div>
      </form>
        <p className="text-center">
          <Link href="/forgotpwd" className="inline-block align-baseline font-bold text-center text-sm text-orange-500 hover:text-blue-800" >
            Mot de Passe oublié ? 
        </Link>
        </p>
      <p className="text-center text-white text-xs">
        Vous n`avez pas de compte ? <Link href="/inscription" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            S`inscrire 
          </Link>
      </p>
    </div>
  </div>
  )
}




 





