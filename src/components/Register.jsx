import { FormRow, FormRowDropDown } from '.';
import { useRef, useEffect, useState, useContext } from 'react';
import { FETCHREWARDS_URL } from '../config';
import UserContext from '../context/UserContext';

const Register = () => {
  const [states, setStates] = useState([]);
  const [occupations, setOccupations] = useState([]);
  const [message, setMessage] = useState('');

  const formRef = useRef(null);
  const {
    firstValid,
    lastValid,
    emailValid,
    passwordValid,
    occupationValid,
    stateValid,
    setFirstValid,
    setLastValid,

    setEmailValid,
    setPasswordValid,
    setOccupationValid,
    setStateValid,
    success,
    setSuccess,
  } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let name =
      formRef.current.firstName.value + ' ' + formRef.current.lastName.value;
    let email = formRef.current.email.value;
    let password = formRef.current.password.value;
    let occupation = formRef.current.occupation.value;
    let state = formRef.current.state.value;
    let user = { name, email, password, occupation, state };
    if (
      firstValid &&
      lastValid &&
      emailValid &&
      passwordValid &&
      occupationValid &&
      stateValid
    ) {
      try {
        await postUser(user);
        setMessage('Submitted!');
        setSuccess(true);
      } catch (error) {
        console.error(error);
        setMessage('Error submitting form. Please try again.');
        setSuccess(false);
      }
    } else {
      setMessage('Please fill in all fields');
      setSuccess(false);
    }
  };

  const postUser = async (formData) => {
    let postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };
    try {
      const response = await fetch(FETCHREWARDS_URL, postOptions);
      if (!response.ok) {
        throw new Error('Error submitting form');
      }
      const result = await response.json();
      console.log('for testing purposes', { result });
      console.log('for testing purposes', { response });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(FETCHREWARDS_URL);
        const data = await response.json();
        setStates([
          { name: 'Select an option...', abbreviation: 'none' },
          ...data.states,
        ]);
        setOccupations(['Select an option....', ...data.occupations]);
        if (states.length && occupations.length) {
        }
      } catch (error) {
        console.log(error(error));
      }
    };

    getData();
  }, []);

  return (
    <form
      className={`flex flex-col gap-2 p-4 `}
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <FormRow
        type='text'
        id='firstName'
        label='First Name'
        minLength={2}
        maxLength={24}
        required
        setIsValid={setFirstValid}
        isValid={firstValid}
      />
      <FormRow
        type='text'
        id='lastName'
        label='Last Name'
        minLength={2}
        maxLength={24}
        required
        setIsValid={setLastValid}
        isValid={lastValid}
      />
      <FormRow
        type='text'
        id='email'
        label='Email'
        pattern={
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }
        required
        setIsValid={setEmailValid}
        isValid={emailValid}
      />
      <FormRow
        type='password'
        id='password'
        label='Password'
        minLength={8}
        maxLength={24}
        required
        setIsValid={setPasswordValid}
        isValid={passwordValid}
      />

      <FormRowDropDown
        type='select'
        id='occupation'
        label='Occupation'
        options={occupations}
        dataType='array'
        required
        setIsValid={setOccupationValid}
        isValid={occupationValid}
        pattern='Select an option...'
      />
      <FormRowDropDown
        type='select'
        id='state'
        label='State'
        options={states}
        dataType='object'
        required
        setIsValid={setStateValid}
        isValid={stateValid}
        pattern='Select an option...'
      />
      <div
        className={`h-7 text-center ${
          success ? 'text-green-600' : 'text-red-500'
        } font-bold`}
      >
        {message}
      </div>
      <button
        className={`rounded bg-blue-500 py-2 px-4 font-bold text-white transition duration-500 ease-in-out hover:bg-blue-700`}
        type='submit'
      >
        Register
      </button>
    </form>
  );
};
export default Register;
