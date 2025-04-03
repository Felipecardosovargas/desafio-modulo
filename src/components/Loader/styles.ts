import styled, { keyframes } from 'styled-components';

// Breakpoints para responsividade
const breakpoints = {
    tablet: '768px',
    mobile: '480px',
};

// Animação de rotação para a imagem interna
const rotateIn = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

// Animação de rotação para a imagem externa
const rotateOut = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
`;

// Contêiner principal para o loader
export const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 1rem;
`;

// Wrapper para as imagens do loader
export const LoaderWrapper = styled.div`
    position: relative;
    width: 80px;
    height: 80px;

    @media (max-width: ${breakpoints.tablet}) {
        width: 70px;
        height: 70px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        width: 60px;
        height: 60px;
    }
`;

// Imagem externa que gira para fora
export const OuterLoadingImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    animation: ${rotateOut} 2s linear infinite;
`;

// Imagem interna que gira para dentro
export const InnerLoadingImage = styled.img`
    position: absolute;
    width: 70%;
    height: 70%;
    top: 15%;
    left: 15%;
    animation: ${rotateIn} 2s linear infinite;
`;

// Texto que aparece abaixo do loader
export const LoaderText = styled.p`
    margin-top: 1.875rem;
    color: #303030;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.7;
    text-align: center;

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 26px;
        line-height: 1.6;
        margin-top: 1.5rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 22px;
        line-height: 1.6;
        margin-top: 1.25rem;
    }
`;