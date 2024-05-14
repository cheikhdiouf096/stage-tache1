import React, { useEffect} from 'react';
import "./hote.css";
import  Image  from "next/image";
import  img1  from "@/pages/components/hotel/imghotel/img1.png";
import  img2  from "@/pages/components/hotel/imghotel/img2.png";
import  img3 from "@/pages/components/hotel/imghotel/img3.png";
import  img4 from "@/pages/components/hotel/imghotel/img4.png";
import  img5 from "@/pages/components/hotel/imghotel/img5.png";
import  img6 from "@/pages/components/hotel/imghotel/img6.png";
import  img7 from "@/pages/components/hotel/imghotel/img7.png";
import  img8 from "@/pages/components/hotel/imghotel/img8.png";



// import { HiOutlineLocationMarker } from "react-icons/hi";
// import { HiOutlineClipboardCheck } from "react-icons/hi";

// import Aos from 'aos';
// import  'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Hotel Terrou-Bi',
    location: 'Boulevard Martin Luther King Dakar, 11500',
    fees: '25000 XOF par nuit',
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: 'King Fahd Palace',
    location: 'Rte des Almadies, Dakar',
    fees: '20000 XOF par nuit',
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Radisson Blu Hotel',
    location: 'Rte de la Corniche O, Dakar 16868',
    fees: '22000 XOF par nuit',
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Pullman Dakar Teranga',
    location: 'Place de l`Independance, 10 Rue PL 29, Dakar',
    fees: '30000 XOF par nuit',
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Hôtel Lac Rose',
    location: 'Lac Rose, Dakar',
    fees: '25000 XOF par nuit',
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Hôtel Saly',
    location: 'Mbour, Sénégal ',
    grade: 'CULTURAL RELAX',
    fees: '20000 XOF par nuit',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
     Eligendi magni molestiae maiores molestias. Odit distinctio neque qui.
      Cumque ducimus hic explicabo, porro dolorum suscipit facere adipisci
       deleniti. Hic, nemo rem.
     .`
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Palm Beach Resort & Spa',
    location: 'BP64, Saly 23000',
    fees: '22000 XOF par nuit',
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Pullman Dakar Teranga',
    location: 'Place de l`Independance, 10 Rue PL 29, Dakar',
    grade: 'CULTURAL RELAX',
    fees: '30000 XOF par nuit',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
     Eligendi magni molestiae maiores molestias. Odit distinctio neque qui.
      Cumque ducimus hic explicabo, porro dolorum suscipit facere adipisci
       deleniti. Hic, nemo rem.
     .`
  },
]

function Hotel() {

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
                                Hotels
                                <span className="text-xl text-white font-bold"> 8</span>
                            </div>
                        </div>
                        </div>
                </div>
            </nav>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
            
        </h3>
      </div>
      <div className="secContent grid">
        {/* so guys here we are going to use highe order array method (map).
        to do that we are going to use a list of object in one array.
        i am going to create an array naming data and from that we shall map() to fatch  each
        destination at once. i hope that will make sense to you */}


        {Data.map(({id, imgSrc, destTitle,location, grade, fees, description}) => {
          return(
            <div key={id}
            data-aos="fade-up"
             className="singleDestination">
              {/* here it will return single id from the map array */}

              <div className="imageDiv">
                <Image src={imgSrc}  alt={destTitle} />
              </div>
              <div className="cardInfo">
                <span className="continent flex">
                  <span className="address">{location} </span>
                </span>
                <h6 className="destTitle">{destTitle}</h6>
                <div className="price flex">
                  {fees} 
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Hotel
