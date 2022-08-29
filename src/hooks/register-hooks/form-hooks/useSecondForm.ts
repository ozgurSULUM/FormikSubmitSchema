import { useFormik } from "formik"
import * as yup from 'yup';

let schema = yup.object().shape({
    birthdate: yup.string().required(),
    deathdate: yup.string().required(),
  });

const useSecondForm = () => {
    return useFormik({
        initialValues: {
            birthdate: '',
            deathdate: ''
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values)
        }
    })
};

export default useSecondForm;