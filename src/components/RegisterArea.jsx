import { Register, SuccessRegister } from '.';
import UserContext from '../context/UserContext';
import { useContext } from 'react';

const RegisterArea = () => {
  const { success } = useContext(UserContext);
  let formTitle = success ? 'Succesfully Registered' : 'User Sign Up';
  let formContent = success ? <SuccessRegister /> : <Register />;
  return (
    <>
      {
        <>
          {<h1 className={`text-center text-xl font-bold`}> {formTitle} </h1>}
          {formContent}
        </>
      }
    </>
  );
};
export default RegisterArea;
