import React from 'react';
import "./card.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faUserFriends, faUsers } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faP } from '@fortawesome/free-solid-svg-icons/faP';


const Data = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faEnvelopeOpen} size='1x'/>,
    number: 125,
    partie: 'Formulaires',
    text: 'Je ne sais pas quoi mettre',
  },


  {
    id: 2,
    icon: <FontAwesomeIcon icon={faP} size='1x'/>,
    number: 40,
    partie: 'Messages',
    text: 'Je ne sais pas quoi mettre',
  },


  {
    id: 3,
    icon: <FontAwesomeIcon icon={faUserFriends} size='1x'/>,
    number: 600,
    partie: 'Utilisateurs ',
    text: 'Je ne sais pas quoi mettre',
  },


  {
    id: 4,
    icon: <FontAwesomeIcon icon={faEnvelopeOpen} size='1x'/>,
    number: 25,
    partie: 'E-mails',
    text: 'Je ne sais pas quoi mettre',
  },


  {
    id: 5,
    icon: <FontAwesomeIcon icon={faP} size='1x'/>,
    number: 40,
    v: 'Hôtels',
    text: 'Je ne sais pas quoi mettre',
  },


  {
    id: 6,
    icon: <FontAwesomeIcon icon={faUserFriends} size='1x'/>,
    number: 20,
    partie: 'Entités ',
    text: 'Je ne sais pas quoi mettre',
  }


]


function Card() {
  return (
    <section className="Card my-3">     
      <div className="secContent grid px-4">
        {Data.map(({id, icon, number, partie, text}, index) => { 
          return(
            <div className="rowIcon p-2" key={id} >
              <div className={`h-16 w-16 flex items-center justify-center rounded-full object-cover color${index % 6 + 1}`} >
                    {icon}
                </div>
                <div className="cardInfo mx-3">
                  <span className="continent flex items-center">
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
      </div>
    </section>
  )
}


export default Card



