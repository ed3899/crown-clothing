import "./form-input.styles.scss";

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
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}>
          {label}
        </label>
      )}

      {/* Weird behavior when changing multiple instance, types */}
    </div>
  );
};

export default FormInput;
