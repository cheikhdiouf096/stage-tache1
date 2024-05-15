import React from "react";
import iconRed from "@/app/assets/icon.png";
import Image from "next/image";
import Link from "next/link";


export default function ForgotPwd() {
    return (
        <div style={{background:"#494C4F"}} className="h-screen flex flex-col items-center justify-center py-24 sm:py-22">
             <div className="flex items-center justify-center gap-3 py-3">
                <div className="icon">
                    <Image
                        src={iconRed}
                        alt="logo Red"
                    />

                </div>
                <div className="text-white font-bold text-lg">Red Product</div>
            </div>
            <div className="w-full max-w-sm">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div>
                    <p className="shadow p-3 border rounded text-center text-sm mb-4 font-bold">
                        Mot de passe oublié?
                    </p>
                </div>
                    <div className="mb-4 text-stone-500">
                    Entrez votre adresse e-mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe.
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input 
                        className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" 
                    />
                    </div>
                    <div className="flex items-center justify-between">
                    <button className="bg-zinc-700 w-96 hover:bg-neutral-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Envoyez
                    </button>
                    </div>
                </form>
            </div>
            <div className="text-white">
                Revenir à la
                <Link href="/" className="text-yellow-400"> connexion</Link></div>
        </div>

    );
}
