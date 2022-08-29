import { useContext } from "react";
import { FormContext } from "../../App";

export default function ExampleForm() {
  const { exampleFormContext } = useContext(FormContext);
  const { values, handleSubmit, handleChange } = exampleFormContext;

  return (
    <>
      <form onSubmit={handleSubmit}>
          <input type="text" name="name" id="name" value={values.name} onChange={handleChange}/>
          <input type="number" name="age" id="agee" value={values.age} onChange={handleChange} />
      </form>
    </>
  )
}
