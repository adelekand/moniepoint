import { ChangeEvent, useState } from "react"
import InputField from "./core/InputField"
import Button from "./core/Button";
import AnimatedContainer from "./AnimatedContainer";

const TravelCalculator = () => {
  const [formFields, setFormFields] = useState({ country: '', date: '' });

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <form className="calculator">
      <AnimatedContainer delay={0.7}>
        <InputField
          label="Enter the country"
          name="country"
          value={formFields.country}
          placeholder="Australia"
          onChange={handleOnChange}
        />
      </AnimatedContainer>
      {/* TODO: Create multiple date picker */}
      <AnimatedContainer delay={0.8}>
        <InputField
          type="date"
          label="Choose travel dates"
          name="country"
          value={formFields.date}
          placeholder="11 Apr - 20 Apr"
          onChange={handleOnChange}
        />
      </AnimatedContainer>
      <AnimatedContainer
        delay={0.9}
        className="flex mt-4 col-span-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
      >
        <Button>Calculate</Button>
      </AnimatedContainer>

    </form>
  )
}

export default TravelCalculator