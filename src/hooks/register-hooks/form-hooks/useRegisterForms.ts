import useExampleForm from './useExampleForm';
import useSecondForm from './useSecondForm';

const useRegisterForms = () => {
    const exampleFormContext = useExampleForm();
    const secondFormContext = useSecondForm();

    const submitForms = () => {
        exampleFormContext.submitForm();
        secondFormContext.submitForm();
    }
    
    return { exampleFormContext, secondFormContext, submitForms };
}

export default useRegisterForms;