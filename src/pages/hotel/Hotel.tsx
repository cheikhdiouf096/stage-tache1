"use client"
import React from "react";
import styled from 'styled-components';
import Image from "next/image";
import img1 from "@/pages/hotel/imghotel/img1.png";
import img2 from "@/pages/hotel/imghotel/img2.png";
import img3 from "@/pages/hotel/imghotel/img3.png";
import img4 from "@/pages/hotel/imghotel/img4.png";
import img5 from "@/pages/hotel/imghotel/img5.png";
import img6 from "@/pages/hotel/imghotel/img6.png";
import img7 from "@/pages/hotel/imghotel/img7.png";
import img8 from "@/pages/hotel/imghotel/img8.png";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Hotel Terrou-Bi",
    location: "Boulevard Martin Luther King Dakar, 11500",
    fees: "25000 XOF par nuit",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "King Fahd Palace",
    location: "Rte des Almadies, Dakar",
    fees: "20000 XOF par nuit",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Radisson Blu Hotel",
    location: "Rte de la Corniche O, Dakar 16868",
    fees: "22000 XOF par nuit",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Pullman Dakar Teranga",
    location: "Place de l`Independance, 10 Rue PL 29, Dakar",
    fees: "30000 XOF par nuit",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Hôtel Lac Rose",
    location: "Lac Rose, Dakar",
    fees: "25000 XOF par nuit",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Hôtel Saly",
    location: "Mbour, Sénégal ",
    grade: "CULTURAL RELAX",
    fees: "20000 XOF par nuit",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
     Eligendi magni molestiae maiores molestias. Odit distinctio neque qui.
      Cumque ducimus hic explicabo, porro dolorum suscipit facere adipisci
       deleniti. Hic, nemo rem.
     .`
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Palm Beach Resort & Spa",
    location: "BP64, Saly 23000",
    fees: "22000 XOF par nuit",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Pullman Dakar Teranga",
    location: "Place de l`Independance, 10 Rue PL 29, Dakar",
    grade: "CULTURAL RELAX",
    fees: "30000 XOF par nuit",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
     Eligendi magni molestiae maiores molestias. Odit distinctio neque qui.
      Cumque ducimus hic explicabo, porro dolorum suscipit facere adipisci
       deleniti. Hic, nemo rem.
     .`
  },
]

const HotelContainer = styled.section`
  justify-content: center;
`;

const SecContent = styled.div`
  gap: 1rem;
  display: grid;
  justify-self:center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));


  .singleDestination {
    width: 100%;
    height: 100%;
    display: grid;
    row-gap: 1rem;
    border-radius: 10px;
    align-items: center;
    background: var(--cardBg);
    box-shadow: 0 2px 4 rgba(140, 140, 141, 0.549);
    overflow: hidden;
    transition: background 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      background: var(--cardHover);
      box-shadow: 1px 4px 4px rgba(140, 140, 141, 0.549);
    }
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    .imageDiv {
      height: 200px;
      width: 100%;
      overflow: hidden;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: 2s ease;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }

    .cardInfo {
      .continent {
        .icon {
          color: var(--textColor);
          font-size: 18px;
        }
        .address {
          color: var(--addressColor);
          font-weight: 400;
          font-size: 10px;
        }
      }

      .price {
        width: 100%;
        justify-content: space-between;
        margin: 1em 0;
        font-size: 14px;
        color: var(--PriceColor);

        .grade {
          color: var(--textColor);
          max-width: 100px;
          line-height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;

          small {
            text-align: center;
            background: var(--gradientColor);
            border-radius: 1rem;
            color: var(--whiteColor);
            padding: 1px 10px;
            font-size: 10px;
          }
        }
      }
    }
  }
`;

const Hotel = () => {
  return (
    <HotelContainer className="Hotel my-4">
      <SecContent className="secContent d-grid place-items-center px-5">
        {Data.map(({ id, imgSrc, destTitle, location, fees }) => (
          <div key={id} data-aos="fade-up" className="singleDestination">
            <div className="imageDiv">
              <Image src={imgSrc} alt={destTitle} />
            </div>
            <div className="cardInfo p-2">
              <span className="continent flex">
                <span className="address">{location} </span>
              </span>
              <p className="destTitle text-xs my-2">{destTitle}</p>
              <div className="price flex">{fees}</div>
            </div>
          </div>
        ))}
      </SecContent>
    </HotelContainer>
  );
}

export default Hotel;  
