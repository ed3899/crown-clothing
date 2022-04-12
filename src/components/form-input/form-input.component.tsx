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
    <div>
      <label>{label}</label>
      <input {...otherProps} />
    </div>
  );
};

export default FormInput;
