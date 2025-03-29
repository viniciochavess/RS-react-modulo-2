interface ButtonProps {
    variant?: "primary" | "secondary" | "success" | "danger" | "default";
}


import { ButtonContainer } from './Button.styles';
export function Button({variant="default"}: ButtonProps) {
    return (
        <ButtonContainer variant={variant} >
            Button
        </ButtonContainer>
    )
}