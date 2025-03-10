import React from "react";
import { HeaderContainer, Img } from "./styles";
import { useNavigate } from "react-router-dom";
import image from "../../assets/header.svg";

const Header: React.FC = () => {
    const navigate = useNavigate();

    // Função de navegação quando a imagem for clicada
    const handleClick = () => {
        navigate("/");  // Redireciona para a página inicial (home)
    };

    return (
        <HeaderContainer>
            <Img 
                src={image} 
                alt="Logo" 
                onClick={handleClick}  // Adiciona a função de clique na imagem
            />
        </HeaderContainer>
    );
};

export default Header;
