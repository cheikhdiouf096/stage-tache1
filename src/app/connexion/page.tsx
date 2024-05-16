"use client"
import React from "react";
import iconRed from "@/app/assets/icon.png";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";


const StyledContainer = styled.div`
  background: #494C4F;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;
  a {
    text-decoration: none !important;
  }
`;


const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 0;
`;


const StyledIcon = styled.div`
  width: 2rem;
  height: 2rem;
`;


const StyledText = styled.div`
  color: #ffffff;
  font-weight: bold;
  font-size: 1.125rem;
`;


const StyledFormContainer = styled.div`
  width: 100%;
  max-width: 24rem;
  margin-bottom: 1rem;
`;


const StyledForm = styled.form`
  width: 100%;
  max-width: 24rem;
  margin-bottom: 1rem;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 1.5rem 1.5rem;
`;


const StyledInfo = styled.p`
  background-color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  padding: 0.75rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 1rem;
`;


const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #494c4f;
  border-radius: 0;
  padding: 0.5rem 0.75rem;
  color: #4b5563;
  margin-bottom: 1rem;
  background-color: transparent;
  &:focus {
    outline: none;
    border-color: lime;
  }
`;


const StyledCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;


const StyledCheckboxInput = styled.input`
    margin-bottom: 0.75rem
`;


const StyledCheckboxText = styled.p`
  color: #4b5563;
  font-weight: bold;
  font-size: 0.875rem;
  margin-bottom: 0.75rem
`;


const StyledSubmitButton = styled.button`
  width: 100%;
  background: #45484B;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  padding: 0.5rem 0;
  border-radius: 0.25rem;
  transition: background-color 0.3s;
  cursor: pointer;
  outline: none;
  border: none;
  &:hover {
    background-color: #000;
  }
`;


const StyledForgotPasswordLink = styled.div`
  color: #ffcc00;
  margin-bottom: 0rem;
`;


const StyledSignupLink = styled.div`
  color: #ffffff;
`;


const Connexion = () => {
  return (
    <>
      <StyledContainer>
        <StyledLogoContainer>
          <StyledIcon>
            <Image src={iconRed} alt="logo Red" />
          </StyledIcon>
          <StyledText>Red Product</StyledText>
        </StyledLogoContainer>
        <StyledFormContainer>
          <StyledForm>
            <StyledInfo>Connectez-vous en tant qu admin</StyledInfo>
            <div className="mb-4">
              <label htmlFor="email" className="font-bold" style={{color: '#45484B'}}>Email</label>
              <StyledInput id="email" type="email" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="font-bold" style={{color: '#45484B'}}>Mot de passe</label>
              <StyledInput id="password" type="password" />
            </div>
            <StyledCheckboxContainer>
              <StyledCheckboxInput
                type="checkbox"
                id="coding"
                name="interest"
                value="coding"
              />
              <StyledCheckboxText>Garder-moi connecter</StyledCheckboxText>
            </StyledCheckboxContainer>
            <Link href="/dashboard">
              <StyledSubmitButton type="submit">Se connecter</StyledSubmitButton>
            </Link>
          </StyledForm>
        </StyledFormContainer>
        <Link href="/forgotpwd">
        <StyledForgotPasswordLink>
            Mot de passe oublié?
        </StyledForgotPasswordLink>
        </Link>
        <StyledSignupLink className="text-white">
          Vous n avez pas de compte?{" "}
          <Link href="/inscription" style={{color: "#ffcc00"}}>Inscription</Link>
        </StyledSignupLink>
      </StyledContainer>
    </>
  );
};


export default Connexion;



