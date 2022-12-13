import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    ineverted:  'inverted'
}

const Button = ({children, buttonTypes, ...otherProps}) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonTypes]}`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button;