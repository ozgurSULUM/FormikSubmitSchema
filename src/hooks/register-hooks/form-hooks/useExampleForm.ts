import { useFormik } from "formik"
import * as yup from 'yup';

let schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required()
  });

const useExampleForm = () => {
    return useFormik({
        initialValues: {
            name: '',
            age: 0
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values)
        }
    })
};

export default useExampleForm;