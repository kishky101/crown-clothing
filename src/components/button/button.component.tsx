import {FC, ButtonHTMLAttributes} from 'react';
import { BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner } from './button.styles';


export enum BUTTON_TYPE_CLASSES {
    base = 'base',
    google = 'google-sign-in',
    inverted =  'inverted'
}

const getButton = (buttonTypes = BUTTON_TYPE_CLASSES.base): typeof BaseButton => (
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
    }[buttonTypes]
)

type ButtonProps = {
    isLoading?: boolean;
    buttonTypes?: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ children, isLoading, buttonTypes, ...otherProps}) => {
    const CustomButton = getButton(buttonTypes)
    return (
        <CustomButton disabled={isLoading} {...otherProps}>
            {isLoading? <ButtonSpinner />: children}
        </CustomButton>
    )
}

export default Button;