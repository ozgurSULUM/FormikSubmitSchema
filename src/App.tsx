import { createContext } from 'react';
import ExampleForm from './components/ExampleForm';
import SecondForm from './components/SecondForm';
import useRegisterForms from './hooks/register-hooks/form-hooks/useRegisterForms';

export const FormContext = createContext<IFormContext>(undefined);

function App() {
  const formContext = useRegisterForms();

  return (
    <FormContext.Provider value={formContext}>
      <ExampleForm />
      <SecondForm />
      <button onClick={formContext.submitForms}>submit</button>
    </FormContext.Provider>
  )
}

export default App
