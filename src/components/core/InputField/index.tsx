import { ChangeEvent } from "react";
import { Typography } from "../Typography";

interface TextInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  label,
  name,
  type = "text",
  value,
  placeholder,
  onChange,
}: TextInputProps) => {

  return (
    <div className="input-field">
      <Typography
        as="label"
        variant="sm"
        htmlFor={name}
        text={label}
      />
      <input
        id={name}
        title={name}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default InputField