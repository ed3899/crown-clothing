import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: any;
  buttonType?: keyof typeof BUTTON_TYPE_CLASSES;
}

const Button = (props: ButtonProps) => {
  const {children, buttonType, ...otherProps} = props;

  return (
    <button
      className={`button-container ${buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ''}`}
      {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
