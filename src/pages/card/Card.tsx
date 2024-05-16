"use client"
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faUserFriends, faP } from '@fortawesome/free-solid-svg-icons';



const Data = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faEnvelopeOpen} size='1x'/>,
    number: 125,
    partie: 'Formulaires',
    text: 'Je ne sais pas quoi mettre',
    background: '#A88ADD',
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faP} size='1x'/>,
    number: 40,
    partie: 'Messages',
    text: 'Je ne sais pas quoi mettre',
    background: '#0CC2AA',
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faUserFriends} size='1x'/>,
    number: 600,
    partie: 'Utilisateurs ',
    text: 'Je ne sais pas quoi mettre',
    background: '#FCC100',
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={faEnvelopeOpen} size='1x'/>,
    number: 25,
    partie: 'E-mails',
    text: 'Je ne sais pas quoi mettre',
    background: '#F90000',
  },
  {
    id: 5,
    icon: <FontAwesomeIcon icon={faP} size='1x'/>,
    number: 40,
    partie: 'Hôtels',
    text: 'Je ne sais pas quoi mettre',
    background: '#9C27B0',
  },
  {
    id: 6,
    icon: <FontAwesomeIcon icon={faUserFriends} size='1x'/>,
    number: 20,
    partie: 'Entités ',
    text: 'Je ne sais pas quoi mettre',
    background: '#1565C0',
  }
]

const CardContainer = styled.section`
  width: 100%;
  margin-top: 3rem;
`;

const SecContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5em;
  padding: 3rem;
  justify-content: center;
`;

const RowIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  background: var(--cardBg);
  box-shadow: 0 2px 4 rgba(140, 140, 141, 0.549);
  overflow: hidden;
  transition: background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: var(--cardHover);
    box-shadow: 1px 4px 4px rgba(140, 140, 141, 0.549);
  }
`;

const IconWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  width: 80px;
  height: 80px;
`;

const CardInfo = styled.div`
  padding: 1rem;

  .number {
    font-weight: 600;
    font-size: 20px;
  }

  .partie {
    font-weight: 400;
    font-size: 14px;
  }

  .price {
    width: 100%;
    justify-content: space-between;
    margin: 1em 0;
    font-size: 14px;
    color: var(--priceColor);
  }
`;



const Card = () => {
  return (
    <CardContainer className="Card my-3">
      <SecContent className="secContent grid px-4">
        {Data.map(({ id, icon, number, partie, text, background }) => (
          <RowIcon   className="rowIcon p-2" key={id}>
            <IconWrapper style={{background}} >
              {icon}
            </IconWrapper>
            <CardInfo className="cardInfo mx-3">
              <span className="continent flex items-center">
                <span className='number'>{number}</span>
                <span className="partie"> {partie} </span>
              </span>
              <div className="price flex">
                {text}
              </div>
            </CardInfo>
          </RowIcon>
        ))}
      </SecContent>
    </CardContainer>
  );
}
export default Card;
