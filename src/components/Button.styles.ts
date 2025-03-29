import styled from "styled-components";

interface colorProps {
    variant?: "primary" | "secondary" | "success" | "danger" | "default";
    
}

const colorType = {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    danger: "#dc3545",
    default: "#6c757d",
}


export const ButtonContainer = styled.button<colorProps>`
    
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    color: white;

    background-color: ${(props)=> props.theme.dark};
    
  

`