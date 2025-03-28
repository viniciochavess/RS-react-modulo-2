interface ButtonProps {
    color?: "primary" | "secondary" | "success" | "danger" | "default";
}


import { ButtonContainer } from './Button.styles';
export function Button({color="default"}: ButtonProps) {
    return (
        <ButtonContainer variant={color} >
            Button
        </ButtonContainer>
    )
}