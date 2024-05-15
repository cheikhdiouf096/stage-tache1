import React from "react";
import iconRed from "@/app/assets/icon.png";
import Image from "next/image";
import Link from "next/link";

const page = () => {

    return (
        <div style={{background:"#494C4F"}} className=" h-screen flex flex-col items-center justify-center py-24 sm:py-26">
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
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 p-5">
                <div>
                    <p className="shadow p-3 border rounded text-center text-sm mb-4 font-bold">
                        Connectez-vous en tant qu`admin
                    </p>
                </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input 
                        className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" 
                    />
                    </div>
                    <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Mot de passe
                    </label>
                    <input 
                        className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" 
                    />
                    </div>
                    <div className="flex gap-3 mb-3">
                        <div className="checkbox">
                        <input 
                            type="checkbox" 
                            id="coding" name="interest" 
                            value="coding" 
                        />
                        </div>
                        <div className="text">
                            <p className="text-sm font-bold">Garder-moi connecter</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                    <Link href="/dashboard" className="bg-zinc-700 w-96 hover:bg-neutral-900 text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Se connecter
                    </Link>
                    </div>
                </form>
            </div>
            <div className="text-yellow-400">
                <Link href="/forgotpwd" className="text-yellow-400">
                    Mot de passe oublié?
                </Link>
            </div>
            <div className="text-white">
                Vous n`avez pas de compte?<span> </span>
                <Link href="/inscription" className="text-yellow-400">
                    Inscription
                </Link>
            </div>
        </div>

    );
};

export default page;
