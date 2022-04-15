import {ComponentProps} from "react";
import {BaseButton, GoogleSignInButton, InvertedButton} from "./button.styles";

type buttonTypes = "base" | "google-sign-in" | "inverted" | string;

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType: string = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

interface ButtonProps extends ComponentProps<any> {
  children?: React.ReactNode;
  buttonType?: buttonTypes;
}

const Button = (props: ButtonProps) => {
  const {children, buttonType, ...otherProps} = props;

  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
