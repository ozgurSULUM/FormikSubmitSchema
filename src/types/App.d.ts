interface IFormContext {
    exampleFormContext: FormikProps<ExampleForm>,
    secondFormContext: FormikProps<SecondForm>,
    submitForms: () => void
}