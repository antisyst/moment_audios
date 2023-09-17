import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Loader from './loader';

const LayoutIndex = styled.main `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-wrap: nowrap;
    overflow: hidden;

    @media only screen and (max-width: 600px) {
      padding: 0 3%;
    }
`
const FormAction = styled.div `
    padding: 30px;
    background: var(--color-prim);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    border-radius: 30px;
    width: 470px;

    @media only screen and (max-width: 600px) {
      width: 100%;
    }
`
const FormVerifyContainer = styled.form `
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    gap: 10px;
    justify-content: center;
`
const InputElementAction = styled.input `
    width: 66px;
    user-select: none;
    background: none;
    font-family: 'Poppins', sans-serif;
    outline: none;
    border-radius: 20px;
    border: 3px solid var(--color-main);
    color: var(--color-white);
    font-weight: bold;
    text-align: center;
    font-size: 24px;
    height: 76px;

    @media only screen and (max-width: 600px)  {
      width: 60px;
      height: 70px;
    }
`
const PassWordContent = styled.h1 `
    text-align: center;
    margin-bottom: 15px;

    @media only screen and (max-width: 600px) {
      font-size: 30px;
    }
`
const ActionRouterButton = styled.button `
  margin-top: 30px;
  width: 88%;
  font-size: 20px;
  border-radius: 30px;
  background: var(--color-main);
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-out;
  color: var(--color-white);
  border: none;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  cursor: pointer;
  padding: 17px 20px;

  @media only screen and (max-width: 600px)  {
    width: 96%;
    cursor: none;
  }
`
const ErrorMessageContent = styled.div `
  margin-top: 15px;
  font-weight: 500;
`


const PasswordPage: React.FC<{ onPasswordSubmit: (password: string) => void }> = ({ onPasswordSubmit }) => {

  const [password, setPassword] = useState<string[]>(['', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const handleInputChange = (value: string, index: number) => {
    if (/^[0-9]$/.test(value)) {
      const newPassword = [...password];
      newPassword[index] = value;
      setPassword(newPassword);

      if (index < inputRefs.length - 1 && value.length === 1) {
        inputRefs[index + 1].current?.focus();
      }

      setIsIncorrect(false);
    } else {
      const newPassword = [...password];
      newPassword[index] = '';
      setPassword(newPassword);
    }
  };

  const handleSubmit = () => {
    const enteredPassword = password.join('');

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (enteredPassword === '1234') {
        onPasswordSubmit(enteredPassword);
      } else {
        setIsIncorrect(true);
      }
    }, 2000);
  };


  return (
    <LayoutIndex>
      <FormAction>
      <PassWordContent>Verify Password</PassWordContent>
      <FormVerifyContainer className="password-input">
        {password.map((value, index) => (
          <InputElementAction
            key={index}
            type="text"
            value={value}
            onChange={(e) => handleInputChange(e.target.value, index)}
            ref={inputRefs[index]}
          />
        ))}
      </FormVerifyContainer>
      <ActionRouterButton onClick={handleSubmit} disabled={isLoading}  className={isLoading ? 'loading-button' : ''}>
        {isLoading ? <Loader/> : 'Confirm Password'}
      </ActionRouterButton>
      {isIncorrect && <ErrorMessageContent className="error-message">Incorrect code. Please try again.</ErrorMessageContent>}
      </FormAction>
      <div className='creator_content'>
          Developed by Ramazan Azimli
        </div>
    </LayoutIndex>
  );
};

export default PasswordPage;
