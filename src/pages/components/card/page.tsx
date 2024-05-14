import React, { useEffect} from 'react';
import "./card.css";
import Image  from "next/image";
import symbol  from "@/pages/components/card/imgCard/Symbol.png";
import symbol2  from "@/pages/components/card/imgCard/Symbol2.png";
import symbol3 from "@/pages/components/card/imgCard/Symbol3.png";




// import { HiOutlineLocationMarker } from "react-icons/hi";
// import { HiOutlineClipboardCheck } from "react-icons/hi";

// import Aos from 'aos';
// import  'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc:symbol,
    number: 125,
    partie: 'Formulaires',
    text: 'Je ne sais pas quoi mettre',
  },

  {
    id: 2,
    imgSrc: symbol2,
    number: 40,
    partie: 'Messages',
    text: 'Je ne sais pas quoi mettre',
  },

  {
    id: 3,
    imgSrc: symbol3,
    number: 600,
    partie: 'Utilisateurs ',
    text: 'Je ne sais pas quoi mettre',
  },

  {
    id: 4,
    imgSrc: symbol,
    number: 25,
    partie: 'E-mails',
    text: 'Je ne sais pas quoi mettre',
  },

  {
    id: 5,
    imgSrc: symbol2,
    number: 40,
    v: 'Hôtels',
    text: 'Je ne sais pas quoi mettre',
  },

  {
    id: 6,
    imgSrc: symbol3,
    number: 20,
    partie: 'Entités ',
    text: 'Je ne sais pas quoi mettre',
  }

]

function Card() {

//   useEffect(() =>{
//     Aos.init({duration: 2000})
//     },[])


  return (
    <section className="main containe section">
      
      <nav  className='border-bottom'>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                        <div className="flex flex-col space-x-4 m-2">
                            <div className="text-dark rounded-md px-3 py-2 text-sm font-light text-xl">
                                Bienvenue sur RED Product
                                <span className="text-xs flex flex-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>


                            </div>
                        </div>
                        </div>
                </div>
            </nav>
            
      {/* <div className="secContent grid">
        {Data.map(({id, imgSrc, number, partie, text}) => {
          return(
            <div className="rowIcon" key={id} data-aos="fade-up">
                <div className="h-16 w-16 flex items-center justify-center  rounded-full object-cover bg-yellow-600" >
                <Image src={imgSrc}  alt="icon" />
                </div>
                <div className="cardInfo">
                  <span className="continent flex">
                    <span className='number'>{number}</span>
                    <span className="partie"> {partie} </span>
                  </span>
                  <div className="price flex">
                    {text} 
                  </div>
                </div>
            </div>
          )
        })}
      </div> */}
    </section>
  )
}

export default Card
