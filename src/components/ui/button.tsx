import {ButtonProps, ButtonType} from "@/types";
import {FC} from "react";

const Button: FC<ButtonProps> = ({ className, onClick, children, type = ButtonType.button, label,  ...rest }) => {
    const buttonContent = children ?? label
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
        {...rest}>
            {buttonContent && <span>{buttonContent}</span>}
        </button>
    )
}

export default Button;