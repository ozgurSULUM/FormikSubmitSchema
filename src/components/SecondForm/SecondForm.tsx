import { useContext } from "react";
import { FormContext } from "../../App";

export default function SecondForm() {
    const { secondFormContext } = useContext(FormContext);
    const { values, handleChange } = secondFormContext;

    return (
        <form>
            <input type="text" name="birthdate" id="birthdate" value={values.birthdate} onChange={handleChange} />
            <input type="text" name="deathdate" id="deathdate" value={values.deathdate} onChange={handleChange} />
        </form>
    )
}
