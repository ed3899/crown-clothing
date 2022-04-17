import {FormInputLabel, Input, Group} from "./form-input.styles";

interface FormInputProps {
  label: string;
  required: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  type: string;
}

const FormInput = (props: FormInputProps) => {
  const {label, ...otherProps} = props;
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel about={otherProps.value.length ? "true" : ""}>
          {label}
        </FormInputLabel>
      )}

      {/* Weird behavior when changing multiple instance, types */}
    </Group>
  );
};

export default FormInput;
