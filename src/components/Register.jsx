import { FormRow, FormRowDropDown } from '.';
import { useRef, useEffect, useState } from 'react';

const Register = () => {
  const [states, setStates] = useState([]);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current.firstName.value);
    console.log(formRef.current.lastName.value);
    console.log(formRef.current.password.value);
    console.log(formRef.current.occupation.value);
    console.log(formRef.current.state.value);
  };

  const stateOptions = ['choose state', 'cat', 'dog', 'bird'];

  useEffect(() => {
    const getStates = async () => {
      console.log('getting states');
    };

    getStates();
  }, []);

  return (
    <form
      className={`flex flex-col gap-2 p-4`}
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <FormRow type='text' id='firstName' label='First Name' />
      <FormRow type='text' id='lastName' label='Last Name' />
      <FormRow type='password' id='password' label='Password' />
      <FormRow type='text' id='occupation' label='Occupation' />

      <FormRowDropDown
        type='select'
        id='state'
        label='State'
        options={stateOptions}
      />
      <button className={`border`} type='submit'>
        submit
      </button>
    </form>
  );
};
export default Register;
