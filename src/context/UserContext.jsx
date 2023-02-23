import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [firstValid, setFirstValid] = useState(false);
  const [lastValid, setLastValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [occupationValid, setOccupationValid] = useState(false);
  const [stateValid, setStateValid] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <UserContext.Provider
      value={{
        firstValid,
        setFirstValid,
        lastValid,
        setLastValid,
        nameValid,
        setNameValid,
        emailValid,
        setEmailValid,
        passwordValid,
        setPasswordValid,
        occupationValid,
        setOccupationValid,
        stateValid,
        setStateValid,
        success,
        setSuccess,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
